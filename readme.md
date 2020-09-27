# Carregar Processo

> ## Caso de sucesso:
1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/processo/:numero_processo/:cpf_usuario**
1. ✅ Valida dados obrigatórios **numero_processo** e **cpf_usuario**
1. ✅ Carrega os dados do processo
1. ✅ Retorna 200

> ## Exceções:
1. ✅ Retorna erro 404 se a API não existir
1. ✅ Retorna erro 404 se **numero_processo** ou **cpf_usuario** não forem fornecidos pelo client
1. ✅ Retorna erro 500 se der erro ao tentar carregar o processo