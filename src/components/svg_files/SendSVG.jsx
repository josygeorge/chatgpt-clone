import React from 'react';

const SendSVG = ({ message }) => {
  return (
    <div className='absolute bottom-4 cursor-pointer right-2 hover:text-green-200'>
      {message.length > 0 && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-send'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M10 14l11 -11' />
          <path d='M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5' />
        </svg>
        /* <div className='absolute bottom-3 cursor-pointer right-2 bg-green-900 hover:bg-green-900 rounded hover:border-green-400'> */
        /*  <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-up text-gray-100 border border-gray-400 z-30 rounded'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 5l0 14' />
          <path d='M18 11l-6 -6' />
          <path d='M6 11l6 -6' />
      </svg> */
      )}
    </div>
  );
};

export default SendSVG;
