import Cartao from "../Componentes/Cartao";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import { useState } from "react";
import Form from "../Componentes/Formulario";

function PaginaDoCartao() {
  //declare os estados aqui
  const [pagamento, setPagamento] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [validade, setValidade] = useState("");

  //declare as funções de controle de inputs aqui
  const mudarPagamento = (event) => {
    setPagamento(event.target.value);
  };
  const mudarNumeroCartao = (event) => {
    setNumeroCartao(event.target.value);
  };
  const mudarNome = (event) => {
    setNome(event.target.value);
  };
  const mudarCodigo = (event) => {
    setCodigo(event.target.value);
  };
  const mudarValidade = (event) => {
    setValidade(event.target.value);
  };
  const acionarBotao = (event)=>{
    event.preventDefault();
    alert("Seu cartão foi cadastrado com sucesso!")
    setPagamento("");
    setNumeroCartao("");
    setNome("");
    setCodigo("");
    setValidade("");
  }

  return (
    <LayoutDaPagina>
      {/* Passe as variáveis de estado para o Cartão. Use Props. */}
      <Cartao
        pagamento={pagamento}
        numero={numeroCartao}
        nome={nome}
        cvc={codigo}
        validade={validade}
      />
      <Form
        pagamento={pagamento}
        mudarPagamento={mudarPagamento}
        numeroCartao={numeroCartao}
        mudarNumeroCartao={mudarNumeroCartao}
        nome={nome}
        mudarNome={mudarNome}
        codigo={codigo}
        mudarCodigo={mudarCodigo}
        validade={validade}
        mudarValidade={mudarValidade}
        acionarBotao={acionarBotao}
      />

      {/* Chame o Componente Formulário Aqui */}
      {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}
    </LayoutDaPagina>
  );
}

export default PaginaDoCartao;
