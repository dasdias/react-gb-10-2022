import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { ChatList } from "../chatList"
import { Form } from "../form"
import { MessageList } from "../messageList"
import style from './pageChats.module.css'

export const PageChats = ({ messages, dataInput, setInputMsg}) => {

  const robotMsg = "Мы получили ваше сообщение и скоро свяжемся с вами.";

  const [messageList, setMessageList] = useState([]);

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
  
  return <div className={style.pageChats}>
    <ChatList/>
    <div className={style.pageBody}>
      <Routes>
        <Route path="/" element={<div>Выберите чат.</div>} />
        <Route path=":chatId" element={<>
          <MessageList messages={messageList} />
          <Form dataInput={dataInput} setInputMsg={setInputMsg} setMessage={setMessageList} />
        </>
        } />
      </Routes>
    </div>
  </div>
}