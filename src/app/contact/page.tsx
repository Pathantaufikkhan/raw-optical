"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Toaster, toast } from "react-hot-toast";

function MusicSchoolContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.(com|in|org|net|edu)$/i;
    return pattern.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.dismiss();

    if (!isEmailValid) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message ,formType:"contact"}),
        
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setEmail("");
        setMessage("");
        setIsEmailValid(true);
      } else {
        toast.error("Failed to send message.");
      }
    } catch {
      toast.error("An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <Toaster position="top-center" />

      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center">
          We&rsquo;re here to help with any questions about our frames, lenses,
          or anything else. Reach out and let us assist you on your clear vision
          journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email address"
            className={`rounded-lg border w-full p-4 bg-neutral-950 text-white placeholder:text-neutral-400 ${
              isEmailValid
                ? "border-neutral-800 focus:ring-teal-500"
                : "border-red-500 focus:ring-red-500"
            } focus:ring-2`}
            required
          />
          {!isEmailValid && (
            <p className="text-red-500 text-sm -mt-3">
              Please enter a valid email address.
            </p>
          )}

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-400 text-white"
            rows={5}
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading || !isEmailValid || !message.trim()}
            className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              loading || !isEmailValid || !message.trim()
                ? "bg-gray-500 text-white cursor-not-allowed"
                : "bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500"
            }`}
          >
            {loading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
