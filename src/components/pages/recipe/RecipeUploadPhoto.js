import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import dropzoneOptions from "helpers/dropzone";
import Swal from "sweetalert2";

// Styles + Icons
import { Flex, Text, Icon, IconButton, Image } from "@chakra-ui/react";
import { BiImageAdd, BiX } from "react-icons/bi";

export default function RecipeUploadPhoto(props) {
	const { name, loading } = props;
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
			setValue(name, accepted);
		}
	};

	const onClear = () => {
		if (selectedFile?.preview) URL.revokeObjectURL(selectedFile.preview);
		setSelectedFile(null);
		setValue(name, null);
	};

	const { getRootProps, getInputProps, open } = useDropzone(dropzoneOptions(onDrop));

	return (
		<Flex direction="column" w="full" gap={4}>
			<Text fontSize={16} fontWeight="medium" color="gray.600">
				Recipe Photo
			</Text>
			<Flex
				bg="gray.100"
				borderWidth="1px"
				borderColor="gray.400"
				rounded="xl"
				h={{ base: 250, md: 300 }}
				w="full"
				gap={1}
				{...getRootProps()}
			>
				<input type="image" name={formName} aria-label={formName} onChange={onChange} {...getInputProps()} />
				{!selectedFile && (
					<Flex
						direction="column"
						justify="center"
						align="center"
						color="gray.400"
						boxSize="full"
						cursor="pointer"
						onClick={open}
					>
						<Icon as={BiImageAdd} fontSize={50} />
						<Text fontSize={14}>Add Photo</Text>
						<Text textAlign="center" fontSize={10}>
							Drag & drop photo here, or click to select photo
						</Text>
					</Flex>
				)}

				{selectedFile && (
					<Flex position="relative" boxSize="full">
						<Image boxSize="full" objectFit="cover" rounded="xl" src={selectedFile.preview} />
						<IconButton
							isLoading={loading}
							icon={<BiX size={32} />}
							position="absolute"
							top={-2}
							right={-2}
							color="white"
							bg="red.400"
							rounded="full"
							cursor="pointer"
							_hover={{ textDecoration: "none", bg: "red.500", color: "white" }}
							_active={{ bg: "red.600" }}
							onClick={() => onClear()}
						/>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
}
