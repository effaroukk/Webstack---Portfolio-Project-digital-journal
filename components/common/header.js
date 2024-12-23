import Link from "next/link";

import Social from "./children/social";

export default function Header() {
	return (
		<header className="bg-gray-50">
			<div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3 sm:px-3">
				<div className="md:flex-none w-96 order-2 flex justify-center py-4 sm:py-0">
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search..."
						className="input-text input-text-transition"
					/>
				</div>
				<div className="shrink w-80 order-1">
					<Link href="/">
						<a className="font-bold text-3xl">DigitalDiary</a>
					</Link>
				</div>
				<Social width />
			</div>
		</header>
	);
}
