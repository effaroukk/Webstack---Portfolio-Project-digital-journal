import Image from "next/image";
import { useRouter } from "next/router";

import Author from "../../components/common/children/author";
import Error from "../../components/common/children/error";
import Layout from "../../components/layout/layout";
import PostInfo from "../../components/common/children/post-info";
import RelatedSection from "../../components/post/related-section";
import Spinner from "../../components/common/children/spinner";

import useFetcher from "../../hooks/useFetcher";

export default function PostPage() {
	const router = useRouter();
	const { id } = router.query;

	const { data, isLoading, isError } = useFetcher(`posts/${id}`);

	if (isLoading)
		return (
			<Layout>
				<Spinner />
			</Layout>
		);
	if (isError)
		return (
			<Layout>
				<Error message={`While fetching post ${id}.`} />
			</Layout>
		);

	const { title, description, category, published, img, author } = data;

	return (
		<Layout>
			<div className="container mx-auto py-16 px-8 lg:w-1/2 md:w-2/3 w-full">
				<div className="flex justify-center">{author && <Author author={author} />}</div>
				<div className="post py-10">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-800 pb-8 text-center">
						{title || "Unknown"}
					</h1>
					<div className="pb-5">
						<Image
							src={img || "/images/img1.jpg"}
							width={900}
							height={600}
							alt={"trending-blog-image"}
							className="object-cover"
						/>
					</div>
					{category && published ? <PostInfo info={{ category, published }} /> : ""}
					<div className="text-gray-600 py-3 text-justify text-lg flex flex-col gap-4 pt-4">
						<p>{description || "Unknown"}</p>
					</div>
				</div>
				<RelatedSection />
			</div>
		</Layout>
	);
}
