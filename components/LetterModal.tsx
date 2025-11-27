import React from 'react';
import { GeneratedContent } from '../types';
import { X } from 'lucide-react';

interface LetterModalProps {
  content: GeneratedContent | null;
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
}

export const LetterModal: React.FC<LetterModalProps> = ({ content, isOpen, onClose, loading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 relative animate-fade-in border border-rose-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-rose-300 hover:text-rose-500 transition-colors"
        >
          <X size={24} />
        </button>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-4">
            <div className="w-8 h-8 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
            <p className="text-rose-400 font-medium text-sm animate-pulse">Finding the right words...</p>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <h3 className="font-serif text-2xl text-rose-800 italic">{content?.title}</h3>
            <p className="font-sans text-slate-600 leading-relaxed text-lg">
              {content?.body}
            </p>
            <div className="pt-4 flex justify-center">
              <span className="text-4xl text-rose-300 opacity-50">❝</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};