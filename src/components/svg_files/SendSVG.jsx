import React from 'react';

const SendSVG = () => {
  return (
    <div className=' absolute cursor-pointer right-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-up text-gray-900 border border-zinc-700 z-30 rounded-md'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M12 5l0 14' />
        <path d='M18 11l-6 -6' />
        <path d='M6 11l6 -6' />
      </svg>
    </div>
  );
};

export default SendSVG;
