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
  const robotMsg = "Мы получили ваше сообщение и скоро свяжемся с вами.";
  return (
    <div className="App">
      <Form dataInput={inputMsg} setInputMsg={setInputMsg} messageList={messageList} setMessage={setMessageList} robotMsg={robotMsg} />
      <MessageList messages={messageList} />
    </div>
  );
}

// export default App;
