import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ThreadValidator from 'App/Validators/ThreadValidator'

export default class ThreadsController {
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
}
