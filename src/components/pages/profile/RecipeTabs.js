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
			<Tabs variant="unstyled" w="full" isFitted={tabsFitted} isLazy>
				<TabList display="flex" py={4} borderBottomWidth={1} borderColor="gray.200" gap={{ base: 0, md: 4 }}>
					<Tab
						fontSize={{ base: 13, sm: 14, md: 16, lg: 18 }}
						fontWeight="semibold"
						color="gray.500"
						_selected={{ color: "purple.900" }}
					>
						My Recipe
					</Tab>
					<Tab
						fontSize={{ base: 13, sm: 14, md: 16, lg: 18 }}
						fontWeight="semibold"
						color="gray.500"
						_selected={{ color: "purple.900" }}
					>
						Liked Recipe
					</Tab>
					<Tab
						fontSize={{ base: 13, sm: 14, md: 16, lg: 18 }}
						fontWeight="semibold"
						color="gray.500"
						_selected={{ color: "purple.900" }}
					>
						Saved Recipe
					</Tab>
				</TabList>

				<TabPanels pt={4}>
					<TabPanel>
						<MyRecipeTab />
					</TabPanel>
					<TabPanel>
						<LikedRecipeTab />
					</TabPanel>
					<TabPanel>
						<SavedRecipeTab />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
}
