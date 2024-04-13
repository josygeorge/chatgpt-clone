import { useState } from 'react';
/* import './App.css'; */
//import chatgptLogo from './assets/ai-chatgpt.svg';
import Sidebar from './components/Sidebar';
//import Navbar from './components/Navbar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='relative z-0 flex h-screen w-screen'>
      {/* SideBar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Main Wrap */}
      <div
        className={`relative flex h-screen text-center ${
          isSidebarOpen ? 'w-[80%]' : 'max-w-full'
        } flex-1 flex-col`}
      >
        <div className='h-[80%] '>Display Area</div>
        <div className='h-[25%] border rounded mx-6 mb-4'>Query Area</div>
      </div>
    </div>
  );
}

export default App;
