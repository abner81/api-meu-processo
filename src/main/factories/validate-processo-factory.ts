import { RequiredFields, ValidationComposite } from '../../presentation/helpers/validators'
import { Validation } from '../../presentation/protocols/validation'

export const makeProcessoValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['numero_processo', 'cpf_usuario']) {
    validations.push(new RequiredFields(field))
  }
  return new ValidationComposite(validations)
}
