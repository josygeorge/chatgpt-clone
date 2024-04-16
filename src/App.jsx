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

  const chatDemo = [
    {
      role: 'User',
      message: 'Can I know how to implement Tailwind CSS in my project',
    },
    {
      role: 'Assistant',
      message: 'I can help you with that. Here are the steps.',
    },
    {
      role: 'User',
      message:
        'Can I know how to implement Tailwind CSS in my project with Typescript',
    },
    {
      role: 'Assistant',
      message: 'I can help you with that. Here are the steps with an example.',
    },
  ];

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
        {chatDemo.length > 0 ? (
          <div className='h-[85%] overflow-scroll no-scrollbar pt-8'>
            {chatDemo.map((item, idx) => (
              <div
                key={`${item.role}-${item.idx}`}
                className='w-[85%] flex items-center border mx-auto p-2'
              >
                <span className='mr-6 p-2 bg-slate-600'>{item.role}:</span>
                <div>{item.message}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className='h-[85%] flex flex-col justify-center items-center'>
            <img src={gptLogo} alt='chatgpt-logo' className='w-12 h-12' />
            <div className='text-xl font-bold mb-4'>
              How can I help you today?
            </div>
            <DisplayResults />
          </div>
        )}
        {/* Chat Search Area */}
        <div className='h-[15%] rounded mx-6 mb-4'>
          <SearchQueries />
        </div>
      </div>
    </div>
  );
}

export default App;
