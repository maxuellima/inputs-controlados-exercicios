//declare todo o componente formulário e seus inputs. Exporte o formulário.
import React from "react";
import { LayoutForm, LayoutLabel,Botao } from "./estiloDoFormulario";

const Form = ({
  pagamento,
  mudarPagamento,
  numeroCartao,
  mudarNumeroCartao,
  nome,
  mudarNome,
  codigo,
  mudarCodigo,
  validade,
  mudarValidade,
  acionarBotao,
}) => {
  return (
    <LayoutForm>
      <LayoutLabel>
        Seleciona forma de pagamento: 
        <select value={pagamento} onChange={mudarPagamento}>
          <option>Crédito</option>
          <option>Débito</option>
        </select>
      </LayoutLabel>
      <LayoutLabel>
        Nome: <br />
        <input
          value={nome}
          onChange={mudarNome}
          type="name"
          placeholder="Insira seu nome"
        />
      </LayoutLabel>
      <LayoutLabel>
        Numero do Cartão: <br />
        <input
          value={numeroCartao}
          onChange={mudarNumeroCartao}
          type="number"
          placeholder="Insira o numero do seu cartão"
        />
      </LayoutLabel>
      <LayoutLabel>
        Código de verificação: <br />
        <input
          value={codigo}
          onChange={mudarCodigo}
          type="text"
          placeholder="Insira o código de verificação"
        />
      </LayoutLabel>
      <LayoutLabel>
        Validade:
        <br />
        <input
          value={validade}
          onChange={mudarValidade}
          type="month"
          placeholder="Insira a validade do cartão(Mês e ano)"
        />
      </LayoutLabel>
      <Botao onClick={acionarBotao}>Cadastrar cartão</Botao>
    </LayoutForm>
  );
};
export default Form;
