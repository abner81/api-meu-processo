import { LoadProcessData, LoadProcessModel } from '../../domain/usecases/load-process-domain'
import { LoadProcessRepository } from '../protocols/load-process-protocols'

export class DbLoadProcessData implements LoadProcessData {
  constructor(private readonly dbLoadProcessRepository: LoadProcessRepository) { }
  async load(loadProcessModel: LoadProcessModel): Promise<any> {
    const response = await this.dbLoadProcessRepository.load(loadProcessModel.numero_processo, loadProcessModel.cpf_usuario)
    return response
  }
}