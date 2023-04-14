import ContatoClass from '../../models/Contato'
import { Card, Estrela } from './styles'
import * as enums from '../../utils/enums/Contato'
import star from '../../assets/star-full-icon.svg'
import starVz from '../../assets/star-empty-icon.svg'
import { alteraStatus } from '../../store/reducers/contatos'
import { useDispatch } from 'react-redux'
import { ChangeEvent } from 'react'

type Props = ContatoClass

const Contato = ({ nome, status, email, tel, id }: Props) => {
  const dispatch = useDispatch()

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        especial: evento.target.checked
      })
    )
  }

  return (
    <Card>
      <h2>{nome}</h2>
      <input
        type="checkbox"
        id={nome}
        checked={status === enums.Status.ESPECIAL}
        onChange={alteraStatusContato}
      />
      <p>{email}</p>
      <p>{tel}</p>
      {status === enums.Status.ESPECIAL ? (
        <Estrela src={star} />
      ) : (
        <Estrela src={starVz} />
      )}
    </Card>
  )
}

export default Contato
