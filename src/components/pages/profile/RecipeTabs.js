// Styles + Icons
import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

// Components + Images
import MyRecipeTab from "components/pages/profile/MyRecipeTab";
import LikedRecipeTab from "components/pages/profile/LikedRecipeTab";
import SavedRecipeTab from "components/pages/profile/SavedRecipeTab";

export default function RecipeTabs() {
	const tabsFitted = useBreakpointValue({ base: true, md: false });

	return (
		<Flex w="full">
			<Tabs variant="unstyled" w="full" isFitted={tabsFitted}>
				<TabList display="flex" py={4} borderBottomWidth={1} borderColor="gray.200" gap={{ base: 0, md: 4 }}>
					<Tab
						fontSize={{ base: 13, sm: 14, md: 16, lg: 18 }}
						fontWeight="semibold"
						color="gray.500"
						_selected={{ color: "gray.800" }}
					>
						My Recipe
					</Tab>
					<Tab
						fontSize={{ base: 13, sm: 14, md: 16, lg: 18 }}
						fontWeight="semibold"
						color="gray.500"
						_selected={{ color: "gray.800" }}
					>
						Saved Recipe
					</Tab>
					<Tab
						fontSize={{ base: 13, sm: 14, md: 16, lg: 18 }}
						fontWeight="semibold"
						color="gray.500"
						_selected={{ color: "gray.800" }}
					>
						Liked Recipe
					</Tab>
				</TabList>

				<TabPanels pt={4}>
					<TabPanel>
						<MyRecipeTab />
					</TabPanel>
					<TabPanel>
						<SavedRecipeTab />
					</TabPanel>
					<TabPanel>
						<LikedRecipeTab />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
}
