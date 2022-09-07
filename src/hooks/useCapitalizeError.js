export default function useCapitalizeError(data) {
	if (data.details) return data.details.map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join("<br/>");
	return data.errors;
}
