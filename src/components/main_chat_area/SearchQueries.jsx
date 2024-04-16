import React from 'react';
import SettingsSVG from '../svg_files/SettingsSVG';
import SendSVG from '../svg_files/SendSVG';

const SearchQueries = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='w-[85%] flex items-center border border-gray-400 rounded-xl relative'>
        <input
          className='w-full p-4 px-8 rounded-xl bg-transparent'
          type='text'
          placeholder='Message GPT ...'
        />
        <SendSVG />
      </div>

      <small className='mt-2'>
        GPT can make mistakes. Consider checking important information.
      </small>
    </div>
  );
};

export default SearchQueries;
