import { SyntheticEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Pages
import ErrorPage from "pages/ErrorPage";

// Hooks
import useSpellDetails from "hooks/useSpellDetails";

// Components
import Loader from "components/Loader";

const DetailedItemModal: React.FC = () => {
	const { id } = useParams<{ id?: string }>();
	const [details, detailsError] = useSpellDetails(`/api/spells/${id}`);
	const navigate = useNavigate();

	if (detailsError) {
		return <ErrorPage error={detailsError} />;
	}

	if (!details) {
		return <Loader />;
	}

	const closeModal = (eventToPrevent: SyntheticEvent | null) => {
		eventToPrevent?.preventDefault();
		navigate("/spells");
	};
	return (
		<>
			<div
				tabIndex={0}
				onKeyDown={(event) => event.key === "Escape" && closeModal(event)}
				onClick={(event) => closeModal(event)}
				id="defaultModal"
				role="dialog"
				className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full flex justify-center items-center h-screen">
				<div
					className="relative w-full max-w-2xl max-h-full"
					onClick={(e) => e.stopPropagation()}>
					{/* <!-- Modal content --> */}
					<div className="relative bg-red-700 rounded-lg shadow">
						{/* <!-- Modal header --> */}
						<div className="flex items-start justify-between p-5 border-b rounded-t">
							<h3 className="text-xl font-semibold text-white">
								{details.name.toUpperCase()}
							</h3>
							<button
								type="button"
								className="text-white bg-transparent hover:bg-gray-50 hover:text-red-500 rounded-full text-sm p-1.5 ml-auto inline-flex items-center"
								data-modal-hide="defaultModal"
								onClick={() => navigate("/spells")}>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"></path>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
						</div>
						{/* <!-- Modal body --> */}
						<div className="p-6">
							<div className="flex flex-col gap-2 mb-2">
								<h5 className="text-white font-bold text-lg">Description:</h5>
								<p className="text-base text-white">{details.desc}</p>
							</div>
							<div className="flex flex-col gap-2 mb-2">
								<h5 className="text-white font-bold text-lg">Classes:</h5>
								<ul className="flex gap-3">
									{details.classes.map(({ name }) => (
										<li
											key={name}
											className="text-base mt-1 text-red-00 bg-gray-100 px-2 py-1 rounded-full">
											{name}
										</li>
									))}
								</ul>
							</div>
							<div className="flex items-center gap-2 mb-2">
								<h5 className="text-white font-bold text-lg">Range:</h5>
								<p className="text-base text-white">{details.range}</p>
							</div>
							<div className="flex items-center gap-2 mb-2">
								<h5 className="text-white font-bold text-lg">Duration:</h5>
								<p className="text-base text-white">{details.duration}</p>
							</div>
							<div className="flex items-center gap-2 mb-2">
								<h5 className="text-white font-bold text-lg">Level:</h5>
								<p className="text-base text-white">{details.level}</p>
							</div>
							<div className="flex items-center gap-2 mb-2">
								<h5 className="text-white font-bold text-lg">School:</h5>
								<p className="text-base text-white">{details.school.name}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				modal-backdrop=""
				className="bg-gray-900 bg-opacity-50 fixed inset-0 z-40"></div>
		</>
	);
};

export default DetailedItemModal;
