import React from 'react';

const SearchQueries = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <input
        className='w-[85%] p-4 px-8 border border-gray-400 rounded-xl'
        type='text'
        placeholder='Message GPT ...'
      />
      <small className='mt-2'>
        GPT can make mistakes. Consider checking important information.
      </small>
    </div>
  );
};

export default SearchQueries;
