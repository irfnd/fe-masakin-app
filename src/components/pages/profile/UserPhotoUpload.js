import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import useCapitalizeError from "hooks/useCapitalizeError";

// Styles + Icons
import { Flex, Avatar, Text, Button, Icon } from "@chakra-ui/react";
import { BiX, BiCheck, BiCloudUpload } from "react-icons/bi";

// Components + Images
import ProfileImg from "assets/images/profile-placeholder.png";

export default function UserPhotoUpload(props) {
	const { photo, name, isUpload, setIsUpload } = props;
	const [selectedFile, setSelectedFile] = useState(null);

	const { register, setValue } = useFormContext();
	const { onChange, formName } = register(name);

	const onDrop = (accepted, rejected) => {
		if (rejected.length > 0) {
			const customError = rejected[0].errors.map(({ code }) => {
				if (code === "file-invalid-type") return { message: "File type must be .jpg, .jpeg, or .png" };
				if (code === "file-too-large") return { message: "File must be less than 2Mb" };
				return null;
			});
			Swal.fire({
				icon: "error",
				title: "Upload failed!",
				text: `${customError.map((el) => el).join("<br/>")}`,
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
		<Flex position="relative" boxSize="140px" {...getRootProps()}>
			<input type="image" name={formName} aria-label={formName} onChange={onChange} {...getInputProps()} />
			{photo && (
				<Flex>
					<Avatar boxSize="full" borderWidth={2} borderColor="orange.400" src={ProfileImg} />
				</Flex>
			)}

			{selectedFile && (
				<Flex>
					<Avatar boxSize="full" borderWidth={2} borderColor="orange.400" src={selectedFile.preview} />
				</Flex>
			)}

			{!photo && !selectedFile && (
				<Flex
					boxSize="full"
					justify="center"
					align="center"
					borderStyle="dashed"
					borderWidth={2}
					borderColor="orange.400"
					rounded="full"
					cursor="pointer"
					onClick={open}
				>
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
					onClick={() => {
						setIsUpload(!isUpload);
						onClear();
					}}
				>
					<Icon as={BiCheck} boxSize={8} />
				</Button>
			)}

			<Button
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
					if (photo) setIsUpload(!isUpload);
					if (selectedFile) onClear();
					if (!selectedFile) setIsUpload(!isUpload);
				}}
			>
				<Icon as={BiX} boxSize={8} />
			</Button>
		</Flex>
	);
}
