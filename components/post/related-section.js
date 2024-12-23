import CategoryBlogCard from "../home/category-blog-card";
import Error from "../common/children/error";
import Spinner from "../common/children/spinner";

import useFetcher from "../../hooks/useFetcher";

export default function RelatedSection() {
	const { data, isLoading, isError } = useFetcher("posts");

	if (isLoading) return <Spinner />;
	if (isError) return <Error message={"While fetching categorized posts."} />;

	return (
		<section className="pt-20">
			<h1 className="font-bold text-3xl py-10">Related Posts</h1>
			{data.length > 0 &&
				data.slice(0, 3).map(post => (
					<div className="pb-5" key={post.id}>
						<CategoryBlogCard post={post} />
					</div>
				))}
		</section>
	);
}
