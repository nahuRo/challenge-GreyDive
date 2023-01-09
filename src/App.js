import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";

import DisplayForm from "./components/DisplayForm";
import DisplayAnswers from "./components/DisplayAnswers";

import Footer from "./components/Footer";

function App() {
	const [permise, setPermise] = useState(false);
	return (
		<div>
			<BrowserRouter>
				<Header permise={permise} />
				<div className="bg-slate-100 py-6 md:px-0 px-3 relative">
					<Routes>
						<Route path="/" element={<DisplayForm setPermise={setPermise} />} />
						<Route
							path="/answer"
							element={
								!permise ? <Navigate replace to={"/"} /> : <DisplayAnswers />
							}
						/>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
