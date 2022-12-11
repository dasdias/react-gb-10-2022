import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";
export const MainPage = ({ email }) => {
  
  return (
    <div style={{ "padding": "15px" }}>
      <h1 style={{"textAlign": "center"}}>Welcom to Main Page</h1>
      <hr />
      {!!email && (
        <div>
          <h2>Пользователь авторизован по email: {email}</h2>
          <h1>USER: {email}</h1>
          <button
            onClick={() => {
              signOut(auth);
            }}
          >
            LogOut
          </button>
        </div>
      )}
    </div>
  );
}