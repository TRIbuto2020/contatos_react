import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  max-width: 700px;
  width: 85%;
  margin: 64px auto;
  border: 2px solid ${variaveis.azul};
  background-color: ${variaveis.cinza};
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px -53px 16px -57px ${variaveis.cinzaEscuro},
    0px 53px 57px -57px ${variaveis.cinzaEscuro};

  h2 {
    line-height: 1.75rem;
    margin-bottom: 16px;
  }
`
export const Estrela = styled.img`
  width: 32px;
  position: absolute;
  z-index: 0;
`
export const Fav = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  margin: auto;
  margin-bottom: 16px;

  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    width: 32px;
    height: 32px;
    cursor: pointer;
    z-index: 3;
  }
`

export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const Dado = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 60%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${variaveis.cinzaEscuro};

    &:focus {
      outline: none;
    }
  }
`
export const Btn1 = styled.button`
  width: 80%;
  font-size: 16px;
  margin: 0 10%;
  background-color: transparent;
  border: 2px solid ${variaveis.azul};
  border-radius: 8px;
  font-weight: 700;
  transition: all ease-in-out 0.5s;
  cursor: pointer;

  &:hover {
    transition: all ease-in-out 0.5s;
    background-color: ${variaveis.azul};
    color: ${variaveis.cinza};
  }
`

export const Btn2 = styled(Link)`
  width: 80%;
  margin: 10%;
  background-color: transparent;
  border: 2px solid ${variaveis.cinzaEscuro};
  border-radius: 8px;
  font-weight: 700;
  transition: all ease-in-out 0.5s;
  text-align: center;
  margin-top: 8px;
  text-decoration: none;
  font-size: 16px;
  display: block;

  &:hover {
    transition: all ease-in-out 0.5s;
    border-color: ${variaveis.vermelho};
    color: ${variaveis.cinza};
    background-color: ${variaveis.vermelho};
  }
`
