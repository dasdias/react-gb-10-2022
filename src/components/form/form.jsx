import { useState } from "react";
import style from "./form.module.css";

export const Form = ({ dataInput, setInputMsg, setMessage }) => {
  const { text, author } = dataInput;
  const submitForm = (e) => {
    e.preventDefault();

    if (text.length > 0) {
      setMessage((prev) => [...prev, { text, author }])
    }
    setInputMsg({ text: "", author: "" });
  }
  return (
    <form className={style.form} onSubmit={submitForm}>
      <div>
        <label htmlFor="message">Сообщение: </label>
        <input type="text" name="message" id="message" value={text} onChange={(e) => { setInputMsg((prev) => ({ ...prev, text: e.target.value })) }} />
      </div>
      <br />
      <div>
        <label htmlFor="author">Автор: </label>
        <input type="text" name="author" id="author" value={author} onChange={(e) => { setInputMsg((prev) => ({ ...prev, author: e.target.value })) }} />
      </div>
      <br />
      <div>
        <button>Отправить</button>
      </div>
    </form>
  )
}