import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from './components/menu';
import { PageChats } from './components/';
import { MainPage } from './components/';
import { Profile } from './components/';

export function App() {
  const [inputMsg, setInputMsg] = useState({
    text: "",
    author: "",
  });
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([
    { id: "chat01", name: "Chat-01" },
    { id: "chat02", name: "Chat-02" },
    { id: "chat02", name: "Chat-03" },
  ]);

  const robotMsg = "Мы получили ваше сообщение и скоро свяжемся с вами.";


  useEffect(() => {
    let timerId;
    if (messageList.length > 0 && messageList[messageList.length - 1].author !== 'robot') {
      timerId = setTimeout(() => {
        setMessageList((prev) => [...prev, { text: robotMsg, author: 'robot' }])
      }, 1500)
    }

    return (() => {
      clearTimeout(timerId);
    })

  }, [messageList])
  return (
    <BrowserRouter>
      <div className="app">
        <Menu />
        <div className="body">
          <Routes>
            <Route path="/" element={<MainPage></MainPage>} />
            <Route path="/chats"
              element={
                <PageChats 
                  messages={messageList}
                  chatList={chatList}
                  setChatList={setChatList}
                  dataInput={inputMsg}
                  setInputMsg={setInputMsg}
                  setMessage={setMessageList} />
              }
            />
            <Route path="/profile" element={<Profile/>} />
            <Route path="*" element={<div> <h2 style={{"textAlign": "center"}}>404 Page</h2></div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

// export default App;
