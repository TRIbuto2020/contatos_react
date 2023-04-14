import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/Contato'

const ListaDeContatos = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos.itens)
  return (
    <ul>
      {contatos.map((c) => (
        <li key={c.id}>
          <Contato
            nome={c.nome}
            status={c.status}
            email={c.email}
            tel={c.tel}
            id={c.id}
          />
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContatos
