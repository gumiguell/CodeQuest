import React, { Component } from "react";

interface GetRespostasProps {
  indicePergunta: number;
  indiceResposta: number;
}

interface GetRespostasState {
  vetor: number[];
  indicePergunta: number;
  indiceResposta: number;
}

class MinhaClasse extends Component<GetRespostasProps, GetRespostasState> {
  constructor(props: GetRespostasProps) {
    super(props);

    // Inicializa o estado da classe
    this.state = {
      vetor: [],
      indicePergunta: props.indicePergunta,
      indiceResposta: props.indiceResposta,
    };
  }

  incluirNoVetor = (indiceAlternativa: number): void => {
    const { vetor, indicePergunta } = this.state;

    // Garante que o índice seja um número inteiro positivo
    const indice = Math.max(0, Math.floor(indicePergunta));

    // Atualiza o vetor com o valor na posição indicada pelo índicePergunta
    const novoVetor = [...vetor];
    novoVetor[indice] = indiceAlternativa;

    this.setState({
      vetor: novoVetor,
    });
  };

  // Função para retornar o vetor
  retornarVetor = (): number[] => {
    return this.state.vetor;
  };
}

export default MinhaClasse;