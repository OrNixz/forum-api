import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }

  public async run () {
    // Write your database queries inside the run method
    await this.runSeeder(await import('../CategorySeeder'))
    await this.runSeeder(await import('../UserSeeder'))
    await this.runSeeder(await import('../ThreadSeeder'))
  }
}
