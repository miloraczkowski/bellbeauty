import { MongoClient } from 'mongodb'

/** @type {import('./index').RequestHandler} */
export async function get() {
  const mongo = new MongoClient('mongodb://localhost:27017')

  try {
    await mongo.connect()
  } catch {
    return {
      status: 500
    }
  }

  const Lists = mongo.db('bellbeauty').collection('pricelists')

  try {
    const lists = await Lists.find({ show: true }).project({
      _id: 0,
      show: 0
    }).toArray()

    return {
      body: {
        unorderedLists: lists
      }
    }
  } catch {
    return {
      status: 500
    }
  }
}
