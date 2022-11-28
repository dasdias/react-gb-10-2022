import { useDispatch, useSelector } from "react-redux";
import { toggleVisibleProfile } from "../store/profile";
import { ProfileForm } from "../components"

export const ProfilePage = () => {
  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch()

  // console.log(profile)
  return (
    <div style={{ "padding": "15px" }}>
      <h1 style={{ "textAlign": "center" }}>Welcom to Profile Page</h1>
      {profile.isVisibleProfile && (
        <>
          <div>FirstName: {profile.firstName}</div>
          <div>LastName : {profile.lastName}</div>
          <div>Phone:  {profile.phone}</div>
        </>
      )}
      <button onClick={() => dispatch(toggleVisibleProfile())}>Toggle</button>
      <br />
      <ProfileForm {...profile} />
    </div>
  );
}