import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";


const passwordValidate = {
	required: "Введите пароль",
	minLength: {
		value: 6,
		message: "Минимум 6 символов"
	},
	maxLength: {
		value: 30,
		message: "Максимум 30 символов"
	},
	pattern: {
		value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
		message: "Введите корректный пароль"
	}
}

export const PasswordInput = ({ register, error }) => {

	const [passwordShown, setPasswordShown] = useState(false);

	return (
		<div className="input-wrapper">
			<IoLockClosedOutline className="input-svg" />
			<input className="input-text input-password" type={passwordShown ? "text" : "password"} placeholder="Пароль" {...register("password", {
				...passwordValidate,
			})} />
			{passwordShown ? <FaRegEyeSlash className="password-eye" onClick={() => setPasswordShown(false)} /> : <FaRegEye className="password-eye" onClick={() => setPasswordShown(true)} />}
			<div className="input-error"> {error && error.message}</div>
		</div>
	)
}