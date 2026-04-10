// helpers/localStorageManager.js

// --- CHAT HISTORY ---
export const saveChat = (chat) => {
  // chat = { id: Date.now(), title: "First message...", messages: [...] }
  let history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  history.unshift(chat); // Add to the front
  // Add logic here to check for size and remove the oldest if it exceeds the limit
  localStorage.setItem('chatHistory', JSON.stringify(history));
};

export const getChatHistory = () => {
  return JSON.parse(localStorage.getItem('chatHistory')) || [];
};

// ... similar functions for deleteChat, getChatById, deleteAllChats

// --- IMAGE HISTORY ---
export const saveImage = (image) => {
  // image = { id: Date.now(), url: "...", prompt: "..." }
  let history = JSON.parse(localStorage.getItem('imageHistory')) || [];
  history.unshift(image);

  localStorage.setItem('imageHistory', JSON.stringify(history));
};
// ... etc.
