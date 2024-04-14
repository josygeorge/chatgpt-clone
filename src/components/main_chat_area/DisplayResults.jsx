import React from 'react';

const DisplayResults = () => {
  const preTrainedQueries = [
    'Write a thank-you note to my interviewer',
    'Recommend a dish to bring to a potluck',
    'How to use tailwind css with React JS',
    'How to use tailwind css with Next JS',
  ];
  return (
    <div className='flex flex-wrap max-w-[900px] justify-around'>
      {preTrainedQueries.map((query, idx) => (
        <div
          key={idx}
          className='text-md border mt-4 p-4 rounded cursor-pointer min-w-[350px] hover:bg-slate-800'
        >
          {query}
        </div>
      ))}
    </div>
  );
};

export default DisplayResults;
