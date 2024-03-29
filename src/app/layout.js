import { Onest } from "next/font/google";
import "@/styles/globals.css";
import { LeftColumn } from "@/components/LeftColumn";
import { RightColumn } from "@/components/RightColumn";

const onest = Onest({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={onest.className}>
				<div className="min-h-screen w-full bg-neutral-950 text-neutral-300">
					<div className="mx-auto grid max-w-7xl gap-6 p-6 md:grid-cols-[18rem_1fr] xl:grid-cols-[20rem_minmax(37rem,_1fr)_auto]">
						<LeftColumn />
						{children}
						<RightColumn />
					</div>
				</div>
			</body>
		</html>
	);
}
