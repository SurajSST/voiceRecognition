import React from 'react';
import { RecordingIndicator } from './RecordingIndicator';

interface TranscriptTextareaProps {
  text: string;
  isListening: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TranscriptTextarea: React.FC<TranscriptTextareaProps> = ({
  text,
  isListening,
  onChange,
}) => (
  <div className="relative">
    <textarea
      value={text}
      onChange={onChange}
      className="w-full h-64 p-4 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all duration-200 resize-none"
      placeholder="Start speaking or type here..."
    />
    {isListening && <RecordingIndicator />}
  </div>
);