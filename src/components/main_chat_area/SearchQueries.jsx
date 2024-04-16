import React, { useEffect, useRef, useState } from 'react';
import SendSVG from '../svg_files/SendSVG';

const SearchQueries = () => {
  const textAreaRef = useRef(null);
  const [message, setMessage] = useState('');
  const handleMessage = (e) => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${e.target.scrollHeight - 16}px`;
    }
    setMessage(e.target.value);
  };
  return (
    <div className='mt-20 flex flex-col justify-center items-center w-full h-full'>
      <div className='relative w-[85%] flex items-center hover:outline-none border border-y-0 border-gray-400 rounded-xl '>
        <textarea
          rows='1'
          className='absolute bottom-0 w-full min-h-14 max-h-24 p-4 px-8 rounded-md border border-gray-400 bg-transparent no-scrollbar focus:outline-none'
          type='text'
          placeholder='Message GPT ...'
          value={message}
          onChange={handleMessage}
          ref={textAreaRef}
        />
        <SendSVG message={message} />
      </div>

      <small className='absolute bottom-0 m-1'>
        GPT can make mistakes. Consider checking important information.
      </small>
    </div>
  );
};

export default SearchQueries;
