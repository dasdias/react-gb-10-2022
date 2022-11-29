import { useParams } from 'react-router-dom';
import style from './messageList.module.css'
import { deleteMessage } from '../../store/messages'
import { useDispatch } from 'react-redux';

export const MessageList = ({ messages }) => {

  const dispatch = useDispatch();

  // let lastMsg = messages[messages?.length - 1];

  const { chatId } = useParams();
  const msg = messages[chatId] ?? [];

  return (
    <div className={style.messagelist}>
      {msg.map((message, i) => (
        <div className={`${style.msg} ${message.author === 'robot' ? style.msg_bot : ""}`} key={i}>
          <span>{message.text}; автор: {message.author}</span>
          <button onClick={() => dispatch(deleteMessage(chatId, message.id))}>X</button>
        </div>
      ))}
    </div >
  )
}