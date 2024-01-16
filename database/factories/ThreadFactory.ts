import ThreadFactory from 'App/Models/Thread'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(ThreadFactory, ({ faker }) => {
  return {
    userId: Math.floor(Math.random() * 2) + 1,
    categoryId: Math.floor(Math.random() * 5) + 1,
    title: faker.lorem.words(4),
    content: faker.lorem.paragraphs(2),
  }
}).build()
