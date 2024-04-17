import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DisplayResults from './components/main_chat_area/DisplayResults';
import SearchQueries from './components/main_chat_area/SearchQueries';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const chatDemo = [
    {
      id: 1,
      role: 'You',
      message: 'Q1:Can I know how to implement Tailwind CSS in my project',
    },
    {
      id: 2,
      role: 'GPT',
      message:
        'A1:I can help you with that. Here are the steps. I can help you with that. Here are the steps.',
    },
    {
      id: 3,
      role: 'You',
      message:
        'Q2:Can I know how to implement Tailwind CSS in my project with Typescript. Please explain. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus enim magni exercitationem possimus corporis totam voluptatem illum error suscipit. Consectetur maxime eaque in consequuntur minima labore laudantium vel perferendis quidem?',
    },
    {
      id: 4,
      role: 'GPT',
      message:
        'A2:I can help you with that. Here are the steps with an example.',
    },
    {
      id: 5,
      role: 'You',
      message:
        'Q3:Can I know how to implement Tailwind CSS in my project with Typescript',
    },
    {
      id: 6,
      role: 'GPT',
      message:
        'A3:I can help you with that. Here are the steps with an example.',
    },
    {
      id: 7,
      role: 'You',
      message:
        'Q4:Can I know how to implement Tailwind CSS in my project with Typescript',
    },
    {
      id: 8,
      role: 'GPT',
      message:
        'A4:I can help you with that. Here are the steps with an example.',
    },
    {
      id: 9,
      role: 'You',
      message:
        'Q5:Can I know how to implement Tailwind CSS in my project with Typescript',
    },
    {
      id: 10,
      role: 'GPT',
      message:
        'A5:I can help you with that. Here are the steps with an example.',
    },
    {
      id: 11,
      role: 'You',
      message:
        'Q6:Can I know how to implement Tailwind CSS in my project with Typescript',
    },
    {
      id: 12,
      role: 'GPT',
      message:
        'A6:I can help you with that. Here are the steps with an example.',
    },
    {
      id: 13,
      role: 'You',
      message:
        'Q7:Can I know how to implement Tailwind CSS in my project with Typescript',
    },
    {
      id: 14,
      role: 'GPT',
      message:
        'A7:I can help you with that. Here are the steps with an example.',
    },
  ];

  return (
    <div className='relative z-0 flex h-screen w-screen'>
      {/* SideBar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Main Chat Area */}
      <div
        className={`relative flex flex-col flex-1 ${
          isSidebarOpen ? 'w-[75%]' : 'max-w-full'
        }`}
      >
        <DisplayResults chatDemo={chatDemo} />
        {/* Chat Search Area */}
        <SearchQueries />
      </div>
    </div>
  );
}

export default App;
