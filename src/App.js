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
    { text: 'Привет, как дела?', author: 'Петя' },
    { text: 'Что нового на плюке?', author: 'Вася' }
  ])
  return (
    <div className="App">
      <Form dataInput={inputMsg} setInputMsg={setInputMsg} setMessage={setMessageList} />
      <MessageList messages={messageList} />
    </div>
  );
}

// export default App;
