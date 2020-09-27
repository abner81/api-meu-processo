/* eslint-disable @typescript-eslint/quotes */
import { DbLoadProcessData } from "../../data/usecases/db-load-process"
import { DbLoadProcessRepository } from "../../infra/process/load-process-repository"
import { LoadProcessController } from "../../presentation/controller/load-process-controller"
import { Controller } from '../../presentation/protocols'
import { makeProcessoValidation } from './validate-processo-factory'

export const makeProcessoController = (): Controller => {
  const processoRepository = new DbLoadProcessRepository()
  const processData = new DbLoadProcessData(processoRepository)
  return new LoadProcessController(processData, makeProcessoValidation())
}
