export const MessageList = ({ messages }) => {
  return (
    <>
      {messages.map((message, i) => <div key={i}>Сообщение: {message.text}; автор: {message.author}</div>)}
    </>
  )
}