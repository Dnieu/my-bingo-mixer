interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-coffee-card rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl border-2 border-accent/30 animate-[bounce_0.6s_ease-out]">
        <div className="text-6xl mb-4">☕</div>
        <h2 className="text-4xl font-bold text-accent mb-3 font-serif">FREE COFFEE!</h2>
        <p className="text-coffee-text mb-8 text-lg">You completed a line! Enjoy your brew.</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-accent text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-accent-light active:scale-95 transition-all duration-200 border-2 border-accent-light"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
