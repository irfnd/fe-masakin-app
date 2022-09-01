import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles + Icons
import "swiper/css/bundle";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

// Components + Images
import DiscoverImg from "assets/images/discover.jpg";

export default function PopularRecipeSlider() {
	const TotalRows = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 });

	return (
		<Swiper modules={[FreeMode]} spaceBetween={20} slidesPerView={TotalRows} freeMode style={{ width: "inherit" }}>
			{[...Array(10)].map((el, i) => (
				<SwiperSlide key={i}>
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
							Chicken Kare
						</Text>
						<Image src={DiscoverImg} rounded="2xl" alt="Photo Section 1" objectFit="cover" />
					</Flex>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
