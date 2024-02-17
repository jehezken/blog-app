import React from "react";

export const LeftColumnForm = () => {
	return (
		<form className="flex h-10 w-full items-center justify-between rounded-md bg-neutral-950 p-1">
			<input
				type="text"
				placeholder="name@email.com"
				className="h-full w-36 bg-transparent pl-2 text-xs placeholder:text-xs placeholder:text-neutral-300 focus:outline-none"
			/>
			<button
				type="submit"
				className="h-full w-20 rounded-md bg-neutral-900 p-1 text-xs"
			>
				Subscribe
			</button>
		</form>
	);
};
