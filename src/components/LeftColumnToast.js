"use client";

import React from "react";
import { motion } from "framer-motion";

export const LeftColumnToast = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
				transition: {
					duration: 0.3,
					delay: 0.2,
					type: "spring",
					stiffness: 200,
				},
			}}
			className="absolute inset-0 flex h-10 w-full items-center justify-between rounded-md bg-neutral-950 p-1"
		>
			<p className="pl-2 text-xs font-medium">
				Your e-mail registration is completed.
			</p>
		</motion.div>
	);
};
