import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Cabecalho = styled.header`
  background-color: ${variaveis.cinza};
  border: 3px solid ${variaveis.azul};
  border-top: none;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: inset 16px -53px 16px -57px ${variaveis.cinzaEscuro},
    0px 53px 57px -57px ${variaveis.cinzaEscuro};
  padding-bottom: 16px;
`
