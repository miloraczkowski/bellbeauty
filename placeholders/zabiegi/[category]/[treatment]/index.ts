import type { RequestHandler } from "@sveltejs/kit";
import { MongoClient } from "mongodb";
import { readdirSync } from "fs";
import { parseName } from "$lib/assets/main";

function normalizeName(input: string) {
  let word = input.replace(/_/g, ' ')
  word = word.charAt(0).toUpperCase() + word.slice(1)
  return word
}

export const get: RequestHandler = async ({ params }) => {
  const mongo = new MongoClient('mongodb://localhost:27017')

  await mongo.connect().catch(() => {
    return { status: 500 }
  })

  const Treatment = mongo.db('bellbeauty').collection('treatments')
  const Category = mongo.db('bellbeauty').collection('categories')

  const treatment = await Treatment.findOne({
    name: normalizeName(params.treatment),
    show: true
  }, {
    projection: {
      _id: 0,
      show: 0,
      shortDescription: 0
    }
  })

  if (!treatment) return { status: 404 }

  const category = await Category.findOne({
    name: normalizeName(params.category),
    show: true
  }, {
    projection: {
      _id: 0,
      show: 0,
      shortDescription: 0
    }
  })

  if (!category) return { status: 404 }

  const images = (() => {
    try {
      const files = readdirSync(`static/uploads/${parseName(category.name, treatment.name)}`)
      return files.length - 1
    } catch {
      return 'error'
    }
  })()

  return {
    body: {
      treatment,
      category,
      images
    }
  }
}
