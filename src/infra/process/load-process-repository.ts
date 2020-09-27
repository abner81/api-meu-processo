/* eslint-disable @typescript-eslint/no-floating-promises */
import { LoadProcessRepository } from '../../data/protocols/load-process-protocols'
import { MongoHelper } from '../db/mongodb/helpers/mongo-helper'

export class DbLoadProcessRepository implements LoadProcessRepository {
  async load(number_process: string, user_cpf: string): Promise<any> {
    const collection = await MongoHelper.getCollection('dataset')
    const result = collection.find(({ numero_processo: number_process }))
    if (!result) {
      return null
    }
    const response = await result.toArray()
    return response
  }
}