import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Hooks
import useSpellDetails from "hooks/useSpellDetails";

// Helpers
import manageSpell from "helpers/manageSpell";

// Pages
import ErrorPage from "pages/ErrorPage";

// Components
import Loader from "components/Loader";

// Types
import type ListItemProps from "./types";
import type { SpellDetailed } from "types/spell";

// Assets
import HeartIcon from "assets/HeartIcon";

const ListItem: React.FC<ListItemProps> = ({ name, url, id, isEven }) => {
	const [savedSpells, setSavedSpells] = useState<SpellDetailed[]>(
		JSON.parse(localStorage.getItem("savedSpells") || "[]"),
	);

	const [spell, error] = useSpellDetails(url);
	const navigate = useNavigate();
	const checkEntry = () => navigate(`/spells/${id}`);

	if (error) {
		return <ErrorPage {...{ error }} />;
	}

	return (
		<>
			<tr
				aria-label={`Entry ${id}`}
				tabIndex={2}
				className="group cursor-pointer border-x-2 border-red-50 text-xs text-neutral-600 odd:bg-white even:bg-red-50 hover:bg-red-500 hover:text-white"
				onClick={checkEntry}
				onKeyDown={({ key }) =>
					(key === "Enter" || key === " ") && checkEntry()
				}>
				<td
					key={name}
					className="whitespace-nowrap px-6 sm:px-8 py-4 font-semibold w-fit sm:w-max">
					{spell?.name ?? <Loader />}
				</td>
				<td className="whitespace-nowrap px-6 sm:px-8 py-4 w-fit sm:w-max">
					{" "}
					{spell?.school.name ?? <Loader />}
				</td>
				<td className="whitespace-nowrap px-6 sm:px-8 py-4 w-fitsm:w-max">
					{spell?.level ?? <Loader />}
				</td>
				<td
					onClick={(ev) => {
						ev.stopPropagation();
					}}
					className={`whitespace-nowrap px-6 sm:px-8 py-3 ${
						isEven ? "group-hover:bg-red-50" : "group-hover:bg-white"
					} group-hover:bg-white border-s-2 border-red-300`}>
					<a
						onClick={(ev) => {
							ev.stopPropagation();
							spell && setSavedSpells(manageSpell(spell));
						}}
						type="button"
						className={"group/button text-red-700 font-bold rounded w-full"}>
						<HeartIcon
							className={`${
								spell &&
								savedSpells.some(
									(saved: SpellDetailed) => saved.index === spell.index,
								)
									? "fill-red-500 group-hover/button:scale-150"
									: "fill-neutral-400 group-hover/button:scale-150"
							} `}
						/>
					</a>
				</td>
			</tr>
		</>
	);
};

export default ListItem;
