import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Novo = styled(Link)`
  font-size: 18px;
  position: fixed;
  bottom: 16px;
  background-color: ${variaveis.cinza};
  border: 2px solid ${variaveis.azul};
  padding: 8px 16px;
  text-decoration: none;
  font-weight: 700;
  border-radius: 16px;
  left: 7.4%;
  width: 85%;
  text-align: center;
  box-shadow: inset 0px -53px 16px -57px ${variaveis.cinzaEscuro},
    0px 20px 57px -10px ${variaveis.cinzaEscuro};
  transition: all ease-in-out 0.7s;

  &:hover {
    background-color: ${variaveis.azul};
    border-color: ${variaveis.cinza};
    color: ${variaveis.cinza};
    transition: all ease-in-out 0.7s;
  }
`
