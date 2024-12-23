import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

export default function Social({ width }) {
	return (
		<div className={`${width && "w-96"} order-3 flex justify-center py-2`}>
			<div className="flex gap-6">
				<a href="https://facebook.com" rel="noopener noreferrer" target="_blank">
					<ImFacebook />
				</a>
				<a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
					<ImTwitter />
				</a>
				<a href="https://youtube.com" rel="noopener noreferrer" target="_blank">
					<ImYoutube />
				</a>
			</div>
		</div>
	);
}
