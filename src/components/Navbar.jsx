import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <button
      type='button'
      onClick={toggleSidebar}
      className='left-0 mt-4 focus:outline-none bg-blue-500 text-white py-2 px-4 rounded'
    >
      Toggle Sidebar
    </button>
  );
};

export default Navbar;
