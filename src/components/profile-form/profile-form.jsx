import { useState } from "react"
import { useDispatch } from "react-redux";
import { updateProfile } from "../../store/profile"

export const ProfileForm = ({ firstName, lastName, phone }) => {
  const [form, setForm] = useState({ firstName, lastName, phone });
  const dispatch = useDispatch();
  const handleChangeForm = (e) => {
    const field = e.target.getAttribute('data-profile')
    setForm({
      ...form,
      [field]: e.target.value
    })
  }
  return (
    <>
      <h2>Profile Form</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input value={form.firstName} onChange={handleChangeForm} type="text" name="first-name" data-profile="firstName" placeholder="First Name" />
        <input value={form.lastName} onChange={handleChangeForm} type="text" name="last-name" data-profile="lastName" placeholder="Last Name" />
        <input value={form.phone} onChange={handleChangeForm} type="phone" name="phone" data-profile="phone" placeholder="Phone" />
        <button onClick={() => dispatch(updateProfile(form))}>Отправить</button>
      </form>
    </>
  )
}