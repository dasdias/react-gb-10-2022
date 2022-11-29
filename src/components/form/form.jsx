// import { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import style from "./form.module.css";
import SendIcon from '@mui/icons-material/Send';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const Form = ({ dataInput, setInputMsg, setMessage, messageList }) => {

  const conversations = useSelector(state => state.conversations.conversations);

  // console.log(conversations)


  const { text } = dataInput;
  const { chatId } = useParams();

  const robotMsg = "Мы получили ваше сообщение и скоро свяжемся с вами.";

  useEffect(() => {
    let timerId;
    if (messageList[chatId].length > 0 && messageList[chatId][messageList[chatId].length - 1].author !== 'robot') {
      timerId = setTimeout(() => {
        setMessage((prev) => {
          return { ...prev, [chatId]: [...(prev[chatId] ?? []), { text: robotMsg, author: 'robot' }] }
        })
      }, 1500)
    }

    return (() => {
      clearTimeout(timerId);
    })

  }, [messageList, chatId, setMessage])

  const submitForm = (e) => {
    e.preventDefault();

    if (text.length > 0) {
      setMessage((prev) => {
        return { ...prev, [chatId]: [...(prev[chatId] ?? []), { text, author: 'User' }] }
      })
    }
    setInputMsg({ text: "", author: "User" });
  }

  return (
    <form className={style.form} onSubmit={submitForm}>
      <div className={style.form__msg}>
        <TextField id="message"
          label="Введите сообщение"
          variant="outlined"
          fullWidth
          size="small"
          value={text}
          onChange={(e) => {
            setInputMsg((prev) => ({ ...prev, text: e.target.value }))
          }}
        />
        {text.length ?
          <IconButton type="submit" className={style.form__btn} aria-label="comment">
            <SendIcon />
          </IconButton>
          : ""
        }
      </div>
    </form>
  )
}