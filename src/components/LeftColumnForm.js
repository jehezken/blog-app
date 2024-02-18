"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { LeftColumnToast } from "./LeftColumnToast";

export const LeftColumnForm = () => {
	const controls = useAnimation();
	const [email, setEmail] = React.useState("");
	const [toast, setToast] = React.useState(false);

	const isValidEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (isValidEmail(email)) {
			setEmail("");
			setToast(true);

			setTimeout(() => {
				setToast(false);
			}, 3000);
		} else {
			controls.start({
				x: 0,
				transition: {
					type: "spring",
					velocity: "600",
					stiffness: "5000",
					damping: 15,
				},
			});
		}
	};

	return (
		<div className="relative">
			<form
				onSubmit={handleSubmit}
				className="flex h-10 w-full items-center justify-between rounded-md bg-neutral-950 p-1"
			>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="name@email.com"
					className="h-full w-36 bg-transparent pl-2 text-xs placeholder:text-xs placeholder:text-neutral-300 focus:outline-none"
				/>
				<motion.button
					type="submit"
					animate={controls}
					className="h-full w-20 rounded-md bg-neutral-900 p-1 text-xs"
				>
					Subscribe
				</motion.button>
			</form>
			{toast && <LeftColumnToast />}
		</div>
	);
};
