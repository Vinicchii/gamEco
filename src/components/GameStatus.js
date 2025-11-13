import React from "react";

const GameStatus = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  let message = "";
  let emoji = "";

  if (percentage === 100) {
    message = "Perfeito! Você é um Eco-Guerreiro! 🌟";
    emoji = "🏆";
  } else if (percentage >= 80) {
    message = "Excelente! Você sabe muito sobre reciclagem! 🌱";
    emoji = "⭐";
  } else if (percentage >= 60) {
    message = "Bom! Continue aprendendo sobre reciclagem! 🌍";
    emoji = "🎮";
  } else if (percentage >= 40) {
    message = "Pode melhorar! Tente novamente! 💪";
    emoji = "🌿";
  } else {
    message = "Que tal tentar novamente? Você consegue! 🌳";
    emoji = "🔄";
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full border-4 border-green-700 text-center">
        {/* Título */}
        <h1 className="text-5xl font-black text-green-700 mb-4">
          Fim do Jogo!
        </h1>

        {/* Emoji Resultado */}
        <div className="text-8xl mb-6 animate-bounce">{emoji}</div>

        {/* Mensagem */}
        <p className="text-2xl font-bold text-gray-800 mb-8">{message}</p>

        {/* Score */}
        <div className="bg-green-100 rounded-lg p-6 mb-8 border-2 border-green-600">
          <p className="text-gray-600 text-lg font-semibold mb-2">
            Sua Pontuação:
          </p>
          <div className="text-5xl font-black text-green-700">
            {score}/{total}
          </div>
          <p className="text-2xl font-bold text-green-600 mt-2">
            {percentage}%
          </p>
        </div>

        {/* Barra de progresso */}
        <div className="w-full bg-gray-200 rounded-full h-8 mb-8 border-2 border-green-700 overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 h-full transition-all duration-1000 flex items-center justify-center"
            style={{ width: `${percentage}%` }}
          >
            {percentage > 10 && (
              <span className="text-white font-bold">{percentage}%</span>
            )}
          </div>
        </div>

        {/* Botão Reiniciar */}
        <button
          onClick={onRestart}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 px-6 rounded-lg text-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 border-3 border-green-800"
        >
          🎮 Jogar Novamente
        </button>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-6 font-semibold">
          Obrigado por jogar GamEco! 🌍♻️
        </p>
      </div>
    </div>
  );
};

export default GameStatus;
