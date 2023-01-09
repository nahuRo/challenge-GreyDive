import { NavLink } from "react-router-dom";

import { FcDocument } from "react-icons/fc";

import { BsPalette } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const Header = () => {
	let pageButtonActive = {
		borderBottom: "1px solid #000",
	};

	return (
		<div className="bg-white">
			<div className="flex justify-between">
				<div className="flex gap-x-12 items-center p-4">
					<FcDocument className="w-12 h-12" />
					<BsFolder className="w-5 h-5" />
					<BsStar className="w-5 h-5" />
				</div>
				<div className="flex gap-x-12 items-center p-4">
					<BsPalette className="w-5 h-5" />
					<BsThreeDotsVertical className="w-5 h-5" />
				</div>
			</div>
			<div className="flex justify-center items-center">
				<NavLink
					className="p-1"
					to={"/question"}
					style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
				>
					Pregunta
				</NavLink>
				<NavLink
					className="p-1"
					to={"/answer"}
					style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
				>
					Respuestas
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
