// Styles + Icons
import { Flex, Avatar, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// Components + Images
import FullLayout from "components/layouts/FullLayout";
import CustomContainer from "components/layouts/CustomContainer";
import ProfileImg from "assets/images/profile-placeholder.png";
import RecipeTabs from "components/pages/profile/RecipeTabs";

export default function Profile(props) {
	return (
		<FullLayout title="Profile">
			<CustomContainer>
				<Flex w="full" direction="column" align="center" gap={10} pt="140px" pb={{ base: 10, md: "60px" }}>
					<Flex direction="column" align="center" gap={6}>
						<Avatar boxSize="120px" borderWidth={2} borderColor="orange.400" src={ProfileImg} />
						<Text fontSize={18} fontWeight="semibold">
							Irfandi Iqbal Abimanyu
						</Text>
					</Flex>
					<RecipeTabs />
				</Flex>
			</CustomContainer>
		</FullLayout>
	);
}
