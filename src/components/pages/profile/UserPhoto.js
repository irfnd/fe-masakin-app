import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

// Styles + Icons
import { Flex, Avatar, Text, Button, Icon } from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";

// Components + Images
import UserPhotoUpload from "components/pages/profile/UserPhotoUpload";
import ProfileImg from "assets/images/profile-placeholder.png";

export default function UserPhoto(props) {
	const { user } = props;
	const [isUpload, setIsUpload] = useState(false);

	const methods = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<Flex direction="column" align="center" gap={6}>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} style={{ display: "flex" }}>
					{isUpload ? (
						<UserPhotoUpload photo={user.photo} name="photo" isUpload={isUpload} setIsUpload={setIsUpload} />
					) : (
						<Flex position="relative" boxSize="140px">
							<Flex>
								<Avatar boxSize="full" borderWidth={2} borderColor="orange.400" src={ProfileImg} />
							</Flex>
							<Button
								type="button"
								position="absolute"
								bottom={0}
								right={0}
								bg="white"
								fontWeight="medium"
								color="purple.900"
								_hover={{ textDecoration: "none", bg: "yellow.400", color: "white" }}
								_active={{ bg: "yellow.500" }}
								rounded="full"
								shadow="md"
								p={0}
								onClick={() => setIsUpload(!isUpload)}
							>
								<Icon as={BiEditAlt} boxSize={6} />
							</Button>
						</Flex>
					)}
				</form>
			</FormProvider>
			<Text fontSize={18} fontWeight="semibold" color="purple.900">
				{user.name}
			</Text>
		</Flex>
	);
}
