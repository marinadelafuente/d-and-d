type SaveButtonProps = {
	/** Click handler */
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	/** Booolean to know when the button is currently selected (showing saved items) */
	isSelected: boolean;
};

export default SaveButtonProps;
