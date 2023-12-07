// handleInputChange.tsx
import React from 'react';

interface HandleInputChangeProps {
  pergunta: number;
  valor: string | number;
  respostas: Record<string, string | number>;
  setRespostas: React.Dispatch<React.SetStateAction<Record<string, string | number>>>;
}

const handleInputChange = ({ pergunta, valor, respostas, setRespostas }: HandleInputChangeProps): void => {
  // Atualize o estado com o número da pergunta e o valor selecionado
  setRespostas({
    ...respostas,
    [pergunta]: valor,
    
  });
};

export default handleInputChange;
