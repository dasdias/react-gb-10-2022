import { List, ListItem } from "@mui/material";
import style from "./chatlist.module.css";
// import CommentIcon from '@mui/icons-material/Comment';
import { useState } from "react";
import { NavLink } from "react-router-dom";



export const ChatList = () => {

	const [chatList, setChatList] = useState([
		{ id: "chat01", name: "Чат-01" },
		{ id: "chat02", name: "Чат-02" },
		{ id: "chat03", name: "Чат-03" },
	]);

	return (

		<div className={[style.chatlist, style.chatlist_shadow].join(' ')}>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				{chatList.map((listElem, i) => (
          <ListItem key={i}>
            <NavLink to={`${listElem.id}`}>{`${listElem.name}`}</NavLink>
					</ListItem>
				))}
			</List>
		</div >
	)
}