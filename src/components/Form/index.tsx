import { FormEvent, useState } from 'react'
import { cadastrar } from '../../store/reducers/contatos'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as enums from '../../utils/enums/Contato'
import { Btn1, Btn2, Card, Dado, Dados, Estrela, Fav } from './styles'
import star from '../../assets/star-full-icon.svg'
import starVz from '../../assets/star-empty-icon.svg'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState(999999999)
  const [status, setStatus] = useState(enums.Status.NORMAL)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        status,
        tel
      })
    )
    navigate('/')
  }

  return (
    <Card>
      <h2>Dados de contato:</h2>
      <form onSubmit={cadastrarContato}>
        <Dados>
          <Dado>
            <label htmlFor="nome">Nome:</label>
            <input
              required
              name="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome Completo"
            />
          </Dado>
          <Dado>
            <label htmlFor="email">Email:</label>
            <input
              required
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </Dado>
          <Dado>
            <label htmlFor="tel">Telefone:</label>
            <input
              maxLength={11}
              minLength={9}
              required
              name="tel"
              type="tel"
              value={tel}
              onChange={(e) => setTel(Number(e.target.value))}
            />
          </Dado>
          <Fav>
            <input
              name="fav"
              type="checkbox"
              checked={status === enums.Status.ESPECIAL}
              onChange={() => {
                if (status == enums.Status.NORMAL) {
                  setStatus(enums.Status.ESPECIAL)
                } else {
                  setStatus(enums.Status.NORMAL)
                }
              }}
            />
            {status === enums.Status.ESPECIAL ? (
              <Estrela src={star} />
            ) : (
              <Estrela src={starVz} />
            )}
          </Fav>
        </Dados>
        <Btn1 type="submit">Cadastrar</Btn1>
        <Btn2 to="/">Cancelar</Btn2>
      </form>
    </Card>
  )
}

export default Form
