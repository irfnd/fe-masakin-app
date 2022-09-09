import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";

// Styles + Icons
import { Flex, Image, Text, Button, Icon } from "@chakra-ui/react";
import { BiX, BiCheck, BiCloudUpload } from "react-icons/bi";

// Components + Images
import ProfileImg from "assets/images/profile-placeholder.png";

export default function UserPhotoUpload(props) {
	const { photo, name, isUpload, setIsUpload, onDelete, loading } = props;
	const [selectedFile, setSelectedFile] = useState(null);

	const { register, setValue } = useFormContext();
	const { onChange, formName } = register(name);

	const onDrop = (accepted, rejected) => {
		if (rejected.length > 0) {
			const customError = rejected[0].errors.map(({ code }) => {
				const error = {};
				if (code) {
					if (code === "file-invalid-type") error.message = "File type must be .jpg, .jpeg, or .png";
					if (code === "file-too-large") error.message = "File must be less than 2Mb";
					return error;
				}
				return null;
			});
			Swal.fire({
				icon: "error",
				title: "Upload failed!",
				html: `${customError.map((el) => `<p>${el.message}</p>`).join(" ")}`,
			});
		} else {
			setSelectedFile({ ...accepted[0], preview: URL.createObjectURL(accepted[0]) });
			setValue("photo", accepted);
		}
	};

	const onClear = () => {
		if (selectedFile?.preview) URL.revokeObjectURL(selectedFile.preview);
		setSelectedFile(null);
		setValue("photo", null);
	};

	const allowedFile = { "image/jpg": [".jpg"], "image/jpeg": [".jpeg"], "image/png": [".png"] };
	const dropzoneOptions = {
		onDrop,
		multiple: false,
		maxFiles: 1,
		maxSize: 2 * 1000000,
		accept: allowedFile,
		noClick: true,
		noKeyboard: true,
	};
	const { getRootProps, getInputProps, open } = useDropzone(dropzoneOptions);

	return (
		<Flex
			position="relative"
			boxSize="140px"
			rounded="full"
			borderStyle={!photo && !selectedFile ? "dashed" : "solid"}
			borderWidth={2}
			borderColor="orange.400"
			{...getRootProps()}
		>
			<input type="image" name={formName} aria-label={formName} onChange={onChange} {...getInputProps()} />
			{photo && (
				<Flex>
					<Image rounded="full" boxSize="full" objectFit="cover" src={photo || ProfileImg} />
				</Flex>
			)}

			{selectedFile && (
				<Flex>
					<Image rounded="full" boxSize="full" objectFit="cover" src={selectedFile.preview} />
				</Flex>
			)}

			{!photo && !selectedFile && (
				<Flex boxSize="full" justify="center" align="center" rounded="full" cursor="pointer" onClick={open}>
					<Flex direction="column" justify="center" align="center" w="70%">
						<Icon as={BiCloudUpload} boxSize={8} />
						<Text textAlign="center" color="purple.900" fontSize={10}>
							Drag & drop photo here, or click to select photo
						</Text>
					</Flex>
				</Flex>
			)}

			{selectedFile && (
				<Button
					isLoading={loading}
					type="submit"
					position="absolute"
					bottom={0}
					right={0}
					bg="green.400"
					fontWeight="medium"
					color="white"
					_hover={{ textDecoration: "none", bg: "green.500", color: "white" }}
					_active={{ bg: "green.600" }}
					rounded="full"
					shadow="md"
					p={0}
				>
					<Icon as={BiCheck} boxSize={8} />
				</Button>
			)}

			<Button
				isLoading={loading}
				type="button"
				position="absolute"
				top={0}
				right={0}
				bg="red.400"
				fontWeight="medium"
				color="white"
				_hover={{ textDecoration: "none", bg: "red.500", color: "white" }}
				_active={{ bg: "red.600" }}
				rounded="full"
				shadow="md"
				p={0}
				onClick={() => {
					if (photo) {
						onClear();
						onDelete();
					}
					if (selectedFile) onClear();
					if (!selectedFile) setIsUpload(!isUpload);
				}}
			>
				<Icon as={BiX} boxSize={8} />
			</Button>
		</Flex>
	);
}
