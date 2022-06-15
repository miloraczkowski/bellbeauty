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

  const Tables = mongo.db('bellbeauty').collection('pricelists')

  try {
    const tables = await Tables.find({ show: true }).project({
      _id: 0,
      name: 1,
      description: 1,
      items: 1
    }).toArray()

    return {
      Headers: {
        accept: 'application/json'
      },
      body: {
        tables
      }
    }
  } catch {
    return {
      status: 500
    }
  }
}
