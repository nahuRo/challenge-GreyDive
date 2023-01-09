import { onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { collRef } from "../services/firebase";

import { MdLocationOn } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";

import "../App.css";

const DisplayAnswers = () => {
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		onSnapshot(collRef, (snapshot) => {
			let myForms = [];
			snapshot.docs.forEach((doc) => {
				myForms.push({ id: doc.id, ...doc.data() });
			});
			setAnswers(myForms);
		});
	}, []);

	if (answers.length === 0) {
		return (
			<div className="flex justify-center items-center flex-col min-h-screen ">
				<span className="get_loader"></span>
				<h1 className="text-4xl font-bold mt-6 text-slate-700">Loading...</h1>
			</div>
		);
	}

	return (
		<div className="max-w-screen-sm my-0 mx-auto">
			<div className="bg-white w-full my-0 mx-auto rounded-md text-center">
				<div className="p-4 text-base md:text-2xl font-bold">
					<h2>Answer Chest</h2>
				</div>
			</div>
			{answers.map((ans) => (
				<div
					key={ans.id}
					className="bg-white w-full mt-5 rounded-md flex justify-evenly items-center flex-col overflow-hidden"
				>
					<div className="bg-red-200 w-full text-center">
						<h3 className="p-4">
							Answer from
							<span className="font-semibold"> {ans.full_name}</span>
						</h3>
					</div>

					<span className="w-full h-px bg-gray-400 "></span>

					<div className="bg-white w-full my-2 rounded-md ">
						<div className="p-4 flex flex-col ">
							<div className="flex items-center ">
								<MdOutlineDateRange className="text-2xl " />
								<h4 className="pl-2">{ans.birth_date}</h4>
							</div>
						</div>
					</div>
					<div className="bg-white w-full my-2 rounded-md ">
						<div className="p-4 flex flex-col ">
							<div className="flex items-center ">
								<MdOutgoingMail className="text-2xl" />
								<h4 className="pl-2">{ans.email}</h4>
							</div>
						</div>
					</div>
					<div className="bg-white w-full my-2 rounded-md ">
						<div className="p-4 flex flex-col ">
							<div className="flex items-center ">
								<MdLocationOn className="text-2xl" />
								<h4 className="pl-2">{ans.country_of_origin}</h4>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default DisplayAnswers;
