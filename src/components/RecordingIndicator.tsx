import React from 'react';

export const RecordingIndicator = () => (
  <div className="absolute bottom-4 right-4">
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-75" />
      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-150" />
    </div>
  </div>
);