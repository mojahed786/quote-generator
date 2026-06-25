import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const quotes = [
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill",
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Do the best you can until you know better. Then when you know better, do better.",
    author: "Maya Angelou",
  },
  {
    text: "It is okay to be at a place of struggle. Struggle is just another word for growth.",
    author: "Idowu Koyenikan",
  },
  {
    text: "Even the darkest night will end and the sun will rise.",
    author: "Victor Hugo",
  },
];

export default function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#7ee8e8] via-[#9ed9f5] to-[#b8c6ff] px-4">      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl p-10 text-center">

        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          Inspirational Quote Generator
        </h1>

        <p className="text-2xl text-gray-600 leading-relaxed mb-6">
          "{quote.text}"
        </p>

        <p className="text-xl text-gray-500 mb-10">
          - {quote.author}
        </p>

        <button
          onClick={generateQuote}
          className="bg-sky-500 cursor-pointer hover:bg-sky-600 text-white px-8 py-3 rounded-full font-medium transition duration-300 shadow-md"
        >
          Generate Quote
        </button>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Share this quote on
          </h3>

          <div className="flex justify-center gap-6">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow cursor-pointer hover:scale-110 transition">
              <FaFacebookF size={18} />
            </div>

            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow cursor-pointer hover:scale-110 transition">
              <FaTwitter size={18} />
            </div>

            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow cursor-pointer hover:scale-110 transition">
              <FaLinkedinIn size={18} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}