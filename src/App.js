import { useEffect, useState } from 'react';
import './App.css';
import { MessageList } from './components';
import { Form } from './components/';
import { ChatList } from './components/';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from './components/menu';

export function App() {
	const [inputMsg, setInputMsg] = useState({
		text: "",
		author: "",
	});
	const [messageList, setMessageList] = useState([]);
	const [chatList, setChatList] = useState([
		{ id: "chat01", name: "Chat-01" },
		{ id: "chat02", name: "Chat-02" },
		{ id: "chat02", name: "Chat-03" },
	]);

	const robotMsg = "Мы получили ваше сообщение и скоро свяжемся с вами.";


	useEffect(() => {
		let timerId;
		if (messageList.length > 0 && messageList[messageList.length - 1].author !== 'robot') {
			timerId = setTimeout(() => {
				setMessageList((prev) => [...prev, { text: robotMsg, author: 'robot' }])
			}, 1500)
		}

		return (() => {
			clearTimeout(timerId);
		})

	}, [messageList])
	return (
		<BrowserRouter>
			<div className="app">
				<Menu />
				<ChatList chatList={chatList} setChatList={setChatList} />
				<div className="chat-body">
					<Routes>
						<Route path="/chats" element={<>
							<MessageList messages={messageList} />
							<Form dataInput={inputMsg} setInputMsg={setInputMsg} setMessage={setMessageList} />
						</>} />
						<Route path="*" element={<div> <h2>404 Page</h2></div>} />
					</Routes>
				</div>
			</div>
		</BrowserRouter >
	);
}

// export default App;
