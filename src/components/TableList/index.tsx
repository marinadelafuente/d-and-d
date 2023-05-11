import { useParams } from "react-router-dom";

// Components
import ListItem from "../ListItem";

// Types
import TableListProps from "./types";

const TableList: React.FC<TableListProps> = ({ spells }) => {
	const { id } = useParams<{ id?: string }>();

	return (
		<div className="w-full overflow-scroll">
			<table
				className={`overflow-hidden rounded-lg text-left text-xs font-light w-full ${
					!!id && "blur-sm"
				}`}>
				<thead
					tabIndex={1}
					className="rounded border-b bg-red-600 text-sm text-white">
					<tr>
						<th scope="col" className="px-6 sm:px-8 py-4 w-fit sm:w-max">
							Name
						</th>
						<th scope="col" className="px-6 sm:px-8 py-4 w-fit sm:w-max">
							School
						</th>
						<th scope="col" className="px-6 sm:px-8 py-4 w-fit sm:w-max">
							Level
						</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{spells.map(({ name, url, index }, i) => {
						return (
							<ListItem
								key={index}
								id={index}
								{...{ name, url }}
								isEven={(i + 1) % 2 === 0}
							/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TableList;
