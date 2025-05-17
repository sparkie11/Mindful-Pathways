import React from 'react';
import { useMessages } from '../components/MessageContext';

const Messages = () => {
  const { messages } = useMessages();

  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Submitted Messages</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500">No messages submitted yet.</p>
      ) : (
        <div className="max-w-4xl mx-auto grid gap-6 text-left">
          {messages.map((msg, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p className="text-sm text-gray-400 mt-2">{msg.date}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Messages;
