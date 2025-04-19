import React from 'react';

const resources = [
  {
    id: 1,
    title: 'Find a Therapist',
    description: 'Locate nearby therapists and mental health professionals.',
    icon: 'fa-user-md',
    link: '#',
  },
  {
    id: 2,
    title: 'Support Groups',
    description: 'Join online or local support groups for mental health.',
    icon: 'fa-users',
    link: '#',
  },
  {
    id: 3,
    title: 'Online Resources',
    description: 'Access articles, videos, and tools for mental well-being.',
    icon: 'fa-book',
    link: '#',
  },
];

export default function Recommendations() {
  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Personalized Recommendations</h2>
      <ul className="space-y-4">
        {resources.map((res) => (
          <li key={res.id} className="flex items-center space-x-4">
            <i className={`fas ${res.icon} fa-2x text-indigo-600`}></i>
            <div>
              <a href={res.link} className="text-indigo-700 font-semibold hover:underline">
                {res.title}
              </a>
              <p className="text-gray-700">{res.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
