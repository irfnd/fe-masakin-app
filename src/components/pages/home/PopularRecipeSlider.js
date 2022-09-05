import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import usePopularRecipe from "hooks/usePopularRecipe";

// Styles + Icons
import "swiper/css/bundle";
import { Box, Flex, Text, Image, Skeleton, AspectRatio } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

// Components + Images
import RecipePlaceholder from "assets/images/recipe-placeholder.png";

export default function PopularRecipeSlider() {
	const TotalRows = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 });
	const { data, loading } = usePopularRecipe();

	return (
		<Swiper modules={[FreeMode]} spaceBetween={20} slidesPerView={TotalRows} freeMode style={{ width: "inherit" }}>
			{data &&
				data?.map((el) => (
					<SwiperSlide key={el.id}>
						<Skeleton w="full" rounded="2xl" isLoaded={!loading}>
							<Flex position="relative" cursor="pointer">
								<Box
									position="absolute"
									bgGradient="linear(transparent, rgba(0, 0, 0, 0.5) 80%)"
									rounded="2xl"
									boxSize="full"
								>
									{" "}
								</Box>
								<Text position="absolute" bottom={0} color="white" fontSize={20} fontWeight="medium" mb={5} ml={5}>
									{el.name}
								</Text>
								<AspectRatio w="450px" ratio={1} zIndex={-1}>
									<Image
										src={el.photo || RecipePlaceholder}
										alt={el?.photoName || el?.name}
										boxSize="full"
										objectFit="cover"
										rounded="2xl"
									/>
								</AspectRatio>
							</Flex>
						</Skeleton>
					</SwiperSlide>
				))}
		</Swiper>
	);
}
