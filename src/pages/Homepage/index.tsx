import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// Hooks
import useSpells from "hooks/useSpells";

// Pages
import ErrorPage from "pages/ErrorPage";

// Components
import TableList from "../../components/TableList";
import Header from "../../components/Header";
import Container from "components/Container";
import Loader from "components/Loader";

function Homepage() {
	const [, setLevel] = useState<string>(location.hash.substring(1));
	const [showSaved, setShowSaved] = useState<boolean>(false);

	const [spells, spellsError] = useSpells(
		location.hash ? location.hash.substring(1) : "0",
	);
	const navigate = useNavigate();

	if (spellsError) {
		return <ErrorPage error={spellsError} />;
	}

	if (!spells) {
		return <Loader />;
	}

	const savedSpells = JSON.parse(localStorage.getItem("savedSpells") || "[]");

	const showSavedSpells = () => {
		setShowSaved(!showSaved);
	};

	const handleLevelChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setLevel(ev.target.value);
		navigate(`#${ev.target.value}`);
	};
	return (
		<Container {...{ showSaved }}>
			<Header {...{ handleLevelChange, showSavedSpells, showSaved }} />
			<TableList spells={showSaved ? savedSpells : spells} />
			<div id="detail">
				<Outlet />
			</div>
		</Container>
	);
}

export default Homepage;
