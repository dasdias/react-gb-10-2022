import style from './messageList.module.css'
export const MessageList = ({ messages }) => {
	let lastMsg = messages[messages?.length - 1];

	return (
		<div className={style.messagelist}>
			{messages.map((message, i) => <div className={`${style.msg} ${message.author === 'robot' ? style.msg_bot : ""}`} key={i}><span>{message.text}; автор: {message.author}</span></div>)}
		</div >
	)
}