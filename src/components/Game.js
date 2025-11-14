import React, { useState } from "react";
import { gameQuestions, trashBins } from "../data/gameData";
import TrashBin from "./TrashBin";
import GameStatus from "./GameStatus";
import ScoreBoard from "./ScoreBoard";
import Footer from "./Footer";

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isAnswering, setIsAnswering] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const question = gameQuestions[currentQuestion];

  const handleAnswer = (selectedColor) => {
    if (isAnswering) return;
    setIsAnswering(true);

    const isCorrect = selectedColor === question.correct;

    setFeedback({
      isCorrect,
      selectedColor,
      correctColor: question.correct,
    });

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      nextQuestion();
    }, 1500);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < gameQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setFeedback(null);
      setIsAnswering(false);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
    setFeedback(null);
    setIsAnswering(false);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl">
          <h1 className="text-6xl font-black text-center text-green-700 mb-8 pixelated drop-shadow-lg">
            GamEco
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 border-4 border-green-700 text-center">
            <p className="text-2xl font-bold text-gray-800 mb-6">
              Bem-vindo ao GamEco!
            </p>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Um jogo desenvolvido para ensinar sobre a forma correta de descarte, afim de promover a reciclagem e a preservação do meio ambiente.
            </p>

            <button
              onClick={startGame}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              S T A R T
            </button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  if (gameOver) {
    return (
      <GameStatus
        score={score}
        total={gameQuestions.length}
        onRestart={restartGame}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4 flex flex-col items-center justify-center">
      {/* Cabeçalho */}
      <div className="w-full max-w-2xl">
        <h1 className="text-6xl font-black text-center text-green-700 mb-2 pixelated drop-shadow-lg">
          GamEco
        </h1>
        <p className="text-center text-green-600 text-lg font-semibold mb-8">
          Diversão em reciclagem 🌍
        </p>

        {/* Placar */}
        <ScoreBoard
          current={currentQuestion + 1}
          score={score}
          total={gameQuestions.length}
        />

        {/* Área do Jogo */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-4 border-green-700">
          {/* Pergunta */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
              Questão {currentQuestion + 1} de {gameQuestions.length}
            </p>
            <h2 className="text-5xl font-black text-gray-800 mt-4 mb-4 drop-shadow">
              {question.question}
            </h2>
            <p className="text-gray-600 text-lg italic">
              {question.description}
            </p>
          </div>

          {/* Feedback */}
          {feedback && (
            <div
              className={`text-center mb-8 p-4 rounded-lg font-bold text-xl animate-bounce ${
                feedback.isCorrect
                  ? "bg-green-200 text-green-700 border-2 border-green-700"
                  : "bg-red-200 text-red-700 border-2 border-red-700"
              }`}
            >
              {feedback.isCorrect ? "✨ Acertou! ✨" : "❌ Errou!"}
            </div>
          )}

          {/* Lixeiras - Botões */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {trashBins.map((bin) => (
              <TrashBin
                key={bin.color}
                bin={bin}
                isSelected={feedback?.selectedColor === bin.color}
                isCorrect={feedback?.correctColor === bin.color}
                feedback={feedback}
                onClick={() => handleAnswer(bin.color)}
                disabled={isAnswering}
              />
            ))}
          </div>

          {/* Instruções */}
          <p className="text-center text-gray-600 text-sm">
            Clique na lixeira certa para descartar o objeto! 👇
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Game;
