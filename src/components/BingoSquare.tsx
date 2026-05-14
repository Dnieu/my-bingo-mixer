import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border-2 rounded-lg transition-all duration-200 select-none min-h-[70px] text-xs leading-tight shadow-sm font-medium';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-bingo/30 border-bingo text-coffee-text shadow-md'
      : 'bg-marked border-marked-border text-coffee-text'
    : 'bg-coffee-card border-accent/30 text-coffee-text hover:bg-accent/5 active:bg-accent/10';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm bg-accent/10 border-accent text-accent' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free coffee space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-marked-border text-sm">☕</span>
      )}
    </button>
  );
}
