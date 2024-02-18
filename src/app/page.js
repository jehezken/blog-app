"use client";

import React from "react";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
	return (
		<motion.main
			initial={{
				y: 10,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
				transition: {
					duration: 0.3,
					delay: 0.2,
					type: "spring",
					stiffness: 200,
				},
			}}
			className="h-auto w-full rounded-2xl py-6"
		>
			<div className="flex gap-4">
				<Code2 className="size-16 stroke-1" />
				<div className="flex flex-col">
					<h2 className="text-xl font-bold">
						Semicolon,{" "}
						<small className="text-sm font-medium opacity-70">A Dev Blog</small>
					</h2>
					<p className="my-3 max-w-[40ch] text-xs">
						I design and code beautifully simple things, and occasionally i write
						about them
					</p>
				</div>
			</div>
			<hr className="my-6 h-px border border-neutral-800 text-neutral-300" />
			<div className="mt-6 h-auto w-full overflow-hidden rounded-2xl bg-neutral-900">
				<div className="p-4 hover:bg-neutral-950">
					<span className="text-xs">July 22, 2023</span>
					<p className="text-sm font-semibold">
						Smooth Animation with React and Framer Motion
					</p>
				</div>
				<div className="p-4 hover:bg-neutral-950">
					<span className="text-xs">July 22, 2023</span>
					<p className="text-sm font-semibold">
						Smooth Animation with React and Framer Motion
					</p>
				</div>
				<div className="p-4 hover:bg-neutral-950">
					<span className="text-xs">July 22, 2023</span>
					<p className="text-sm font-semibold">
						Smooth Animation with React and Framer Motion
					</p>
				</div>
			</div>
			<div className="mt-6 h-auto w-full overflow-hidden rounded-2xl bg-neutral-900">
				<div className="flex items-center gap-4 p-4 hover:bg-neutral-950">
					<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md">
						<img
							src="https://portfolioblog-teal.vercel.app/_next/image?url=%2Fpic.jpg&w=1080&q=75"
							alt="Portfolio"
							className="absolute inset-0 h-full w-full object-cover object-center"
						/>
					</div>
					<div>
						<span className="text-xs">July 22, 2023</span>
						<p className="text-sm font-semibold">
							Smooth Animation with React and Framer Motion
						</p>
					</div>
				</div>
				<div className="flex items-center gap-4 p-4 hover:bg-neutral-950">
					<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md">
						<img
							src="https://portfolioblog-teal.vercel.app/_next/image?url=%2Fpic.jpg&w=1080&q=75"
							alt="Portfolio"
							className="absolute inset-0 h-full w-full object-cover object-center"
						/>
					</div>
					<div>
						<span className="text-xs">July 22, 2023</span>
						<p className="text-sm font-semibold">
							Smooth Animation with React and Framer Motion
						</p>
					</div>
				</div>
				<div className="flex items-center gap-4 p-4 hover:bg-neutral-950">
					<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md">
						<img
							src="https://portfolioblog-teal.vercel.app/_next/image?url=%2Fpic.jpg&w=1080&q=75"
							alt="Portfolio"
							className="absolute inset-0 h-full w-full object-cover object-center"
						/>
					</div>
					<div>
						<span className="text-xs">July 22, 2023</span>
						<p className="text-sm font-semibold">
							Smooth Animation with React and Framer Motion
						</p>
					</div>
				</div>
			</div>
		</motion.main>
	);
}
