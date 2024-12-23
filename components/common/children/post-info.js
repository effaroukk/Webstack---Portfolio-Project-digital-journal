import Link from "next/link";

export default function PostInfo({ info }) {
	if (!info) return <h1>Info</h1>;

	const { category, published } = info;

	return (
		<div className="cat flex">
			<Link href={"/"}>
				<a className="font-semibold text-orange-600 hover:text-orange-700">
					{category || "Unknown"}
				</a>
			</Link>
			<p className="font-semibold text-gray-600 hover:text-gray-700">
				&nbsp; - {published || "Unknown"}
			</p>
		</div>
	);
}
