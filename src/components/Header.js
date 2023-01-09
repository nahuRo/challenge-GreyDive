import { Link, NavLink } from "react-router-dom";

import { FcDocument } from "react-icons/fc";

import { BsPalette } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const Header = ({ permise }) => {
	let pageButtonActive = {
		borderBottom: "2px solid #fecaca",
	};

	return (
		<div className="bg-white">
			<div className="flex justify-between">
				<div className="flex gap-x-2 sm:gap-x-12 items-center p-2 md:p-4">
					<Link to={"/"}>
						<FcDocument className="w-12 h-12" />
					</Link>
					<button>
						<BsFolder className="w-5 h-5" />
					</button>
					<button>
						<BsStar className="w-5 h-5" />
					</button>
				</div>
				<div className="flex gap-x-2 sm:gap-x-12 items-center p-2 md:p-4">
					<button>
						<BsPalette className="w-5 h-5" />
					</button>
					<button>
						<BsThreeDotsVertical className="w-5 h-5" />
					</button>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<NavLink
					className="p-1 hover:bg-red-100 hover:text-slate-500 hover:rounded-t-sm"
					to={"/"}
					style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
				>
					Form
				</NavLink>
				{permise && (
					<NavLink
						className="p-1 hover:bg-red-100 hover:text-slate-500 hover:rounded-t-sm"
						to={"/answer"}
						style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
					>
						Answers
					</NavLink>
				)}
			</div>
		</div>
	);
};

export default Header;
