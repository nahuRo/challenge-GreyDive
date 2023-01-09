import { useState } from "react";

import { addDoc } from "firebase/firestore";

import data from "../services/db.json";
import { collRef } from "../services/firebase";

import InputBox from "./InputBox";

import { useNavigate } from "react-router-dom";
const DisplayForm = ({ setPermise }) => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		setLoading(true);

		e.preventDefault();

		await addDoc(collRef, {
			full_name: e.target.full_name.value,
			email: e.target.email.value,
			birth_date: e.target.birth_date.value,
			country_of_origin: e.target.country_of_origin.value,
		});

		setLoading(false);
		setPermise(true);

		navigate("/answer");
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center flex-col min-h-screen ">
				<span className="send_loader"></span>
				<h1 className="text-4xl font-bold mt-6 text-slate-700">Enviando...</h1>
			</div>
		);
	}

	return (
		<div className="max-w-screen-sm my-0 mx-auto">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-evenly items-center my-0 mx-auto"
			>
				<div className="bg-white w-full my-0 mx-auto rounded-md text-center">
					<div className="p-4 text-base md:text-2xl font-bold">
						<h2>The Form</h2>
					</div>
				</div>

				{data.items.map((dat) => (
					<InputBox key={dat.label} {...dat} />
				))}
			</form>
			{loading && (
				<div className="flex justify-center items-center flex-col absolute w-full h-full top-0 left-0 bg-red-100 bg-opacity-40">
					<div className="flex justify-center items-center flex-col bg-white bg-opacity-100 rounded-md w-1/4 h-1/4">
						<span className="send_loader"></span>
						<h1 className="text-4xl font-bold mt-6 text-slate-700">Enviando...</h1>
					</div>
				</div>
			)}
		</div>
	);
};

export default DisplayForm;
