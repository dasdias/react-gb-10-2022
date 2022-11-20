import { useDispatch, useSelector } from "react-redux"

export const Profile = () => {
  const isChecked = useSelector(state => state)
  const dispatch = useDispatch()

  console.log(isChecked)
  return (
    <div style={{ "padding": "15px" }}>
      <h1 style={{ "textAlign": "center" }}>Welcom to Profile Page</h1>
      <label style={{ marginRight: "10px" }} htmlFor="inputChecked">Чекбокс</label>
      <input id="inputChecked" type='checkbox' value={isChecked} onChange={() => {
        dispatch({ type: 'SWITCH_TOGGLE', payload: { isChecked } })
      }} />
    </div>
  );
}