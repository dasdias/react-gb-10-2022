import { Route, Routes } from "react-router-dom"
import { ChatList } from "../../components/chatList"
import { Form } from "../../components/form"
import { MessageList } from "../../components/messageList"
import style from './pageChats.module.css'

export const PageChats = () => {

  return <div className={style.pageChats}>
    <ChatList />
    <div className={style.pageBody}>
      <Routes>
        <Route path="/" element={<div>Выберите чат.</div>} />
        <Route path=":chatId" element={
          <>
            <MessageList />
            <Form />
          </>
        } />
      </Routes>
    </div>
  </div>
}