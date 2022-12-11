import { useParams } from 'react-router-dom';
import style from './messageList.module.css'
import { deleteMessage, getMessages, messagessSelector } from '../../store/messages'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';

export const MessageList = ({ messages }) => {

  const { chatId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  // const messagesState = useSelector((state) => {
  //   return state.messages.messages[chatId] ?? [];
  // });
  
  const selector = useMemo(() => messagessSelector(chatId), [chatId]);
  const messagesState = useSelector(selector);
  
  console.log(messagesState);

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