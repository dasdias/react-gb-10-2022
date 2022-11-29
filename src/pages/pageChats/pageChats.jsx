import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { ChatList } from "../../components/chatList"
import { Form } from "../../components/form"
import { MessageList } from "../../components/messageList"
import style from './pageChats.module.css'

export const PageChats = () => {

  const [inputMsg, setInputMsg] = useState({
    text: "",
    author: "",
  });

  const [messageList, setMessageList] = useState({
    'chat01': [],
    'chat02': [],
    'chat03': [],
  });

  return <div className={style.pageChats}>
    <ChatList />
    <div className={style.pageBody}>
      <Routes>
        <Route path="/" element={<div>Выберите чат.</div>} />
        <Route path=":chatId" element={<>
          <MessageList messages={messageList} />
          {/* <MessageList /> */}
          <Form dataInput={inputMsg} setInputMsg={setInputMsg} messageList={messageList} setMessage={setMessageList} />
          {/* <Form dataInput={inputMsg} setInputMsg={setInputMsg} messageList={messageList} setMessage={setMessageList} /> */}
        </>
        } />
      </Routes>
    </div>
  </div>
}