'use client';

import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

export default function VirtualTryOnPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message: 'Notify me about Virtual Try-On',formType:"notify" }),
        
      });

      const data = await res.json();

      if (data.success) {
        toast.success("You're on the list! 🎉");

        setSubmitted(true);
        setEmail('');
      } else {
        toast.error(data.error || 'Something went wrong.');
      }
    } catch {
      toast.error('Failed to submit. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-36 flex flex-col items-center justify-center text-white px-4">
      <Toaster position="top-center" />
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          Virtual Try-On
        </h1>
        <p className="text-lg text-gray-400">
          Coming Soon... Get ready to experience your perfect look, virtually!
        </p>
      </div>

      {/* Animated Glasses Icon */}
      <div className="animate-pulse mb-6">
        <svg
          className="w-24 h-24 text-white animate-bounce"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="32" r="10" stroke="white" strokeWidth="3" />
          <circle cx="44" cy="32" r="10" stroke="white" strokeWidth="3" />
          <rect x="28" y="30" width="8" height="4" fill="white" />
        </svg>
      </div>

      {/* Notify Me Form */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-md text-center">
          <label htmlFor="email" className="block mb-3 text-sm text-gray-300">
            Be the first to know when we launch
          </label>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-200 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Notify Me'}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-green-400 text-sm mt-6 text-center">
          <p>✅ We&apos;ll notify you when it&rsquo;s live. 🕶️</p>
        </div>
      )}
    </div>
  );
}
