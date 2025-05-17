import React, { createContext, useState, useContext } from 'react';

const MessageContext = createContext();

export const useMessages = () => useContext(MessageContext);

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
