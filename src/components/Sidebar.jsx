import React from 'react';
import gptLogo from '../assets/ai-chatgpt.svg';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? 'w-[20%]' : null
      } h-screen flex-shrink-0 z-30 overflow-x-hidden bg-token-sidebar-surface-primary`}
    >
      {!isSidebarOpen ? (
        <button
          class='fixed z-30 flex justify-items-center cursor-pointer  opacity-100 hover:opacity-85 left-4 top-2 hover: border-none'
          onClick={toggleSidebar}
        >
          <svg viewBox='0 0 100 80' fill='#62b4cf' width='25' height='25'>
            <rect width='100' height='10'></rect>
            <rect y='30' width='100' height='10'></rect>
            <rect y='60' width='100' height='10'></rect>
          </svg>
        </button>
      ) : (
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } ease-in-out duration-400`}
        >
          <div className='p-2'>
            <div className='flex items-center space-x-4'>
              <img src={gptLogo} alt='chatgpt-logo' className='w-10 h-10' />
              <span className='text-xl font-bold'>ChatGPT</span>
            </div>

            <button
              className=' absolute w-8 h-8 rounded-full font-bold top-2 right-2 z-30 bg-gray-600 px-1 text-cyan-400'
              onClick={toggleSidebar}
            >
              X
            </button>
            <div className='my-4'>
              <button className='w-full h-[50px] border border-white rounded'>
                + New Chat
              </button>
            </div>
            <div className='h-[75%]'>
              <div className='py-3 border text-center mt-4 text-light flex items-center justify-center cursor-pointer hover:bg-slate-600'>
                <span className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='icon icon-tabler icons-tabler-outline icon-tabler-message'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M8 9h8' />
                    <path d='M8 13h6' />
                    <path d='M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z' />
                  </svg>
                </span>
                <h1>Chat History</h1>
              </div>
            </div>

            <ul className='mt-4'>
              <li className='py-2 hover:bg-gray-700 cursor-pointer border rounded'>
                + New Chat
              </li>
              <li className='py-2 hover:bg-gray-700 cursor-pointer'>Link 2</li>
              <li className='py-2 hover:bg-gray-700 cursor-pointer'>Link 3</li>
              <li className='py-2 hover:bg-gray-700 cursor-pointer'>Link 3</li>
              <li className='py-2 hover:bg-gray-700 cursor-pointer'>Link 3</li>
              <li className='py-2 hover:bg-gray-700 cursor-pointer'>Link 3</li>
              {/* Add more sidebar links as needed */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
