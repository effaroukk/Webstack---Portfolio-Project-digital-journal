import Link from "next/link";

import Social from "./children/social";

export default function Footer() {
	return (
		<footer className="bg-gray-50">
			<div className="container mx-auto flex justify-center py-12 text-center px-8">
				<div className="py-5">
					<h1 className="font-bold text-3xl">Subscribe to Newsletter</h1>
					<form className="pb-10 pt-5">
						<input
							type="email"
							name="newsletter"
							id="newsletter"
							placeholder="Enter your Email"
							className="input-text-transition w-full rounded-full text-gray-700 p-3 mb-5"
						/>
						<button
							type="submit"
							className="bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl"
						>
							Subscribe
						</button>
					</form>
					<Social width={false} />
					<p className="py-5 text-gray-400">Copyright &copy; 2022 All rights reserved</p>
					<Link href={"/"}>
						<a>
							<p className="text-gray-400">Terms & Conditions</p>
						</a>
					</Link>
				</div>
			</div>
		</footer>
	);
}
