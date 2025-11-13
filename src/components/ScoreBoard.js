import React from "react";

const ScoreBoard = ({ current, score, total }) => {
  return (
    <div className="flex justify-between items-center mb-8 px-4 py-4 bg-green-700 rounded-lg border-4 border-green-900 shadow-lg">
      {/* Questão Atual */}
      <div className="flex-1">
        <p className="text-white text-xs uppercase font-bold tracking-wide">
          Questão
        </p>
        <p className="text-white text-2xl font-black">
          {current}/{total}
        </p>
      </div>

      {/* Separador */}
      <div className="w-1 h-12 bg-green-900 mx-4"></div>

      {/* Pontuação */}
      <div className="flex-1">
        <p className="text-white text-xs uppercase font-bold tracking-wide">
          Pontos
        </p>
        <p className="text-white text-2xl font-black">
          {score}/{total}
        </p>
      </div>

      {/* Separador */}
      <div className="w-1 h-12 bg-green-900 mx-4"></div>

      {/* Porcentagem */}
      <div className="flex-1 text-right">
        <p className="text-white text-xs uppercase font-bold tracking-wide">
          Acertos
        </p>
        <p className="text-white text-2xl font-black">
          {total > 0 ? Math.round((score / total) * 100) : 0}%
        </p>
      </div>
    </div>
  );
};

export default ScoreBoard;
