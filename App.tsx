import React, { useState } from 'react';
import { Heart, Check } from 'lucide-react';
import { ViewState } from './types';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.Initial);

  const handleForgive = () => {
    setViewState(ViewState.Forgiven);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-rose-50 to-white selection:bg-rose-100">
      
      <main className="z-10 w-full max-w-2xl px-6 flex flex-col items-center justify-center text-center space-y-12">
        
        {viewState === ViewState.Initial && (
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-full mb-4">
                <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={32} />
              </div>
              <h1 className="font-serif text-5xl md:text-7xl text-rose-950 font-medium tracking-tight leading-tight">
                I'm really sorry.
              </h1>
              <p className="font-sans text-rose-900/60 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
                I never meant to hurt you, I sincerely apologize for the misunderstanding.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button 
                onClick={handleForgive}
                className="group relative px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-medium transition-all shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
              >
                <span>I Forgive You</span>
                <Check size={18} className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-4" />
              </button>
            </div>
          </div>
        )}

        {viewState === ViewState.Forgiven && (
          <div className="space-y-8 animate-fade-in">
             <div className="relative">
                <div className="absolute inset-0 bg-rose-400 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                <h1 className="relative font-serif text-5xl md:text-7xl text-rose-950 font-medium tracking-tight">
                  Thank You!
                </h1>
             </div>
             <p className="font-sans text-rose-800 text-xl">
               Let's start fresh.
             </p>
             <div className="flex justify-center pt-8">
               <div className="p-4 bg-white rounded-full shadow-sm border border-rose-100">
                 <Heart className="text-rose-500 fill-rose-500 w-16 h-16 animate-bounce" />
               </div>
             </div>
          </div>
        )}

      </main>

      <footer className="absolute bottom-6 text-rose-300 text-sm font-light">
        Made with sincerity
      </footer>
    </div>
  );
};

export default App;