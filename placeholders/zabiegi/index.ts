import type { RequestHandler } from '@sveltejs/kit'
import { MongoClient } from 'mongodb'

export const get: RequestHandler = async () => {
  const mongo = new MongoClient('mongodb://localhost:27017')

  await mongo.connect().catch(() => {
    return { status: 500 }
  })

  const Categories = mongo.db('bellbeauty').collection('categories')

  const categories = await Categories.find({ show: true }).project({
    _id: 0,
    name: 1,
    shortDescription: 1,
    treatments: 1
  }).toArray()

  if (!categories) return { status: 500 }

  return {
    body: {
      items: categories
    }
  }
}
