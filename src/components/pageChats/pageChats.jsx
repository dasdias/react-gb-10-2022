import { ChatList } from "../chatList"
import { Form } from "../form"
import { MessageList } from "../messageList"
import style from './pageChats.module.css'

export const PageChats = ({ chatList, setChatList, messages, dataInput, setInputMsg, setMessage }) => {
  return <div className={style.pageChats}>
    <ChatList 
    chatList={chatList}
    setChatList={setChatList}
    />
    <div className={style.pageBody}>
      <MessageList messages={messages} />
      <Form dataInput={dataInput} setInputMsg={setInputMsg} setMessage={setMessage} />
    </div>
  </div>
}