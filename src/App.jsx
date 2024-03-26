import { useState } from 'react';
import './App.css';
//import chatgptLogo from './assets/ai-chatgpt.svg';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='h-screen flex'>
      {/* SideBar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Main Wrap */}
      <div className='flex-1 p-8'>
        {/* NavBar */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* Main Content Area */}
      </div>
    </div>
  );
}

export default App;
