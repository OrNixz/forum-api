import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Thread from 'App/Models/Thread'
import ReplyValidator from 'App/Validators/ReplyValidator'

export default class RepliesController {
  public async store({ request, params, auth, response }: HttpContextContract) {
    try {
      const { content } = await request.validate(ReplyValidator)
      const thread = await Thread.findOrFail(params.thread_id)

      const reply = await thread.related('replies').create({
        userId: auth.user?.id,
        content,
      })

      await reply.load('user')
      await reply.load('thread')

      return response.status(201).json({
        data: reply,
      })
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      })
    }
  }
}
