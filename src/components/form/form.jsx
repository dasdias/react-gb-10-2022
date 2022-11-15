// import { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import style from "./form.module.css";
import SendIcon from '@mui/icons-material/Send';

export const Form = ({ dataInput, setInputMsg, setMessage }) => {
  const { text } = dataInput;
  const submitForm = (e) => {
    e.preventDefault();

    if (text.length > 0) {
      setMessage((prev) => [...prev, { text, author: 'User' }])
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