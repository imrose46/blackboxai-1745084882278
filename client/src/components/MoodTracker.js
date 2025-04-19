import React, { useState, useEffect } from 'react';

const moods = [
  { label: 'Happy', value: 'happy', icon: 'fa-smile' },
  { label: 'Sad', value: 'sad', icon: 'fa-frown' },
  { label: 'Angry', value: 'angry', icon: 'fa-angry' },
  { label: 'Anxious', value: 'anxious', icon: 'fa-meh' },
  { label: 'Neutral', value: 'neutral', icon: 'fa-meh-blank' },
];

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [trigger, setTrigger] = useState('');
  const [moodLogs, setMoodLogs] = useState([]);

  useEffect(() => {
    // Load mood logs from localStorage or API
    const storedLogs = localStorage.getItem('moodLogs');
    if (storedLogs) {
      setMoodLogs(JSON.parse(storedLogs));
    }
  }, []);

  const handleLogMood = () => {
    if (!selectedMood) return;
    const newLog = {
      mood: selectedMood,
      trigger: trigger.trim(),
      timestamp: new Date().toISOString(),
    };
    const updatedLogs = [...moodLogs, newLog];
    setMoodLogs(updatedLogs);
    localStorage.setItem('moodLogs', JSON.stringify(updatedLogs));
    setSelectedMood(null);
    setTrigger('');
  };

  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Mood Tracker</h2>
      <div className="flex space-x-4 mb-4">
        {moods.map((m) => (
          <button
            key={m.value}
            onClick={() => setSelectedMood(m.value)}
            className={`flex flex-col items-center p-3 rounded cursor-pointer transition-colors ${
              selectedMood === m.value ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'
            }`}
            aria-label={m.label}
          >
            <i className={`fas ${m.icon} fa-2x mb-1`}></i>
            <span>{m.label}</span>
          </button>
        ))}
      </div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Identify any triggers or contributing factors..."
        value={trigger}
        onChange={(e) => setTrigger(e.target.value)}
        rows={3}
      />
      <button
        onClick={handleLogMood}
        disabled={!selectedMood}
        className="bg-indigo-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Log Mood
      </button>

      {moodLogs.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Mood Logs</h3>
          <ul className="space-y-2 max-h-48 overflow-y-auto">
            {moodLogs.map((log, index) => (
              <li key={index} className="border-b border-gray-200 pb-2">
                <div className="flex justify-between">
                  <span className="font-semibold capitalize">{log.mood}</span>
                  <span className="text-sm text-gray-500">{new Date(log.timestamp).toLocaleString()}</span>
                </div>
                {log.trigger && <p className="text-gray-700">{log.trigger}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
