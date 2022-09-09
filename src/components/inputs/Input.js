// Components + Images
import InputText from "components/inputs/InputText";
import InputEmail from "components/inputs/InputEmail";
import InputPassword from "components/inputs/InputPassword";
import InputCheckbox from "components/inputs/InputCheckbox";
import InputTextarea from "components/inputs/InputTextarea";
import InputNested from "components/inputs/InputNested";
import InputNestedMultiple from "components/inputs/InputNestedMultiple";

export default function Input(props) {
	const { type, name, label, placeholder, isGray = false } = props;

	switch (type) {
		case "email":
			return <InputEmail name={name} label={label || null} placeholder={placeholder} isGray={isGray} />;
		case "password":
			return <InputPassword name={name} label={label || null} placeholder={placeholder} isGray={isGray} />;
		case "checkbox":
			return <InputCheckbox name={name} placeholder={placeholder} isGray={isGray} />;
		case "textarea":
			return <InputTextarea name={name} label={label || null} placeholder={placeholder} isGray={isGray} />;
		case "nested":
			return <InputNested name={name} label={label || null} isGray={isGray} />;
		case "nested-multiple":
			return <InputNestedMultiple name={name} label={label || null} isGray={isGray} />;
		default:
			return <InputText name={name} label={label || null} placeholder={placeholder} isGray={isGray} />;
	}
}
