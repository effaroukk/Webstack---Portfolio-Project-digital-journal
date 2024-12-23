export default function Spinner() {
	return (
		<div className="container mx-auto md:px-20 py-10 px-8">
			<div className="flex items-center justify-center ">
				<div className="w-20 h-20 border-t-4 border-b-4 border-orange-500 rounded-full animate-spin"></div>
			</div>
		</div>
	);
}
