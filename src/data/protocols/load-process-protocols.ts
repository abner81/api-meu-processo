export interface LoadProcessRepository {
  load(number_process: string, user_cpf: string): Promise<any>
}