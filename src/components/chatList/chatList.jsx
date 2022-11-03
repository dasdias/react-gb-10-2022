import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import style from "./chatlist.module.css";
import CommentIcon from '@mui/icons-material/Comment';

export const ChatList = ({ chatList, setChatList }) => {
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

{/* <div className={`${style.chatlist} ${style.chatlist_shadow}`}> */ }