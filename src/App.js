import { useEffect, useState } from 'react';
import './App.css';
import { MessageList } from './components';
import { Form } from './components/';

export function App() {
  const [inputMsg, setInputMsg] = useState({
    text: "",
    author: "",
  });
  const [messageList, setMessageList] = useState([
    // { text: 'Привет, как дела?', author: 'Петя' },
    // { text: 'Что нового на плюке?', author: 'Вася' }
  ]);
  
  useEffect(() => {
    let timerId;
    if (messageList.length > 0 && messageList[messageList.length - 1].author !== 'robot') {
      timerId = setTimeout(() => {
        setMessageList((prev) => [...prev, { text: robotMsg, author: 'robot' }])
      }, 5000)
    }

    return (()=>{
      clearTimeout(timerId);
    })

  }, [messageList])
  const robotMsg = "Мы получили ваше сообщение и скоро свяжемся с вами.";
  return (
    <div className="app">
      <Form dataInput={inputMsg} setInputMsg={setInputMsg} messageList={messageList} setMessage={setMessageList} robotMsg={robotMsg} />
      <MessageList messages={messageList} />
    </div>
  );
}

// export default App;
