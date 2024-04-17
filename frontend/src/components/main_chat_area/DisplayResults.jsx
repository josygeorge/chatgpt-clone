import React from 'react';
import gptLogo from '../../assets/ai-chatgpt.svg';

const DisplayResults = ({ chatDemo }) => {
  const preTrainedQueries = [
    'Write a thank-you note to my interviewer',
    'Recommend a dish to bring to a potluck',
    'How to use tailwind css with React JS',
    'How to use tailwind css with Next JS',
  ];

  return (
    <>
      {chatDemo.length > 0 ? (
        <div className='h-[80%] py-8 overflow-scroll no-scrollbar'>
          {chatDemo.map((chat, idx) => (
            <div className='w-[80%] mx-auto p-6 flex flex-col justify-start items-start'>
              <span className='font-bold text-slate-200'>{chat.role}</span>
              <div key={chat.id}>{chat.message}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className='h-[80%] border flex flex-col justify-center items-center'>
          <img src={gptLogo} alt='chatgpt-logo' className='w-12 h-12' />
          <div className='text-xl font-bold mb-6'>
            How can I help you today?
          </div>
          <div className='flex flex-wrap justify-around max-w-[900px]'>
            {preTrainedQueries.map((item, idx) => (
              <div className='text-md font-light mt-4 p-4 border rounded min-w-[400px] cursor-pointer hover:bg-slate-600'>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayResults;
