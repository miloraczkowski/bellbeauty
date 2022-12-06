import type { PageServerLoad } from './$types'
import { MongoClient } from 'mongodb'

export const load: PageServerLoad = async () => {
  const mongo = new MongoClient('mongodb://127.0.0.1:27017')

  try {
    await mongo.connect()
  } catch (err) {
    console.log(err)
    return {
      status: 500
    }
  }

  const Lists = mongo.db('bellbeauty').collection('pricelists')
  let lists = []

  try {
    lists = await Lists.find({ show: true }).project({
      _id: 0,
      show: 0
    }).toArray()
  } catch {
    return {
      status: 500
    }
  }

  await mongo.close()

  return {
    unorderedLists: lists
  }
}
