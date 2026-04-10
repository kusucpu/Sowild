// 'use client'
import { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    // --- API CALL LOGIC ---
    try {
      const response = await fetch('https://enter.pollinations.ai/v2/chat', { // Check the correct endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${YOUR_POLLI_KEY_IF_ANY}`
        },
        body: JSON.stringify({
          model: 'qwen-safety', // <-- Model yang bisa diganti-ganti
          messages: [
            { role: 'system', content: "### SYSTEM PROMPT: THE SARCASTIC-BUT-HELPFUL FRIEND v1.0..." }, // <-- Masukkan System Prompt di sini
            ...newMessages
          ]
        })
      });

      const data = await response.json();
      const aiMessage = data.choices[0].message; // <-- Sesuaikan dengan struktur respons Pollinations
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error("Error calling Pollinations API:", error);
      // Tampilkan pesan error selengean di UI
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* ... Tampilkan messages di sini ... */}
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSend} disabled={isLoading}>
        {isLoading ? 'Thinking...' : 'Send'}
      </button>
    </div>
  );
}
