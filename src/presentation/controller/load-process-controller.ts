import { LoadProcessData } from '../../domain/usecases/load-process-domain'
import { updateDataResponse } from '../helpers/alter-response/update-response-helper'
import { badRequest, ok, serverError } from '../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../protocols'
import { Validation } from '../protocols/validation'

export class LoadProcessController implements Controller {
  constructor(
    private readonly loadProcessData: LoadProcessData,
    private readonly validate: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validate.validate(httpRequest.params)
      if (error) {
        return badRequest(error)
      }
      const result = await this.loadProcessData.load(httpRequest.params)
      if (!result) {
        return badRequest(new Error('Processo não encontrado.'))
      }
      const res = result.map((processo: any) => {
        const { data_movimentacao_processual, data_distribuicao, data_autuacao, ...rest } = processo
        const dataMovimentacao = updateDataResponse(data_movimentacao_processual)
        const dataDistribuicao = updateDataResponse(data_distribuicao)
        const dataAutuacao = updateDataResponse(data_autuacao)
        return Object.assign({}, rest, { data_movimentacao_processual: dataMovimentacao, data_distribuicao: dataDistribuicao, data_autuacao: dataAutuacao })
      })
      res.sort((a: any, b: any) => {
        var dateA = new Date(a.data_movimentacao_processual)
        var dateB = new Date(b.data_movimentacao_processual)
        return dateA > dateB ? 1 : -1
      })
      return ok(res)
    } catch (error) {
      return serverError(error)
    }
  }
}