import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-coffee-bg">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-coffee-card border-b-2 border-accent/30 shadow-sm">
        <button
          onClick={onReset}
          className="text-coffee-text text-sm px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 active:bg-accent/30 transition-colors font-medium"
        >
          ← Back to Menu
        </button>
        <h1 className="font-bold text-coffee-text text-xl font-serif">☕ Cozy Coffee Bingo</h1>
        <div className="w-20"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-coffee-text text-sm py-3 px-4 italic">
        Tap a square when you find someone who matches the coffee question.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-bingo/20 text-bingo text-center py-3 font-bold text-sm border-y border-bingo/30">
          🎉 FREE COFFEE! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
