import { useState } from 'react';
import './App.css';
//import chatgptLogo from './assets/ai-chatgpt.svg';
import Sidebar from './components/Sidebar';
//import Navbar from './components/Navbar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='relative z-0 flex h-screen w-screen overflow-hidden'>
      {/* SideBar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Main Wrap */}
      <div className='relative flex h-full max-w-full flex-1 flex-col overflow-hidden'>
        {/* NavBar */}
        {/*<Navbar toggleSidebar={toggleSidebar} />*/}
        {/* Main Content Area */}
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;
