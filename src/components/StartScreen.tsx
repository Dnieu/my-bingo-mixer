interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-coffee-bg">
      <div className="text-center max-w-sm">
        <h1 className="text-5xl font-bold text-coffee-text mb-3 font-serif">☕ Cozy Coffee Bingo</h1>
        <p className="text-xl text-coffee-text mb-8 italic">Find your coffee crew!</p>
        
        <div className="bg-coffee-card rounded-xl p-6 shadow-lg border-2 border-accent/20 mb-8">
          <h2 className="font-bold text-coffee-text mb-4 text-lg">How to Play</h2>
          <ul className="text-left text-coffee-text text-sm space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span>Find people who match the coffee questions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span>Get 5 in a row to win a free coffee!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:bg-accent-light active:scale-95 transition-all duration-200 border-2 border-accent-light"
        >
          Start Your Brew
        </button>
      </div>
    </div>
  );
}
