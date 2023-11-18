export const TextInput = ({ type, placeholder, name, validate, register, error, ...props }) => {


	return (
		<div className="input-wrapper">
			{<props.svg className="input-svg" />}
			<input className="input-text" type={type} placeholder={placeholder} {...register(name, {
				...validate
			})} />
			<div className="input-error"> {error && error.message}</div>
		</div>
	)
}