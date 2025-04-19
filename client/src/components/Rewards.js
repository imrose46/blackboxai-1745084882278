import React, { useState, useEffect } from 'react';

export default function Rewards() {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const storedPoints = localStorage.getItem('rewardPoints');
    if (storedPoints) {
      setPoints(parseInt(storedPoints, 10));
    }
  }, []);

  const addPoints = (amount) => {
    const newPoints = points + amount;
    setPoints(newPoints);
    localStorage.setItem('rewardPoints', newPoints.toString());
  };

  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Reward System</h2>
      <p className="mb-4">You have earned <span className="font-bold">{points}</span> points!</p>
      <button
        onClick={() => addPoints(10)}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Earn 10 Points
      </button>
      <p className="mt-2 text-gray-600 text-sm">
        Earn points by logging your mood, chatting with the bot, and completing activities.
      </p>
    </section>
  );
}
