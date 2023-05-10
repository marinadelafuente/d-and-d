type HeaderProps = {
	/** Function triggered by the filter dropdown to choose a level*/
	handleLevelChange: (ev: any) => void;
	/** Function to show all the saved spells */
	showSavedSpells: () => void;
	/** Boolean to know if we are showing the saved items */
	showSaved: boolean;
};

export default HeaderProps;
