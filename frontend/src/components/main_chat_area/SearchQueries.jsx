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
    <div className='h-[20%] border'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='w-[80%] flex justify-center items-center relative hover:outline-none'>
          <textarea
            className='w-full min-h-12 max-h-20 p-3 px-8 pr-16 rounded-md border border-gray-400 bg-transparent no-scrollbar focus:outline-none'
            type='text'
            placeholder='Message GPT ...'
            rows='1'
            value={message}
            onChange={handleMessage}
            ref={textAreaRef}
          ></textarea>
          <SendSVG message={message} />
        </div>

        <small className='absolute bottom-1'>
          GPT can make mistakes. Consider checking important information.
        </small>
      </div>
    </div>
  );
};

export default SearchQueries;
