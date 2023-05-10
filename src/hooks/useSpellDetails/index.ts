import { useEffect, useState } from "react";

// Helpers
import isError from "helpers/isError";

// Types
import type { SpellDetailed } from "types/spell";
import type Response from "types/response";

const useSpellDetails = (url: string): Response<SpellDetailed> => {
	const [details, setDetails] = useState<SpellDetailed | undefined>(undefined);
	const [error, setError] = useState<Error | undefined>(undefined);

	useEffect(() => {
		const fetchDetails = async () => {
			try {
				const response = await fetch(`https://www.dnd5eapi.co${url}`);
				if (!response.ok) {
					setError(error as Error);
					throw new Error((await response.json()).error);
				}
				const data = await response.json();
				data && setDetails(data);
			} catch (error) {
				console.log("error", error);
				setError(error as Error);
			}
		};
		url ? fetchDetails() : null;
	}, [url]);
	return [details, error];
};

export default useSpellDetails;
