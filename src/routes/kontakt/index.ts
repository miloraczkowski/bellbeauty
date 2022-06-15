import type { RequestHandler } from '@sveltejs/kit'
import data from '../../../static/contact.json'

export const get: RequestHandler = async () => {
  return {
    Headers: {
      accept: 'application/json'
    },
    body: {
      data: data
    }
  }
}
