import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.li`
  border: 2px solid ${variaveis.azul};
  margin: 0 auto;
  margin-top: 16px;
  width: 85%;
  position: relative;
  padding: 16px;
  border-radius: 16px;
  background-color: ${variaveis.cinza};
  display: flex;
  flex-direction: column;
  box-shadow: inset 0px -53px 16px -57px ${variaveis.cinzaEscuro},
    0px 53px 57px -57px ${variaveis.cinzaEscuro};

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      border: none;
      background-color: transparent;
      font-weight: 700;
      font-size: 24px;
      margin-left: 16px;
      cursor: pointer;
    }
  }

  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    width: 32px;
    height: 32px;
    border: 0.15em solid transparent;
    border-radius: 0.15em;
    cursor: pointer;
    position: absolute;
    top: calc(50% - 16px);
    right: 16px;
    z-index: 1;
  }
`
export const Estrela = styled.img`
  width: 32px;
  position: absolute;
  top: calc(50% - 16px);
  right: 16px;
`

export const Info = styled.div`
  display: block;
  width: 100%;
`

export const Btns = styled.div`
  display: inline;
  position: absolute;
  bottom: 16px;
  right: 16px;

  @media (max-width: 760px) {
    position: relative;
    bottom: 0;
    right: 0;
  }
`
export const Btn1 = styled.button`
  border: 2px solid ${variaveis.azul};
  background-color: ${variaveis.cinza};
  padding: 0 6px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  margin-right: 8px;
  transition: all linear 0.2s;

  &:hover {
    transition: all linear 0.2s;
    border-color: ${variaveis.azul};
    color: ${variaveis.cinzaClaro};
    background-color: ${variaveis.azul};
  }
`

export const Btn2 = styled.button`
  border: 2px solid ${variaveis.cinzaEscuro};
  background-color: ${variaveis.cinza};
  padding: 0 6px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: all linear 0.2s;

  &:hover {
    transition: all linear 0.2s;
    border-color: ${variaveis.vermelho};
    color: ${variaveis.cinza};
    background-color: ${variaveis.vermelho};
  }
`

export const Btn3 = styled.button`
  border: 2px solid ${variaveis.cinzaEscuro};
  background-color: ${variaveis.cinza};
  padding: 0 6px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: all linear 0.2s;

  &:hover {
    transition: all linear 0.2s;
    border-color: ${variaveis.cinzaEscuro};
    color: ${variaveis.cinza};
    background-color: ${variaveis.cinzaEscuro};
  }
`

export const Input = styled.div`
  input {
    font-weight: 100;
    margin-left: 8px;
    font-size: 16px;
    width: calc(100% - 16px);
    max-width: 320px;
    border: none;
    border-bottom: 2px solid ${variaveis.cinzaEscuro};
    background-color: transparent;
    margin-bottom: 8px;

    @media (max-width: 760px) {
      font-size: 14px;
    }

    &:disabled {
      font-weight: 400;
      border-bottom: 2px solid transparent;
    }

    &:focus {
      outline: none;
    }
  }
`

export const Deletar = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(4px);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  h1 {
    text-align: center;
    line-height: 1.75rem;
  }

  div {
    margin: 16px auto 0;
    display: flex;
    justify-content: center;
  }
`
