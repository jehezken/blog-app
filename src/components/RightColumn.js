import {
	ActivitySquare,
	Archive,
	Box,
	Code,
	Github,
	Instagram,
	Rss,
	Youtube,
} from "lucide-react";
import React from "react";

export const RightColumn = () => {
	return (
		<div className="sticky top-6 hidden h-fit w-full xl:block">
			<div className="h-fit w-full rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
				<h3 className="my-4 font-semibold">90+Framer Shadows</h3>
				<p className="my-3 text-xs">
					Stop worrying about perfecting the shadows, just Copy & Paste from the 80+
					Shadows collection
				</p>
				<button
					type="button"
					className="h-full w-full rounded-md bg-neutral-700 p-2 text-xs"
				>
					Download
				</button>
				<hr className="my-6 h-px border border-neutral-800 text-neutral-300" />
				<h3 className="my-4 font-semibold">Featured in</h3>
				<ul className="my-6">
					<li className="mt-6 flex items-center gap-3 rounded-md p-2 hover:bg-neutral-950">
						<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950">
							<Github className="size-4" />
						</span>
						<p className="text-xs">9 Essential Javascript Functions</p>
					</li>
					<li className="mt-6 flex items-center gap-3 rounded-md p-2 hover:bg-neutral-950">
						<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950">
							<ActivitySquare className="size-4" />
						</span>
						<p className="text-xs">
							How to easily creat React animations: Framer Motion
						</p>
					</li>
					<li className="mt-6 flex items-center gap-3 rounded-md p-2 hover:bg-neutral-950">
						<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950">
							<Code className="size-4" />
						</span>
						<p className="text-xs">TailwindCSS tips</p>
					</li>
				</ul>
				<hr className="my-6 h-px border border-neutral-800 text-neutral-300" />
				<div className="flex items-center justify-center gap-4">
					<Rss className="size-4" />
					<Instagram className="size-4 cursor-pointer" />
					<Box className="size-4 cursor-pointer" />
					<Youtube className="size-4 cursor-pointer" />
					<Archive className="size-4 cursor-pointer" />
				</div>
			</div>
			<div className="mt-6 h-fit w-full rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
				<div className="relative h-32 w-full overflow-hidden rounded-lg">
					<img
						src="https://portfolioblog-teal.vercel.app/_next/image?url=%2Fgame.jpg&w=1080&q=75"
						alt="3D Game"
						className="absolute inset-0 h-full w-full object-cover object-center"
					/>
				</div>
				<h3 className="my-4 font-semibold">3D Games in Reactjs</h3>
				<button
					type="button"
					className="h-full w-full rounded-md bg-neutral-700 p-2 text-xs font-semibold"
				>
					Get Now @20% OFF
				</button>
			</div>
		</div>
	);
};
