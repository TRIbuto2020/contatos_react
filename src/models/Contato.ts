import * as enums from '../utils/enums/Contato'

class Tarefa {
  nome: string
  status: enums.Status
  email: string
  tel: number
  id: number

  constructor(
    nome: string,
    status: enums.Status,
    email: string,
    tel: number,
    id: number
  ) {
    this.nome = nome
    this.status = status
    this.email = email
    this.tel = tel
    this.id = id
  }
}

export default Tarefa
