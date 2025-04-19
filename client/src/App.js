import React from 'react';
import MoodTracker from './components/MoodTracker';
import Chatbot from './components/Chatbot';
import Recommendations from './components/Recommendations';
import Rewards from './components/Rewards';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="max-w-4xl mx-auto mb-6">
        <h1 className="text-4xl font-bold text-center text-indigo-700">MindCare</h1>
        <p className="text-center text-gray-600 mt-2">Your mental health companion</p>
      </header>
      <main className="max-w-4xl mx-auto space-y-8">
        <MoodTracker />
        <Chatbot />
        <Recommendations />
        <Rewards />
      </main>
    </div>
  );
}
