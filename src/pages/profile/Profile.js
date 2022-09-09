// Styles + Icons
import { Flex } from "@chakra-ui/react";

// Components + Images
import FullLayout from "components/layouts/FullLayout";
import CustomContainer from "components/layouts/CustomContainer";
import UserPhoto from "components/pages/profile/UserPhoto";
import RecipeTabs from "components/pages/profile/RecipeTabs";

export default function Profile() {
	return (
		<FullLayout title="Profile">
			<CustomContainer>
				<Flex w="full" direction="column" align="center" gap={10} pt="140px" pb="120px">
					<UserPhoto />
					<RecipeTabs />
				</Flex>
			</CustomContainer>
		</FullLayout>
	);
}
