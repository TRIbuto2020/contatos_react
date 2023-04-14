import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style: none;
    color: ${variaveis.cinzaEscuro};
  }

  body{
    background: repeating-linear-gradient(${variaveis.cinzaClaro}, ${variaveis.cinzaClaro} 4px, ${variaveis.branco} 4px, ${variaveis.branco} 5px);
  }
`
export const Titulo = styled.h1`
  text-align: center;
  padding: 16px 0;
  line-height: 1rem;
  font-size: 40px;
  @media (max-width: 460px) {
    font-size: 28px;
  }
`

export default EstiloGlobal
