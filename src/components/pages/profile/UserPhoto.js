import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import useGetDataUser from "hooks/useGetDataUser";
import crypto from "helpers/crypto";
import profile from "helpers/axios/profile";
import useCapitalizeError from "hooks/useCapitalizeError";
import Swal from "sweetalert2";

// Styles + Icons
import { Flex, Image, Text, Button, Icon } from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";

// Components + Images
import UserPhotoUpload from "components/pages/profile/UserPhotoUpload";
import ProfileImg from "assets/images/profile-placeholder.png";

export default function UserPhoto() {
	const { user, token } = useGetDataUser();
	const [isUpload, setIsUpload] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const methods = useForm();

	const onSubmit = ({ photo }) => {
		const formdata = new FormData();
		formdata.append("photo", photo ? photo[0] : "");
		setLoading(true);
		profile
			.uploadPhoto(token.data.accessToken, formdata)
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: "Upload Successfully",
					text: "You have successfully update your photo",
				}).then((ok) => {
					if (ok.isConfirmed) {
						const getUser = { ...user.data, photo: res.results.photo, photoName: res.results.photoName };
						user.setUser(crypto.encryptData(JSON.stringify(getUser)));
						return navigate("/profile");
					}
					return null;
				});
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Failed to Login!",
					text: `${useCapitalizeError(err?.response?.data)}`,
				});
			})
			.finally(() => {
				setIsUpload(false);
				setLoading(false);
			});
	};

	const onDelete = () => {
		setLoading(true);
		Swal.fire({
			icon: "question",
			title: "Delete Photo",
			text: "Are you sure to delete photo?",
			showCancelButton: true,
			confirmButtonText: "Sure",
			cancelButtonText: "No",
		}).then((ok) => {
			if (ok.isConfirmed) {
				profile
					.deletePhoto(token.data.accessToken)
					.then((res) => {
						Swal.fire({
							icon: "success",
							title: "Delete Successfully",
							text: "You have successfully update your photo",
						}).then((ok2) => {
							if (ok2.isConfirmed) {
								const getUser = { ...user.data, photo: res.results.photo, photoName: res.results.photoName };
								user.setUser(crypto.encryptData(JSON.stringify(getUser)));
								return navigate("/profile");
							}
							return null;
						});
					})
					.catch((err) => {
						Swal.fire({
							icon: "error",
							title: "Failed to Delete Photo!",
							text: `${useCapitalizeError(err?.response?.data)}`,
						});
					})
					.finally(() => {
						setIsUpload(false);
						setLoading(false);
					});
			}
			return null;
		});
	};

	return (
		<Flex direction="column" align="center" gap={6}>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} style={{ display: "flex" }}>
					{isUpload ? (
						<UserPhotoUpload
							photo={user.data.photo}
							name="photo"
							isUpload={isUpload}
							setIsUpload={setIsUpload}
							onDelete={onDelete}
							loading={loading}
						/>
					) : (
						<Flex position="relative" boxSize="140px" rounded="full" borderColor="orange.400" borderWidth={2}>
							<Flex>
								<Image rounded="full" boxSize="full" objectFit="cover" src={user.data.photo || ProfileImg} />
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
