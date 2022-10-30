import style from './messageList.module.css'
export const MessageList = ({ messages }) => {
  return (
    <div className={style.messagelist}>
      {messages.map((message, i) => <div className={style.msg} key={i}><span>{message.text}; автор: {message.author}</span></div>)}
    </div>
  )
}