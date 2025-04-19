import React, { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I am here to support you. How are you feeling today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate AI response (replace with real API call)
    setTimeout(() => {
      const botResponse = {
        from: 'bot',
        text: 'Thank you for sharing. Remember, you are not alone. Would you like some coping strategies?',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">AI Chatbot</h2>
      <div className="border border-gray-300 rounded p-4 h-64 overflow-y-auto mb-4" aria-live="polite">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 max-w-xs p-2 rounded ${
              msg.from === 'bot' ? 'bg-indigo-100 self-start' : 'bg-indigo-600 text-white self-end'
            }`}
            style={{ alignSelf: msg.from === 'bot' ? 'flex-start' : 'flex-end' }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-2"
        rows={2}
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="Chat input"
      />
      <button
        onClick={sendMessage}
        className="bg-indigo-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={!input.trim()}
      >
        Send
      </button>
    </section>
  );
}
