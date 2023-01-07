import "./App.css";

import { FcDocument } from "react-icons/fc";

import { BsPalette } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

function App() {
	return (
		<div>
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
					<button className="p-1 border-b-2 border-red-300">Preguntas</button>
					<button className="p-1 border-b-2 border-red-300">Respuestas</button>
					<button className="p-1 border-b-2 border-red-300">Configuracion</button>
				</div>
			</div>
			<div className="bg-red-300 min-h-screen">
				<div className="bg-red-800 max-w-screen-lg  my-0 mx-auto">Main</div>
			</div>
		</div>
	);
}

export default App;
