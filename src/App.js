import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from './components/menu';
import { PageChats } from './components/';
import { MainPage } from './components/';
import { Profile } from './components/';

export function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <Menu />
        <div className="body">
          <Routes>
            <Route path="/" element={<MainPage></MainPage>} />
            <Route path="/chats/*" element={ <PageChats />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="*" element={<div> <h2 style={{"textAlign": "center"}}>404 Page</h2></div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

// export default App;
