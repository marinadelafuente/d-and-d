import { useEffect, useState } from "react";

// Types
import type { Spell } from "types/spell";
import type Response from "types/response";

const useSpells = (level: string): Response<Spell[]> => {
	const [spells, setSpells] = useState<Spell[]>();
	const [error, setError] = useState<Error>();

	useEffect(() => {
		const fetchSpells = async () => {
			try {
				const response = await fetch(
					`https://www.dnd5eapi.co/api/spells${
						level !== "All" ? `?level=${level}` : ""
					}`,
				);
				if (!response.ok) {
					setError(error as Error);
					throw new Error((await response.json()).error);
				}
				const data = await response.json();
				setSpells(data.results);
			} catch (error) {
				setError(error as Error);
			}
		};
		fetchSpells();
	}, [level]);
	return [spells, error];
};

export default useSpells;
