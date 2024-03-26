import React from 'react';
import ChatGPTlogo from '../assets/chat-gpt-ai-logo.jpeg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-item'>
        <h1>ChatGPT AI</h1>
        <img src={ChatGPTlogo} alt='logo' className='logo' />
        <p className='header-item__content'>
          I'm ChatGPT, an AI model developed by OpenAI. How can I help you
          today?
        </p>
      </div>
    </header>
  );
};

export default Header;
