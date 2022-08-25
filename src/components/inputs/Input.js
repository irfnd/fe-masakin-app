// Components
import InputText from "components/inputs/InputText";
import InputEmail from "components/inputs/InputEmail";
import InputPassword from "components/inputs/InputPassword";
import InputCheckbox from "components/inputs/InputCheckbox";

export default function Input(props) {
	const { type, name, label, placeholder } = props;

	switch (type) {
		case "email":
			return <InputEmail name={name} label={label} placeholder={placeholder} />;
		case "password":
			return <InputPassword name={name} label={label} placeholder={placeholder} />;
		case "checkbox":
			return <InputCheckbox name={name} placeholder={placeholder} />;
		default:
			return <InputText name={name} label={label} placeholder={placeholder} />;
	}
}
