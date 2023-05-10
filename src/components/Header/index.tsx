// Components
import SaveButton from "components/SaveButton";

// Types
import type HeaderProps from "./types";

const Header: React.FC<HeaderProps> = ({
	handleLevelChange,
	showSavedSpells,
	showSaved,
}) => {
	const levels = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "All"];

	return (
		<div className=" pb-10">
			<img src="DDlogo.png" className="w-3/12" alt="logo" />
			<div className="flex items-end gap-5">
				<div>
					<label
						htmlFor="levels"
						className="block mb-2 text-sm font-medium text-white ">
						Choose a level
					</label>
					<select
						onChange={handleLevelChange}
						defaultValue={location.hash.substring(1)}
						id="levels"
						className="bg-gray-50 border text-gray-900 text-sm border-b-3 border-neutral-300 rounded-lg shadow focus:ring-red-500 focus:red-blue-500 block w-full p-1.5 pl-3 appearance-none bg-[url('download.svg')] bg-right bg-no-repeat bg-[length:30px_25px]">
						{levels.map((level) => (
							<option key={level} value={level}>
								{level}
							</option>
						))}
					</select>
				</div>
				<SaveButton onClick={showSavedSpells} isSelected={showSaved} />
			</div>
		</div>
	);
};

export default Header;
