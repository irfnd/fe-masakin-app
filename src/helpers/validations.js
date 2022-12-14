import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

export const LoginSchema = yup.object({
	email: yup.string().trim().lowercase().email("Email must be valid!").required("Email required!"),
	password: yup.string().trim().required("Password required!"),
	agreeTerms: yup.bool().required().oneOf([true], "Terms must be accepted!"),
});

export const RegisterSchema = yup.object({
	name: yup.string().trim().max(45, "Name must be less than 45 characters!").required("Name required!"),
	email: yup
		.string()
		.trim()
		.lowercase()
		.email("Email must be valid!")
		.max(60, "Email must be less than 60 characters!")
		.required("Email required!"),
	phoneNumber: yup
		.string()
		.trim()
		.max(16, "Phone number must be less than 16 numbers!")
		.required("Phone number required!")
		.matches(
			/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
			"Phone number must be valid!"
		),
	password: yup
		.string()
		.trim()
		.required("Password required!")
		.min(8, "Password must contain at least 8 characters!")
		.minLowercase(1, "Password must contain at least 1 lowercase character!")
		.minUppercase(1, "Password must contain at least 1 uppercase character!")
		.minNumbers(1, "Password must contain at least 1 number!")
		.minSymbols(1, "Password must contain at least 1 special character!"),
	confirmPassword: yup
		.string()
		.trim()
		.required("Confirm your password!")
		.oneOf([yup.ref("password"), null], "Password do not match!"),
	agreeTerms: yup.bool().required().oneOf([true], "Terms must be accepted!"),
});

export const AddRecipeSchema = yup.object({
	name: yup.string().trim().max(30, "Recipe name must be less than 35 characters!").required("Recipe name required!"),
	shortDesc: yup
		.string()
		.trim()
		.max(450, "Recipe description must be less than 450 characters")
		.required("Recipe description required!"),
});

export const AddCommentSchema = yup.object({
	comment: yup.string().trim().max(450, "Comment must be less than 450 characters").required("Comment required!"),
});
