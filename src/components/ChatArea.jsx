import React from 'react';

const ChatArea = () => {
  return (
    <form>
      <textarea
        className='form__content'
        rows='6'
        placeholder='Message GPT...'
      ></textarea>
      <button className='form__btn'>Generate</button>
    </form>
  );
};

export default ChatArea;
