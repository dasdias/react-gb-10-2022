// import { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import style from "./form.module.css";
import SendIcon from '@mui/icons-material/Send';
import { useParams } from "react-router-dom";
import {
  // useEffect,
  useState
} from "react";
import {
  useDispatch,
  // useSelector
} from "react-redux";
import { 
  sendMessage,
  // sendMessageWithBot
} from "../../store/messages"

export const Form = () => {

  // const conversations = useSelector(state => state.conversations.conversations);
  const dispatch = useDispatch();


  const [inputMsg, setInputMsg] = useState({
    author: "User",
    message: "",
  });

  // const { text } = dataInput;
  const { chatId } = useParams();

  // const messagesState = useSelector((state) => {
  //   return state.messages.messages[chatId] ?? [];
  // });

  // console.log(messagesState)
  // const robotMsg = "Мы получили ваше сообщение и скоро свяжемся с вами.";

  // useEffect(() => {
  //   let timerId;
  //   // console.log('userEffect')
  //   if (messagesState.length > 0 && messagesState[messagesState.length - 1].author !== 'Bot') {
  //     timerId = setTimeout(() => {
  //       // dispatch(sendMessage(chatId, { author: 'Bot', message: robotMsg }))
  //       dispatch(sendMessageWithBot(chatId, { author: 'Bot', message: robotMsg }))
  //       // setMessage((prev) => {
  //       //   return { ...prev, [chatId]: [...(prev[chatId] ?? []), { text: robotMsg, author: 'robot' }] }
  //       // })
  //     }, 800)
  //   }

  //   return (() => {
  //     clearTimeout(timerId);
  //   })

  // }, [chatId, messagesState])

  const submitForm = (e) => {
    e.preventDefault();

    if (inputMsg.message.length > 0) {
      dispatch(sendMessage(chatId, inputMsg))
      // dispatch(sendMessageWithBot(chatId, inputMsg))
      // setMessage((prev) => {
      //   return { ...prev, [chatId]: [...(prev[chatId] ?? []), { text, author: 'User' }] }
      // })
      // setMessage((prev) => {
      //   return { ...prev, [chatId]: [...(prev[chatId] ?? []), { text, author: 'User' }] }
      // })
    } else {
      alert('Cообщение не должно быть пустым')
    }
    setInputMsg({ author: "User", message: "", })
    // setInputMsg({ text: "", author: "User" });
  }

  return (
    <form className={style.form} onSubmit={submitForm}>
      <div className={style.form__msg}>
        <TextField id="message"
          label="Введите сообщение"
          variant="outlined"
          fullWidth
          size="small"
          value={inputMsg.message}
          onChange={(e) => {
            setInputMsg((prev) => ({ ...prev, message: e.target.value }))
          }}
        />
        {inputMsg.message.length ?
          <IconButton type="submit" className={style.form__btn} aria-label="comment">
            <SendIcon />
          </IconButton>
          : ""
        }
      </div>
    </form>
  )
}