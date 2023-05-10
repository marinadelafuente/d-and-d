// Types
import { SpellDetailed } from "types/spell";

const manageSpell = (spell: SpellDetailed): SpellDetailed[] => {
	let savedSpells: SpellDetailed[] = Array.from(
		JSON.parse(localStorage.getItem("savedSpells") || "[]"),
	);
	if (savedSpells.some((saved: SpellDetailed) => saved.index === spell.index)) {
		savedSpells = savedSpells.filter((item) => item.index !== spell.index);
	} else {
		savedSpells.push(spell);
	}
	localStorage.setItem("savedSpells", JSON.stringify(savedSpells));
	return JSON.parse(localStorage.getItem("savedSpells") || "[]");
};
export default manageSpell;
