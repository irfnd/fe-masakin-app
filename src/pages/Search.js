import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSearch from "hooks/useSearch";

// Styles + Icons
import { Flex, Heading, Text } from "@chakra-ui/react";

// Components + Images
import FullLayout from "components/layouts/FullLayout";
import CustomContainer from "components/layouts/CustomContainer";
import SearchFilter from "components/pages/search/SearchFilter";
import SearchRecipeList from "components/pages/search/SearchRecipeList";

export default function Search() {
	const [query] = useSearchParams();
	const [queryParams, setQueryParams] = useState({
		search: query.get("search") || "",
		sort: query.get("sort") || "",
		order: query.get("order") || "desc",
	});
	const filter = useMemo(() => updateQuery(queryParams), [queryParams]);
	const { data } = useSearch(filter);

	return (
		<FullLayout title="Search">
			<CustomContainer minH="100vh">
				<Flex
					direction="column"
					pt={{ base: "120px", md: "140px" }}
					pb={{ base: 10, md: "60px" }}
					px={{ base: 5, md: 0 }}
					gap={6}
				>
					<Heading
						textAlign={{ base: "center", md: "start" }}
						color="purple.800"
						fontSize={{ base: "2xl", sm: "3xl" }}
					>
						Search Recipe
					</Heading>
					<SearchFilter {...{ queryParams, setQueryParams, filter }} />
					<Flex align="center" justify="space-between">
						<Text
							color="purple.900"
							fontWeight="medium"
							fontSize={{
								base: "xl",
								sm: "2xl",
							}}
						>
							{queryParams.search === "" ? "All Recipe" : `Show results of "${queryParams.search}"`}
						</Text>
						<Text color="gray.500" fontWeight="medium" fontSize={16}>
							{data?.results?.data?.totalRows && `${data?.results?.data?.totalRows} Recipes`}
						</Text>
					</Flex>
					<SearchRecipeList recipes={data} />
				</Flex>
			</CustomContainer>
		</FullLayout>
	);
}

const updateQuery = (query) => {
	const { search, sort, order } = query;
	const filter = { search, sort, order };
	if (search === "") delete filter.search;
	if (sort === "") delete filter.sort;
	if (order === "") delete filter.order;
	return filter;
};
