const allowedFile = { "image/jpg": [".jpg"], "image/jpeg": [".jpeg"], "image/png": [".png"] };
const dropzoneOptions = (onDrop) => ({
	onDrop,
	multiple: false,
	maxFiles: 1,
	maxSize: 2 * 1000000,
	accept: allowedFile,
	noClick: true,
	noKeyboard: true,
});

export default dropzoneOptions;
