import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import style from "./chatlist.module.css";
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from "react";



export const ChatList = () => {
	const [chatList, setChatList] = useState([
		{ id: "chat01", name: "Chat-01" },
		{ id: "chat02", name: "Chat-02" },
		{ id: "chat02", name: "Chat-03" },
	]);

	return (

		<div className={[style.chatlist, style.chatlist_shadow].join(' ')}>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				{chatList.map((ListElem, i) => (
					<ListItem
						key={i}
						disableGutters
						secondaryAction={
							<IconButton aria-label="comment">
								<CommentIcon />
							</IconButton>
						}
					>
						<ListItemText primary={`${ListElem.name}`} />
					</ListItem>
				))}
			</List>
		</div >
	)
}