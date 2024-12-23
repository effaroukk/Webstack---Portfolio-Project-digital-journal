import Link from "next/link";
import Image from "next/image";

import Author from "../common/children/author";
import PostInfo from "../common/children/post-info";

export default function PopularBlogCard({ post }) {
	const { id, title, subtitle, category, published, img, author } = post;

	return (
		<div className="grid">
			<div className="image">
				<Link href={`/posts/${id}`}>
					<a>
						<Image
							src={img || "/images/img1.jpg"}
							width={600}
							height={400}
							alt={"latest-blog-image"}
							className="object-cover"
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col py-4">
				{category && published ? <PostInfo info={{ category, published }} /> : ""}
				<div className="title">
					<Link href={`/posts/${id}`}>
						<a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
							{title || "Unknown"}
						</a>
					</Link>
				</div>
				<p className="text-gray-500 py-3">{subtitle || "Unknown"}</p>
				{author && <Author author={author} />}
			</div>
		</div>
	);
}
