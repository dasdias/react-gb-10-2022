import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import { NavLink } from "react-router-dom";

export const Menu = () => {
	return (<div style={{ "padding": "20px" }}>
		<List>
			<ListItem
				disableGutters
			>
				<NavLink to="/">
					<ListItemText primary={"Главная"} />
				</NavLink>
			</ListItem>
			<ListItem
				disableGutters
			>
				<NavLink to="/profile">
					<ListItemText primary={"Профиль"} />
				</NavLink>
			</ListItem>
			<ListItem
				disableGutters
			>
				<NavLink to="/chats">
					<ListItemText primary={"Чаты"} />
				</NavLink>
			</ListItem>
		</List>
	</div>

	);
}