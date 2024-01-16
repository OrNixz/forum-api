import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'password'
      },
      {
        name: 'User',
        email: 'user@gmail.com',
        password: 'password'
      }
    ])
  }
}
