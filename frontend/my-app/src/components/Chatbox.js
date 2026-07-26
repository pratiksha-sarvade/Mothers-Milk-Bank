import React, { useState } from 'react';
import './Chatbox.css';

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, type: 'user' }]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <button className="chat-toggle-btn" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chat-box shadow-lg">
          <div className="chat-header">
            <strong>Chat with Us</strong>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-msg ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
