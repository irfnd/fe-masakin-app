import moment from "moment-timezone";

export default function useDateFormat(date) {
	return moment(date).tz("Asia/Jakarta").format("D MMMM YYYY, HH:MM z");
}
