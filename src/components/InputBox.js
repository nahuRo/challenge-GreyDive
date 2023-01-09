import React from "react";

const InputBox = ({ type, label, name, required, options }) => {
	if (type === "select") {
		return (
			<div className="bg-white w-full my-2 rounded-md ">
				<div className="p-3 md:p-5">
					<select className="w-full" name={name}>
						{options.map((opt) => (
							<option key={opt.value}>{opt.label}</option>
						))}
					</select>
				</div>
			</div>
		);
	}

	if (type === "submit") {
		return (
			<div className="bg-white w-full my-2 rounded-md">
				<input
					type={type}
					value={label}
					className="p-2 md:p-3 focus:outline-none w-full hover:bg-gray-700 hover:text-white rounded-md cursor-pointer bg-transparent"
				/>
			</div>
		);
	}

	if (type === "checkbox") {
		return (
			<div className="bg-white w-full my-2 rounded-md ">
				<div className="flex p-3 md:p-5">
					<input
						type={type}
						id={name}
						name={name}
						required={required}
						className="p-1 focus:outline-none border-b-2 bg-transparent"
						value={label}
					/>
					<label className="pl-4 text-sm md:text-base" htmlFor={name}>
						{label}
					</label>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-white w-full my-2 rounded-md ">
			<div className="flex flex-col p-3 md:p-5">
				<label className="text-sm md:text-base" htmlFor={name}>
					{label}
				</label>
				<input
					type={type}
					id={name}
					name={name}
					required={required}
					className="p-0 md:p-1 focus:outline-none border-b-2 border-gray-400 bg-transparent"
					placeholder={name === "email" ? "pepe@gmail.com" : "Pepe González"}
				/>
			</div>
		</div>
	);
};

export default InputBox;
