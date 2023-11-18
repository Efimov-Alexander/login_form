import { useForm } from "react-hook-form"
import './aseets/styles/App.scss'
import './aseets/styles/null.css';
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCheckmark } from "react-icons/io";
import { TextInput } from "./components/TextInput";
import { PasswordInput } from "./components/PasswordInput";



const url = "https://jsonplaceholder.typicode.com/posts";
const emailValidate = {
	required: "Введите почту",
	pattern: {
		value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
		message: "Введите корректную почту"
	}
}


export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		mode: "onBlur"
	})


	const onSubmit = async data => {
		try {
			const response = await fetch(url, {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
			alert("Успех" + JSON.stringify(await response.json()))
		} catch (error) { alert("Ошибка:" + error) }
		reset()
	}

	return (
		<form className="login-form" noValidate onSubmit={handleSubmit(onSubmit)}>
			<div className="title">Вход</div>

			<div className="inputs-wrapper">
				<TextInput
					name={"email"}
					type={"email"}
					placeholder={"Почта"}
					validate={emailValidate}
					error={errors.email}
					svg={AiOutlineMail}
					register={register}
					key={"email"}
				/>
				<PasswordInput
					error={errors.password}
					register={register}
					key={"password"}
				/>
			</div>

			<div className="submit-wrapper">
				<label className="remember-checkbox-wrapper">
					<input className="remember-checkbox-hidden" type="checkbox" {...register("remember")} />
					<div className="remember-checkbox">
						<IoIosCheckmark color="#252525" className="remember-checkmark" />
					</div>
					Сохранить вход
				</label>
				<input className="input-submit" disabled={!isValid} type="submit" value="Войти" />
			</div>

		</form>
	)
}