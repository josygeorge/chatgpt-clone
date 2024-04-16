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
      id: 1,
      role: 'You',
      message: 'Can I know how to implement Tailwind CSS in my project',
    },
    {
      id: 2,
      role: 'GPT',
      message:
        'I can help you with that. Here are the steps. I can help you with that. Here are the steps.',
    },
    {
      id: 3,
      role: 'You',
      message:
        'Can I know how to implement Tailwind CSS in my project with Typescript',
    },
    {
      id: 4,
      role: 'GPT',
      message: 'I can help you with that. Here are the steps with an example.',
    },
    {
      id: 5,
      role: 'You',
      message:
        'Can I know how to implement Tailwind CSS in my project with Typescript',
    },
    {
      id: 6,
      role: 'GPT',
      message: 'I can help you with that. Here are the steps with an example.',
    },
    {
      id: 7,
      role: 'You',
      message:
        'Can I know how to implement Tailwind CSS in my project with Typescript',
    },
    {
      id: 8,
      role: 'GPT',
      message: 'I can help you with that. Here are the steps with an example.',
    },
    {
      id: 9,
      role: 'You',
      message:
        'Can I know how to implement Tailwind CSS in my project with Typescript',
    },
    {
      id: 10,
      role: 'GPT',
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
          <div className='h-[75%] flex flex-col justify-center items-center overflow-scroll no-scrollbar pt-52'>
            {chatDemo.map((item, idx) => (
              <div
                key={item.id}
                className={`w-[75%] mx-auto px-4 py-2 ${
                  item.role === 'GPT' ? 'bg-cyan-950' : 'bg-gray-800'
                } `}
              >
                <div className='relative flex w-full flex-col justify-start items-start flex-grow max-w-full'>
                  <span className='font-bold text-slate-200'>{item.role}</span>
                  <div className='min-h-[20px] text-message whitespace-pre-wrap break-words'>
                    {item.message}
                  </div>
                </div>
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
