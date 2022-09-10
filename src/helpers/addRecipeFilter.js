export const getIngredients = (data) => {
	if (data.length > 0) {
		const arr = data.map((el) => (el.text.trim().length > 0 ? el.text : null)).filter((el) => Boolean(el));
		if (arr.length > 0) return arr.join("\n");
		return "";
	}
	return "";
};

export const getSteps = (data) => {
	if (data.length > 0) {
		const arr = data.map((el) => (el.step.trim().length > 0 ? el.step : null)).filter((el) => Boolean(el));
		if (arr.length > 0) return arr.join("\n");
		return "";
	}
	return "";
};

export const getVideos = (data) => {
	if (data.length > 0) {
		const arr = data
			.map((el) =>
				el.video.trim().length > 0
					? { name: `Step ${el.id}`, shordDesc: el.step, video: el.video, videoName: `Step ${el.id}` }
					: null
			)
			.filter((el) => Boolean(el));
		if (arr.length > 0) return arr;
		return "";
	}
	return "";
};
