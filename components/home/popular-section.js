import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Error from "../common/children/error";
import Spinner from "../common/children/spinner";
import PopularBlogCard from "./popular-blog-card";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import useFetcher from "../../hooks/useFetcher";

import "swiper/css";

export default function PopularSection() {
	SwiperCore.use([Autoplay]);

	const windowSize = useWindowDimensions();

	const { data, isLoading, isError } = useFetcher("popular");

	if (isLoading) return <Spinner />;
	if (isError) return <Error message={"While fetching popular posts."} />;

	return (
		<section className="container mx-auto md:px-20 py-10 px-8">
			<h1 className="font-bold text-4xl text-center py-10">Most Popular Posts</h1>

			<Swiper
				autoplay={{ delay: 5000 }}
				slidesPerView={windowSize.width > 900 ? 2 : 1}
				loop
				spaceBetween={50}
			>
				{data &&
					data.map(post => (
						<SwiperSlide key={post.id}>
							<PopularBlogCard post={post} />
						</SwiperSlide>
					))}
			</Swiper>
		</section>
	);
}
