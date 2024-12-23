import CategoryBlogCard from "./category-blog-card";
import Error from "../common/children/error";
import Spinner from "../common/children/spinner";

import useFetcher from "../../hooks/useFetcher";

export default function CategorySection() {
	const { data, isLoading, isError } = useFetcher("popular");

	if (isLoading) return <Spinner />;
	if (isError) return <Error message={"While fetching categorized posts."} />;

	if (data) {
		const travel = data.slice(0, 3);
		const business = data.slice(2, data.length + 1);

		return (
			<section className="container mx-auto py-16 md:px-20 px-8">
				<div className="grid lg:grid-cols-2 gap-2">
					<div className="item">
						<h1 className="font-bold text-4xl py-10">Business</h1>
						<div className="flex flex-col gap-6">
							{business.length > 0 &&
								business.map(post => <CategoryBlogCard key={post.id} post={post} />)}
						</div>
					</div>
					<div className="item">
						<h1 className="font-bold text-4xl py-10">Travel</h1>
						<div className="flex flex-col gap-6">
							{travel.length > 0 &&
								travel.map(post => <CategoryBlogCard key={post.id} post={post} />)}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
