import React from "react";

const InputBox = ({ type, label, name, required, options }) => {
	if (type === "select") {
		return (
			<div className="bg-white w-full my-2 rounded-md ">
				<div className="p-6">
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
			<div className="bg-white w-full my-2 rounded-md ">
				<input
					type={type}
					value={label}
					className="p-1 focus:outline-none w-full hover:bg-gray-700 hover:text-white rounded-md cursor-pointer"
				/>
			</div>
		);
	}

	if (type === "checkbox") {
		return (
			<div className="bg-white w-full my-2 rounded-md ">
				<div className="p-6 flex">
					<input
						type={type}
						id={name}
						name={name}
						required={required}
						className="p-1 focus:outline-none border-b-2"
						value={label}
					/>
					<label className="pl-4" htmlFor={name}>
						{label}
					</label>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-white w-full my-2 rounded-md ">
			<div className="p-6 flex flex-col ">
				<label htmlFor={name}>{label}</label>
				<input
					type={type}
					id={name}
					name={name}
					required={required}
					className="p-1 focus:outline-none border-b-2 border-gray-400"
				/>
			</div>
		</div>
	);
};

export default InputBox;
