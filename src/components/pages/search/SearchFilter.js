import { useEffect } from "react";
import useSearch from "hooks/useSearch";

// Styles + Icons
import {
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItemOption,
	MenuOptionGroup,
	MenuDivider,
} from "@chakra-ui/react";
import { BiFilterAlt, BiSearch } from "react-icons/bi";

export default function SearchFilter(props) {
	const { queryParams, setQueryParams, filter } = props;
	const { search, sort, order } = queryParams;
	const { mutate } = useSearch(filter);

	useEffect(() => {
		mutate();
	}, [queryParams]);

	const onChangeSearch = (e) => setQueryParams({ ...queryParams, search: e.target.value });
	const onChangeFilter = (name, value) => setQueryParams({ ...queryParams, [name]: value });

	return (
		<Flex gap={4}>
			<InputGroup>
				<InputLeftElement display="flex" justifyContent="center" alignItems="center" px={7} h="full">
					<Icon as={BiSearch} boxSize={7} color="gray.400" />
				</InputLeftElement>
				<Input
					type="text"
					placeholder="Search Recipe Name"
					_placeholder={{ color: "gray.400" }}
					fontSize={14}
					color="gray.600"
					borderColor="gray.400"
					focusBorderColor="yellow.400"
					_hover={{ borderColor: "gray.500" }}
					_focus={{ shadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)" }}
					rounded="xl"
					py={7}
					pl={12}
					value={search}
					onChange={onChangeSearch}
				/>
			</InputGroup>
			<Menu>
				<MenuButton
					as={IconButton}
					icon={<BiFilterAlt />}
					bg="yellow.400"
					fontSize={28}
					fontWeight="medium"
					color="white"
					_hover={{ bg: "yellow.500" }}
					_active={{ bg: "yellow.400" }}
					rounded="xl"
					h="auto"
					w={{ base: "30%", sm: "20%", md: "10%", lg: "10%", xl: "5%" }}
				/>
				<MenuList>
					<MenuOptionGroup value={sort} title="Sort by" type="checkbox">
						<MenuItemOption value="createdAt" onClick={() => onChangeFilter("sort", "createdAt")}>
							Latest Recipes
						</MenuItemOption>
						<MenuItemOption value="likedCount" onClick={() => onChangeFilter("sort", "likedCount")}>
							Most Liked Recipes
						</MenuItemOption>
						<MenuItemOption value="savedCount" onClick={() => onChangeFilter("sort", "savedCount")}>
							Most Saved Recipes
						</MenuItemOption>
					</MenuOptionGroup>
					<MenuDivider />
					<MenuOptionGroup value={order} title="Order by" type="radio">
						<MenuItemOption value="asc" onClick={() => onChangeFilter("order", "asc")}>
							Ascending
						</MenuItemOption>
						<MenuItemOption value="desc" onClick={() => onChangeFilter("order", "desc")}>
							Descending
						</MenuItemOption>
					</MenuOptionGroup>
				</MenuList>
			</Menu>
		</Flex>
	);
}
