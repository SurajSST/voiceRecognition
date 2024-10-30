import React from 'react';
import { MicrophoneButton } from './components/MicrophoneButton';
import { TranscriptTextarea } from './components/TranscriptTextarea';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';

function App() {
  const { isListening, text, isSupported, toggleListening, setText } = useSpeechRecognition();

  if (!isSupported) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Speech Recognition Not Supported</h1>
            <p className="text-gray-600">
              Your browser doesn't support speech recognition. Please try using a modern browser like Chrome.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Voice Recognition
            </h1>
            <MicrophoneButton isListening={isListening} onClick={toggleListening} />
          </div>

          <TranscriptTextarea
            text={text}
            isListening={isListening}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="mt-4 text-sm text-gray-500">
            {isListening ? (
              <p className="text-purple-600">Listening... Speak clearly into your microphone</p>
            ) : (
              <p>Click the microphone icon to start listening</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;