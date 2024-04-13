import React from 'react';
import gptLogo from '../assets/ai-chatgpt.svg';
import ChatHistoryMsgSVG from './svg_files/ChatHistoryMsgSVG';
import SettingsSVG from './svg_files/SettingsSVG';
import ProfileSVG from './svg_files/ProfileSVG';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  /* Arr of objects to Loop through svg components */
  const svgArr = [
    {
      iconComponent: <SettingsSVG />,
      iconName: 'Settings',
    },
    {
      iconComponent: <ProfileSVG />,
      iconName: 'Profile',
    },
  ];
  return (
    <div className={`${isSidebarOpen ? 'w-[20%]' : 'w-[0%]'} z-30 `}>
      {/* <div
      className={`${
        isSidebarOpen ? 'w-[20%]' : null
      } h-screen flex-shrink-0 z-30 overflow-x-hidden bg-token-sidebar-surface-primary`}
    > */}
      {/* Toggle logic */}
      {!isSidebarOpen ? (
        <button
          className='fixed z-30 flex justify-items-center cursor-pointer  opacity-100 hover:opacity-85 left-4 top-2 hover: border-none'
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
            <div className='h-[70%] border overflow-scroll'>
              {/* Use map function to loop the chat history */}
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className='py-3 rounded text-center mt-4 text-light flex items-center justify-center cursor-pointer hover:bg-slate-600'
                >
                  <span className='mr-2'>
                    <ChatHistoryMsgSVG />
                  </span>
                  <span>Chat History</span>
                </div>
              ))}
            </div>

            <ul className='mt-4 border-t-2'>
              {svgArr.map((svg) => (
                <li
                  key={svg.iconName}
                  className='mt-4 py-2 hover:bg-gray-700 cursor-pointer border rounded flex items-center justify-center'
                >
                  <span className='mr-2'>{svg.iconComponent}</span>
                  <span>{svg.iconName}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
