import { LoadProcessData } from '../../domain/usecases/load-process-domain'
import { MissingParamError } from '../errors'
import { badRequest, ok } from '../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../protocols'
import { Validation } from '../protocols/validation'

export class LoadProcessController implements Controller {
  constructor(
    private readonly loadProcessData: LoadProcessData,
    private readonly validate: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validate.validate(httpRequest.params)
    if (error) {
      return badRequest(error)
    }
    const result = await this.loadProcessData.load(httpRequest.params)
    if (!result) {
      return badRequest(new Error('Processo não encontrado.'))
    }
    return ok(result)
  }
}