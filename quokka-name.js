// pages/quokka-name.js

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function QuokkaName() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem('quokkaName', name);
      router.push('/instructions');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-3xl font-bold mb-4">Meet Your Calm Buddy</h1>
      <p className="text-lg mb-6">Give your Quokka a name:</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
