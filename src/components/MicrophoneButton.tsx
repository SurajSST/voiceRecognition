import React from 'react';
import { Mic, MicOff, Loader2 } from 'lucide-react';

interface MicrophoneButtonProps {
  isListening: boolean;
  onClick: () => void;
}

export const MicrophoneButton: React.FC<MicrophoneButtonProps> = ({ isListening, onClick }) => (
  <button
    onClick={onClick}
    className={`p-4 rounded-full transition-all duration-200 ${
      isListening
        ? 'bg-red-100 text-red-600 hover:bg-red-200'
        : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
    }`}
  >
    {isListening ? (
      <div className="relative">
        <MicOff className="w-6 h-6" />
        <div className="absolute -top-1 -right-1">
          <Loader2 className="w-4 h-4 animate-spin" />
        </div>
      </div>
    ) : (
      <Mic className="w-6 h-6" />
    )}
  </button>
);