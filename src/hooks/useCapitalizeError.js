export default function useCapitalizeError(data) {
	if (data.errors) return data.errors;
	return data.details.map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join("<br/>");
}
