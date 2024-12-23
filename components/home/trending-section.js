import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Error from "../common/children/error";
import Spinner from "../common/children/spinner";
import Slide from "./slide";

import useFetcher from "../../hooks/useFetcher";

import "swiper/css";

export default function TrendingSection() {
	SwiperCore.use([Autoplay]);

	const { data, isLoading, isError } = useFetcher("trending");

	if (isLoading) return <Spinner />;
	if (isError) return <Error message={"While fetching trending posts."} />;

	return (
		<section className="py-6">
			<div className="container mx-auto md:px-20 px-8">
				<h1 className="font-bold text-4xl text-center pb-12">Trending</h1>
				<Swiper autoplay={{ delay: 3000 }} slidesPerView={1} loop>
					{data &&
						data.map(post => (
							<SwiperSlide key={post.id}>
								<Slide post={post} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</section>
	);
}
