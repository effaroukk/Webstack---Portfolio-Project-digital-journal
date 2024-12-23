import Link from "next/link";
import Image from "next/image";

import Author from "../common/children/author";
import PostInfo from "../common/children/post-info";

export default function CategoryBlogCard({ post }) {
	if (!post) return null;

	const { id, title, category, published, img, author } = post;

	return (
		<div className="flex gap-5">
			<div className="image flex flex-col justify-start">
				<Link href={`/posts/${id}`}>
					<a>
						<Image
							src={img || "/images/img1.jpg"}
							width={300}
							height={250}
							alt={"latest-blog-image"}
							className="object-cover rounded"
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col">
				{category && published ? <PostInfo info={{ category, published }} /> : ""}
				<div className="title">
					<Link href={`/posts/${id}`}>
						<a className="text-xl font-bold text-gray-800 hover:text-gray-600">
							{title || "Unknown"}
						</a>
					</Link>
				</div>
				{author && <Author author={author} />}
			</div>
		</div>
	);
}
