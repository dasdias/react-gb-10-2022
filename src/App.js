import { useEffect, useState } from 'react';
import './App.css';
import { MessageList } from './components';
import { Form } from './components/';
import { ChatList } from './components/';

export function App() {
  const [inputMsg, setInputMsg] = useState({
    text: "",
    author: "",
  });
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([]);

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
    <div className="app">
      <ChatList />
      <div className="chat-body">
        <MessageList messages={messageList} />
        <Form dataInput={inputMsg} setInputMsg={setInputMsg} setMessage={setMessageList} />
      </div>
    </div>
  );
}

// export default App;
