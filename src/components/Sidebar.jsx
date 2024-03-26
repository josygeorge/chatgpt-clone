import React from 'react';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed left-0 h-full w-64 bg-gray-800 text-white ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className='p-4'>
        <h1 className='text-2xl font-bold'>Sidebar</h1>
        <ul className='mt-4'>
          <li className='py-2 hover:bg-gray-700 cursor-pointer'>Link 1</li>
          <li className='py-2 hover:bg-gray-700 cursor-pointer'>Link 2</li>
          <li className='py-2 hover:bg-gray-700 cursor-pointer'>Link 3</li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
      <button
        className='fixed top-4 right-4 text-white'
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
};

export default Sidebar;
