import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from './components/menu';
import { PersistGate } from "redux-persist/integration/react";
import { PageChats } from './pages';
import { MainPage } from './pages';
import { ProfilePage } from './pages';
import { persistor } from "./store";
import { GistsPage } from './pages';
// import { PageChats } from './components/';
// import { MainPage } from './components/';
// import { ProfilePage } from './components/';


export function App() {

  return (
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <div className="app">
          <Menu />
          <div className="body">
            <Routes>
              <Route path="/" element={<MainPage></MainPage>} />
              <Route path="/chats/*" element={<PageChats />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/gists" element={<GistsPage />} />
              <Route path="*" element={<div> <h2 style={{ "textAlign": "center" }}>404 Page</h2></div>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter >
    </PersistGate>
  );
}

// export default App;
