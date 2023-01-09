import { addDoc } from "firebase/firestore";

import data from "../services/db.json";
import { collRef } from "../services/firebase";

import InputBox from "./InputBox";

const DisplayForm = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();

		await addDoc(collRef, {
			full_name: e.target.full_name.value,
			email: e.target.email.value,
			birth_date: e.target.birth_date.value,
			country_of_origin: e.target.country_of_origin.value,
		});
	};

	return (
		<div className="max-w-screen-sm my-0 mx-auto py-6">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-evenly items-center my-0 mx-auto"
			>
				<div className="bg-white w-full my-0 mx-auto rounded-md">
					<div className="p-4">
						<h2>Ejemplo Google Forms</h2>
						{/* <p>Escribe tu nombre y elige una talla de camiseta.</p>
					<span className="bg-black h-px block"></span>
					<p>agussrg80@gmail.com (no compartidos) Cambiar de cuenta</p> */}
					</div>
				</div>

				{data.items.map((dat) => (
					<InputBox key={dat.label} {...dat} />
				))}
			</form>
		</div>
	);
};

export default DisplayForm;
