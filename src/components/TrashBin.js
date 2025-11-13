import React from "react";

const TrashBin = ({
  bin,
  isSelected,
  isCorrect,
  feedback,
  onClick,
  disabled,
}) => {
  const isAnswering = feedback !== null;

  let borderStyle =
    "border-4 border-gray-300 transform transition-all duration-200";
  let buttonStyle = `${bin.bgColor} ${
    !disabled && !isAnswering ? bin.hoverColor : ""
  } text-white font-black rounded-lg p-6 cursor-pointer shadow-lg transition-all duration-200 hover:scale-110`;

  if (feedback) {
    if (isCorrect) {
      borderStyle =
        "border-4 border-green-500 animate-pulse scale-105 transform";
      buttonStyle += " ring-4 ring-green-400 shadow-green-400/50";
    } else if (isSelected && !isCorrect) {
      borderStyle = "border-4 border-red-500 scale-95 transform";
      buttonStyle += " opacity-70";
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || isAnswering}
      className={`${borderStyle} ${buttonStyle} flex flex-col items-center justify-center h-28 md:h-32`}
      title={bin.name}
    >
      <div className="text-4xl mb-2">🗑️</div>
      <span className="text-xs font-bold uppercase text-center leading-tight">
        {bin.name}
      </span>
    </button>
  );
};

export default TrashBin;
