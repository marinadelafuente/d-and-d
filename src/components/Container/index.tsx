import React from "react";

// Types
import type ContainerProps from "./types";

const Container = ({ children, showSaved }: ContainerProps) => {
	return (
		<div
			className={`mx-auto bg-[url('assets/DDimage.png')] w-full m-0 ${
				showSaved ? "h-full" : ""
			}`}>
			<div
				className={`backdrop-blur-lg pb-10 bg-gold/40 px-4 sm:px-10 ${
					showSaved ? "h-full" : ""
				}`}>
				{children}
			</div>
		</div>
	);
};
export default Container;
