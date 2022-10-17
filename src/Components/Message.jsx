import React, { useState } from "react";
import style from './Message.module.css';

export const Message = ({txt}) => {
  const [text, setText] = useState('Введите текст');

  // const handleChangeText = (event) => {
  //   console.log(event.target.value);
  //   setText(event.target.value);
  // }
  return (
  <>
      <div className={style.txtbg}>{txt}</div>
      <p>{text}</p>
      <input type="text" onChange={(event) => { setText(event.target.value) }} />
  </>

  )
}