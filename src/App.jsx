import { useState } from 'react';
/* import './App.css'; */
import gptLogo from './assets/ai-chatgpt.svg';
import Sidebar from './components/Sidebar';
import DisplayResults from './components/main_chat_area/DisplayResults';
import SearchQueries from './components/main_chat_area/SearchQueries';
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
      {/* Main Chat Area */}
      <div
        className={`relative flex h-screen text-center ${
          isSidebarOpen ? 'w-[75%]' : 'max-w-full'
        } flex-1 flex-col`}
      >
        {/* Chat Result Display Area */}
        <div className='h-[85%] flex  flex-col justify-center items-center'>
          <img src={gptLogo} alt='chatgpt-logo' className='w-12 h-12' />
          <div className='text-xl font-bold mb-4'>
            How can I help you today?
          </div>
          <DisplayResults />
        </div>
        {/* Chat Search Area */}
        <div className='h-[15%] rounded mx-6 mb-4'>
          <SearchQueries />
        </div>
      </div>
    </div>
  );
}

export default App;
