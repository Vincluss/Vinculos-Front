'use client'
import React, { useState } from 'react';
import Style from '@/src/css/chatbot.module.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      handleBotResponse(inputValue.trim());
      setInputValue('');
    }
  };

  const handleBotResponse = (userMessage) => {
    // Add logic to handle curriculum-related commands or keywords
    let botMessage = '';

    if (userMessage.toLowerCase().includes('criar currículo')) {
      botMessage = 'Olá! Eu sou o VINI e estou feliz em te ajudar! Escolha o tipo de seu currículo! Exemplos: freelancer, básico, premium';
    } else if (userMessage.toLowerCase().includes('freelancer')) {
      botMessage = 'Okay, vamos lá! Eu já tenho algumas informações suas do seu perfil! Digite a sua área de atuação!';
    } else if (userMessage.toLowerCase().includes('add topic')) {
      botMessage = 'Excellent! What topic do you want to add to the curriculum?';
    } else {
      botMessage = 'Im sorry, I didnt understand that. Can you please rephrase?';
    }

    setMessages([...messages, { text: botMessage, isUser: false }]);
  };

  return (
    <div className={Style.chatbotContainer}>
      <div className={Style.chatbotHeader}>VINI - Crie comigo seu currículo!</div>
      <div className={Style.chatbotMessages}>
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? Style.userMessage : Style.botMessage}>
            {message.text}
          </div>
        ))}
      </div>
      <div className={Style.chatbotInput}>
        <input
        className={Style.input}
          type="text"
          placeholder="Digite sua mensagem"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSendMessage} className={Style.btn}>Enviar</button>
      </div>
    </div>
  );
};

export default Chatbot;
