import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import style from "./menu.module.css";

const menuWithoutSession = [
  {
    title: "Login",
    to: "/login",
  },
  {
    title: "SignUp",
    to: "/signup",
  },
];

const menuWithSession = [
  {
    title: "Главная",
    to: "/",
  },
  {
    title: "Чаты",
    to: "/chats",
  },
  {
    title: "Профиль",
    to: "/profile",
  },
  {
    title: "Асинхронный запрос к GistsPage",
    to: "/gists",
  },
];

export const Menu = ({ email }) => {
  return (<div style={{ "padding": "20px", "borderRight": " 1px solid #000", "boxShadow": "0px 4px 15px 0px rgba(34, 60, 80, 0.19)" }}>
    <List>
      {/* <ListItem>
        <NavLink className={style.list} to="/">Главная</NavLink>
			</ListItem>
			<ListItem>
        <NavLink className={style.list} to="/login">Login</NavLink>
			</ListItem>
			<ListItem>
        <NavLink className={style.list} to="/signup">SignUp</NavLink>
			</ListItem>
			<ListItem>
        <NavLink className={style.list} to="/gists">Асинхронный запрос к GistsPage</NavLink>
			</ListItem>
			<ListItem>
        <NavLink className={style.list} to="/profile">Профиль</NavLink>
			</ListItem>
			<ListItem>
        <NavLink className={style.list} to="/chats">Чаты</NavLink>
			</ListItem> */}

      {!!email &&
        menuWithSession.map((item) => (
          <ListItem key={item.to}>
            <NavLink className={style.list} to={item.to}>
              {item.title}
            </NavLink>
          </ListItem>
        ))}

      {!email &&
        menuWithoutSession.map((item) => (
          <ListItem key={item.to}>
            <NavLink className={style.list} to={item.to}>
              {item.title}
            </NavLink>
          </ListItem>
        ))}
    </List>
  </div>

  );
}