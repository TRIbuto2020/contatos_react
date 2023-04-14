import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Cabecalho = styled.header`
  background-color: ${variaveis.cinza};
  border: 3px solid ${variaveis.azul};
  border-top: none;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  position: sticky;
  top: 0;
  z-index: 3;
  box-shadow: inset 16px -53px 16px -57px ${variaveis.cinzaEscuro},
    0px 53px 57px -57px ${variaveis.cinzaEscuro};
`
export const SearchBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 7.5%;

  input {
    text-align: center;
    border-radius: 8px;
    border: 2px solid ${variaveis.cinzaEscuro};
    box-shadow: inset 16px -53px 16px -57px ${variaveis.cinzaEscuro},
      0px 53px 57px -57px ${variaveis.cinzaEscuro};
    background-color: ${variaveis.cinza};
    width: 20%;
    transition: all ease-in-out 0.5s;

    &:focus {
      transition: all ease-in-out 0.7s;
      outline: none;
      background-color: ${variaveis.cinzaClaro};
      border-color: ${variaveis.azul};
      width: 40%;
    }
  }

  div {
    display: flex;
    gap: 8px;

    button {
      padding: 0 8px;
      background-color: transparent;
      border-radius: 8px;
      border: 2px solid ${variaveis.cinzaEscuro};
      transition: all ease-in-out 0.5s;
      font-weight: 700;
      cursor: pointer;

      &:disabled {
        transition: all ease-in-out 0.5s;
        border: 2px solid ${variaveis.azul};
        background-color: ${variaveis.azul};
        color: ${variaveis.cinza};
      }
    }
  }

  @media (max-width: 460px) {
    flex-direction: column;

    input {
      width: 50%;
      margin-bottom: 8px;

      &:focus {
        width: 75%;
      }
    }
  }
`
export const Pagina = styled.div`
  padding-bottom: 25vh;
`
