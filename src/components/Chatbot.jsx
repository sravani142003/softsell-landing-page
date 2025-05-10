import React, { useState } from "react";

const responses = {
  "how do i sell my license?": "Simply upload your license and receive a valuation within 24 hours.",
  "is my data safe?": "Yes, we use encryption and follow strict privacy practices.",
  "how long does it take to get paid?": "Once validated, payments are processed within 48 hours.",
  "what types of licenses do you accept?": "We accept Microsoft, Adobe, Antivirus, and many more.",
  "is there a minimum value?": "No, we assess every license individually."
};


export default function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
   const botMsg = responses[userMsg.toLowerCase()] || "❓ Sorry, I don't have an answer for that yet. Try asking about selling, safety, or payment.";

    setMessages([...messages, { sender: "user", text: userMsg }, { sender: "bot", text: botMsg }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {chatOpen ? (
        <div className="w-72 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="p-3 font-semibold border-b border-gray-300 dark:border-gray-700 flex justify-between items-center">
            AI Chatbot
            <button onClick={() => setChatOpen(false)} className="text-gray-500 hover:text-red-500">✕</button>
          </div>
          <div className="p-3 h-60 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`text-${msg.sender === "user" ? "right text-blue-600" : "left text-gray-700 dark:text-gray-300"}`}>
                <div className="inline-block px-3 py-2 rounded bg-gray-100 dark:bg-gray-700">{msg.text}</div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-300 dark:border-gray-700 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <button onClick={sendMessage} className="ml-2 text-blue-600 dark:text-blue-400">Send</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setChatOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700"
        >
          Chat 💬
        </button>
      )}
    </div>
  );
}
