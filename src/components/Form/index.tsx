import { FormEvent, useState } from 'react'
import { cadastrar } from '../../store/reducers/contatos'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as enums from '../../utils/enums/Contato'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState(0)
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
    <>
      <form onSubmit={cadastrarContato}>
        <input
          required
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="tel"
          value={tel}
          onChange={(e) => setTel(Number(e.target.value))}
        />
        <input
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
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">Cancelar</Link>
    </>
  )
}

export default Form
function dispatch(arg0: any) {
  throw new Error('Function not implemented.')
}
