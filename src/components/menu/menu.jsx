import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import style from "./menu.module.css";

export const Menu = () => {
  return (<div style={{ "padding": "20px", "borderRight": " 1px solid #000", "boxShadow": "0px 4px 15px 0px rgba(34, 60, 80, 0.19)" }}>
		<List>
			<ListItem>
        <NavLink className={style.list} to="/">Главная</NavLink>
			</ListItem>
			<ListItem>
        <NavLink className={style.list} to="/profile">Профиль</NavLink>
			</ListItem>
			<ListItem>
        <NavLink className={style.list} to="/chats">Чаты</NavLink>
			</ListItem>
		</List>
	</div>

	);
}