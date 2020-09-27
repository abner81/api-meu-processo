export interface LoadProcessModel {
  numero_processo: string
  cpf_usuario: string
}

export interface LoadProcessData {
  load(loadProcessModel: LoadProcessModel): Promise<any>
}