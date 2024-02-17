import React from "react";
import { LetfColumnAvatar } from "./LetfColumnAvatar";
import { LeftColumnForm } from "./LeftColumnForm";

export const LeftColumn = () => {
	return (
		<div className="top-6 h-fit w-full rounded-2xl border border-neutral-600 bg-neutral-900 p-6 xl:sticky">
			<LetfColumnAvatar />
			<h1 className="mt-3 text-lg font-black">Joscript Brown</h1>
			<a href="" className="mt-2 inline-block text-xs">
				contact@Joscriptbrown.dev 📧
			</a>
			<a href="" className="mt-1 inline-block text-xs">
				JoscriptBrown.com 🌍
			</a>
			<ul className="my-4 flex flex-wrap gap-1">
				<li className="flex h-6 w-fit items-center justify-center rounded-md bg-neutral-950 px-2">
					<p className="text-xs font-semibold">ReactJS</p>
				</li>
				<li className="flex h-6 w-fit items-center justify-center rounded-md bg-neutral-950 px-2">
					<p className="text-xs font-semibold">Git</p>
				</li>
				<li className="flex h-6 w-fit items-center justify-center rounded-md bg-neutral-950 px-2">
					<p className="text-xs font-semibold">NodeJS</p>
				</li>
				<li className="flex h-6 w-fit items-center justify-center rounded-md bg-neutral-950 px-2">
					<p className="text-xs font-semibold">Framer Motion</p>
				</li>
			</ul>
			<LeftColumnForm />
			<h3 className="my-4 font-semibold">Bio</h3>
			<p className="my-3 text-xs">
				The world of digital design and development is constantly evolving and so
				has my role over the last 7 years.
			</p>
			<ul className="my-6 flex items-center justify-between">
				<p className="flex items-center gap-1 text-xs">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 256 256"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M67.79,62.74a4,4,0,0,0-7.58,0l-40,120A4,4,0,0,0,24,188h80a4,4,0,0,0,3.79-5.26ZM29.55,180,64,76.65,98.45,180ZM204,76a48,48,0,1,0-48,48A48.05,48.05,0,0,0,204,76Zm-88,0a40,40,0,1,1,40,40A40,40,0,0,1,116,76Zm108,72H136a4,4,0,0,0-4,4v56a4,4,0,0,0,4,4h88a4,4,0,0,0,4-4V152A4,4,0,0,0,224,148Zm-4,56H140V156h80Z"></path>
					</svg>
					<span>7 Years as a Developer</span>
				</p>
				<p className="flex items-center gap-1 text-xs">
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 256 256"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M244,152a4,4,0,0,1-4,4H220v20a4,4,0,0,1-8,0V156H192a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,244,152ZM56,68H76V88a4,4,0,0,0,8,0V68h20a4,4,0,0,0,0-8H84V40a4,4,0,0,0-8,0V60H56a4,4,0,0,0,0,8ZM184,196H172V184a4,4,0,0,0-8,0v12H152a4,4,0,0,0,0,8h12v12a4,4,0,0,0,8,0V204h12a4,4,0,0,0,0-8ZM216.48,77.17,77.17,216.49a12,12,0,0,1-17,0L39.51,195.8a12,12,0,0,1,0-17L178.83,39.51a12,12,0,0,1,17,0L216.48,60.2A12,12,0,0,1,216.48,77.17ZM170.34,112,144,85.66,45.17,184.49a4,4,0,0,0,0,5.65l20.68,20.69a4,4,0,0,0,5.66,0Zm40.49-46.14L190.14,45.17a4,4,0,0,0-5.66,0L149.65,80,176,106.34l34.83-34.83A4,4,0,0,0,210.83,65.86Z"></path>
					</svg>
					<span>24 Projects</span>
				</p>
			</ul>
			<hr className="my-6 h-px border border-neutral-800 text-neutral-300" />
			<h3 className="my-4 font-semibold">Work History</h3>
			<ul className="my-6">
				<p className="my-3 flex justify-between gap-1">
					<span className="text-sm font-medium">
						Sr. Developer <br /> <small>Google</small>
					</span>
					<small className="text-[9px]">Sep 2016 - January 2020</small>
				</p>
				<p className="my-3 flex justify-between gap-1">
					<span className="text-sm font-medium">
						Jr. Creative Dev <br /> <small>Adobe</small>
					</span>
					<small className="text-[9px]">Sep 2016 - January 2020</small>
				</p>
			</ul>
		</div>
	);
};
