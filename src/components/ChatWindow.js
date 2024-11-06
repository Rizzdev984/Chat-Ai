import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { sendMessageToAI } from '../utils/api';

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async (message) => {
        setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);

        try {
            const response = await sendMessageToAI(message);
            setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'ai' }]);
        } catch (error) {
            console.error('Error sending message to AI:', error);
            setMessages((prevMessages) => [...prevMessages, { text: 'Error: Unable to get response from AI.', sender: 'ai' }]);
        }
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg} />
                ))}
            </div>
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatWindow;
