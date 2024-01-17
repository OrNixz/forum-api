import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnauthorizedException from 'App/Exceptions/UnauthorizedException'
import Thread from 'App/Models/Thread'
import SortThreadValidator from 'App/Validators/SortThreadValidator'
import ThreadValidator from 'App/Validators/ThreadValidator'

export default class ThreadsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const page = request.input('page', 1)
      const perPage = request.input('per_page', 10)
      const userId = request.input('user_id')
      const categoryId = request.input('category_id')

      const sortValidated = await request.validate(SortThreadValidator)
      const sortBy = sortValidated.sort_by || 'id'
      const order = sortValidated.order || 'asc'

      const threads = await Thread.query()
        .if(userId, (query) => query.where('user_id', userId))
        .if(categoryId, (query) => query.where('category_id', categoryId))
        .orderBy(sortBy, order)
        .preload('category')
        .preload('user')
        .preload('replies')
        .paginate(page, perPage)
      return response.status(200).json({
        data: threads,
      })
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      })
    }
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const validateData = await request.validate(ThreadValidator)

    try {
      const thread = await auth.user?.related('threads').create(validateData)
      await thread?.load('category')
      await thread?.load('user')

      return response.status(201).json({
        data: thread,
      })
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      // const thread = await Thread.findOrFail(params.id)
      const thread = await Thread.query()
        .where('id', params.id)
        .preload('category')
        .preload('user')
        .preload('replies')
        .firstOrFail()
      return response.status(200).json({
        data: thread,
      })
    } catch (error) {
      return response.status(404).json({
        message: error.message,
      })
    }
  }

  public async update({ params, auth, request, response }: HttpContextContract) {
    try {
      const user = await auth.user
      const thread = await Thread.findOrFail(params.id)

      if (user?.id !== thread.userId) {
        throw new UnauthorizedException('Unauthorized', 403, 'E_UNAUTHORIZED_EXCEPTION')
      }

      const validateData = await request.validate(ThreadValidator)

      await thread.merge(validateData).save()

      await thread?.load('category')
      await thread?.load('user')

      return response.status(200).json({
        data: thread,
      })
    } catch (error) {
      if (error.name === 'UnauthorizedException') {
        return response.status(error.status).json({
          message: error.message,
        })
      } else {
        return response.status(404).json({
          message: 'Thread not found',
        })
      }
    }
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    try {
      const user = await auth.user
      const thread = await Thread.findOrFail(params.id)

      if (user?.id !== thread.userId) {
        throw new UnauthorizedException('Unauthorized', 403, 'E_UNAUTHORIZED_EXCEPTION')
      }

      await thread.delete()
      return response.status(200).json({
        message: 'Thread deleted successfully',
      })
    } catch (error) {
      if (error.name === 'UnauthorizedException') {
        return response.status(error.status).json({
          message: error.message,
        })
      } else {
        return response.status(404).json({
          message: 'Thread not found',
        })
      }
    }
  }
}
