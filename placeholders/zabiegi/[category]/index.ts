import type { RequestHandler } from '@sveltejs/kit'
import { MongoClient } from 'mongodb'

export const get: RequestHandler = async ({ params }) => {
  const mongo = new MongoClient('mongodb://localhost:27017')

  await mongo.connect().catch(() => {
    return { status: 500 }
  })

  const Categories = mongo.db('bellbeauty').collection('categories')
  const Treatments = mongo.db('bellbeauty').collection('treatments')

  const category = await Categories.findOne({
    urlName: params.category,
    show: true
  }, {
    projection: {
      _id: 0,
      name: 1,
      treatments: 1
    }
  })

  if (!category) return { status: 404 }

  const treatments = await Treatments.find({
    name: { 
      $in: category.treatments
    },
    show: true
  }).project({
    _id: 0,
    name: 1,
    shortDescription: 1
  }).toArray()

  if (!treatments) return { status: 404 }

  return {
    body: {
      category,
      treatments
    }
  }
}
