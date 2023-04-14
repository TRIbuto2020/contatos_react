import BtnNovo from '../../components/BtnNovo'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => {
  return (
    <>
      <h1>Contatos</h1>
      <ListaDeContatos />
      <BtnNovo />
    </>
  )
}

export default Home
