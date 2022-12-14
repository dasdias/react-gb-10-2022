import { List, ListItem } from "@mui/material";
import style from "./chatlist.module.css";
// import CommentIcon from '@mui/icons-material/Comment';
// import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { 
  conversationsSelector,
  removeConversationByName,
  createConversationByName as createConversation,
  getConversations,
} from "../../store/conversations";




export const ChatList = () => {

	// const conversations = useSelector(state => state.conversations.conversations);
  const conversations = useSelector(conversationsSelector);
	const dispatch = useDispatch();
	const navigate = useNavigate();

  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
    // dispatch(getMessages());
  }, [dispatch]);


  // console.log(conversations);

	const deleteConversationsList = useCallback((listId) => {
    dispatch(removeConversationByName(listId))
		navigate('/chats');
  }, [dispatch, navigate]);

	const createConversationsList = () => {
		const name = prompt('Введите имя: ');
		const id = new Date().getTime().toString()
		let isValidName = true;

    // console.log(conversations);

		conversations.forEach(element => {
			if (element.name === name) {
				isValidName = false;
				return;
			}
		});

		if (name && isValidName) {
			dispatch(createConversation({ id, name }))
		} else {
			alert('Не валидное имя');
		}
	};

	return (

		<div className={[style.chatlist, style.chatlist_shadow].join(' ')}>
			<button style={{ display: 'inline-block', marginBottom: '25px' }} onClick={() => createConversationsList()}>Создать чат.</button>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '8px' }}>
				{conversations.map((listElem, i) => (
					<ListItem key={listElem.id}>
						<NavLink to={`${listElem.id}`}>{`${listElem.name}`}</NavLink>
						<button onClick={() => deleteConversationsList(listElem.id)}>X</button>
					</ListItem>
				))}
			</List>
		</div >
	)
}