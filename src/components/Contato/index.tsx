import ContatoClass from '../../models/Contato'
import {
  Btn1,
  Btn2,
  Btn3,
  Btns,
  Card,
  Deletar,
  Estrela,
  Info,
  Input
} from './styles'
import * as enums from '../../utils/enums/Contato'
import star from '../../assets/star-full-icon.svg'
import starVz from '../../assets/star-empty-icon.svg'
import { alteraStatus, editar, remover } from '../../store/reducers/contatos'
import { useDispatch } from 'react-redux'
import { ChangeEvent, useState } from 'react'

type Props = ContatoClass

const Contato = ({ nome, status, email, tel, id }: Props) => {
  const dispatch = useDispatch()

  const [edt, setEdt] = useState(false)
  const [emailTmp, setEmailTmp] = useState(email)
  const [telTmp, setTelTmp] = useState(tel)
  const [deletar, setDeletar] = useState(false)
  const [full, setFull] = useState(false)

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        especial: evento.target.checked
      })
    )
  }

  function removeContato() {
    dispatch(remover(id))
  }

  function salvaEdicao() {
    dispatch(
      editar({
        nome,
        email: emailTmp,
        status,
        tel: telTmp,
        id
      })
    )
    setEdt(false)
  }

  return (
    <Card>
      <Info>
        <h2>
          {nome}
          {!full && <button onClick={() => setFull(true)}>+</button>}
          {full && <button onClick={() => setFull(false)}>―</button>}
        </h2>
        {full && (
          <>
            <input
              type="checkbox"
              id={nome}
              checked={status === enums.Status.ESPECIAL}
              onChange={alteraStatusContato}
            />
            <Input>
              <label htmlFor="email">Email:</label>
              <input
                name="email"
                required
                type="email"
                value={emailTmp}
                disabled={!edt}
                onChange={(e) => setEmailTmp(e.target.value)}
              />
            </Input>
            <Input>
              <label htmlFor="tel">Telefone:</label>
              <input
                required
                name="tel"
                type="tel"
                value={telTmp}
                disabled={!edt}
                onChange={(e) => setTelTmp(Number(e.target.value))}
              />
            </Input>
          </>
        )}
      </Info>
      {full && (
        <>
          <Btns>
            {edt ? (
              <>
                <Btn1 onClick={salvaEdicao}>Salvar</Btn1>
                <Btn3
                  onClick={() => {
                    setEdt(false)
                    setEmailTmp(email)
                    setTelTmp(tel)
                  }}
                >
                  Cancelar
                </Btn3>
              </>
            ) : (
              <>
                <Btn1 onClick={() => setEdt(true)}>Editar</Btn1>
                <Btn2 onClick={() => setDeletar(true)}>Remover</Btn2>
              </>
            )}
          </Btns>
          {deletar && (
            <Deletar>
              <h1>Deletar contato?</h1>
              <div>
                <Btn1 onClick={() => setDeletar(false)}>Cancelar</Btn1>
                <Btn2 onClick={removeContato}>Deletar</Btn2>
              </div>
            </Deletar>
          )}
          {status === enums.Status.ESPECIAL ? (
            <Estrela src={star} />
          ) : (
            <Estrela src={starVz} />
          )}
        </>
      )}
    </Card>
  )
}

export default Contato
