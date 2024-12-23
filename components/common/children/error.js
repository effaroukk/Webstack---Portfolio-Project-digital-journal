import React from "react";

export default function Error({ message }) {
	return (
		<div className="container mx-auto md:px-20 py-10 px-8 bg-red-50 my-5">
			<h1 className="font-bold text-4xl text-center pb-5 text-red-500">Something went wrong.!!!</h1>
			{message && (
				<p className="text-center font-semibold text-gray-600 hover:text-gray-700">{message}</p>
			)}
		</div>
	);
}
