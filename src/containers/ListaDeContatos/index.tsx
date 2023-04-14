import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/Contato'
import { useState } from 'react'
import * as enums from '../../utils/enums/Contato'
import { Titulo } from '../../styles'
import { Cabecalho, Pagina, SearchBar } from './styles'

const ListaDeContatos = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos.itens)
  const [termo, setTermo] = useState('')
  const [fav, setFav] = useState(false)

  const filtraContatos = () => {
    let contatosFiltrados = contatos

    if (termo != '') {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nome.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
    }
    if (fav) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.status === enums.Status.ESPECIAL
      )
    }
    return contatosFiltrados
  }

  const listaContatos = filtraContatos()

  return (
    <Pagina>
      <Cabecalho>
        <Titulo>Contatos</Titulo>
        <SearchBar>
          <input
            type="text"
            value={termo}
            placeholder="Buscar"
            onChange={(e) => setTermo(String(e.target.value))}
          />
          <div>
            <button onClick={() => setFav(true)} disabled={fav}>
              Favoritos
            </button>
            <button onClick={() => setFav(false)} disabled={!fav}>
              Todos
            </button>
          </div>
        </SearchBar>
      </Cabecalho>
      <ul>
        {listaContatos.map((c) => (
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
    </Pagina>
  )
}

export default ListaDeContatos
