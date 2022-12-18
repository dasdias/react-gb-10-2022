import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { ChatList } from "../../components/chatList"
import { Form } from "../../components/form"
import { MessageList } from "../../components/messageList"
import { getMessages } from "../../store/messages";
import { getConversations } from "../../store/conversations";
import style from './pageChats.module.css'

export const PageChats = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getConversations());
  //   // dispatch(getMessages());
  // }, [dispatch]);

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