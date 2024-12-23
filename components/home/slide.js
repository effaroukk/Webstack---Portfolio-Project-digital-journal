import Image from "next/image";
import Link from "next/link";

import Author from "../common/children/author";
import PostInfo from "../common/children/post-info";

export default function Slide({ post }) {
	const { id, title, subtitle, category, published, img, author } = post;

	return (
		<div className="grid md:grid-cols-2 gap-8 items-center">
			<div className="image">
				<Link href={`/posts/${id}`}>
					<a>
						<Image
							src={img || "/images/img1.jpg"}
							width={600}
							height={600}
							alt={"trending-blog-image"}
							className="object-cover"
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col">
				{category && published ? <PostInfo info={{ category, published }} /> : ""}
				<div className="title">
					<Link href={`/posts/${id}`}>
						<a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
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
