import React from "react";

// Types
import type SaveButtonProps from "./types";

// Assets
import HeartIcon from "assets/HeartIcon";

const SaveButton = ({ onClick, isSelected, ...props }: SaveButtonProps) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className={`px-10 border-b-3 bg-white hover:border-red-500 hover:border-2 hover:border-b-7 rounded-lg shadow h-[43px] focus:ring-red-500 focus:red-blue-500 ${
				isSelected
					? " border-red-500 border-[3px]"
					: "border-neutral-300 border-1"
			} `}
			{...props}>
			<HeartIcon className="fill-red-500" />
		</button>
	);
};

export default SaveButton;
