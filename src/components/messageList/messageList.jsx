import { useParams } from 'react-router-dom';
import style from './messageList.module.css'
import { deleteMessage } from '../../store/messages'
import { useDispatch, useSelector } from 'react-redux';

export const MessageList = ({ messages }) => {

  const { chatId } = useParams();

  const messagesState = useSelector((state) => {
    return state.messages.messages[chatId] ?? [];
  });
  // console.log(messagesState);

  const dispatch = useDispatch();

  // let lastMsg = messages[messages?.length - 1];

  // const msg = messages[chatId] ?? [];

  return (
    <div className={style.messagelist}>
      {messagesState.map((message, i) => (
        <div className={`${style.msg} ${message.author === 'Bot' ? style.msg_bot : ""}`} key={message.id}>
          <span>{message.message}; автор: {message.author}</span>
          <button onClick={() => dispatch(deleteMessage(chatId, message.id))}>X</button>
        </div>
      ))}
    </div >
  )
}