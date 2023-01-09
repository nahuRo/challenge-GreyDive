import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";

import Home from "./components/Home";
import DisplayForm from "./components/DisplayForm";
import DisplayAnswers from "./components/DisplayAnswers";

import Footer from "./components/Footer";

function App() {
	const [permise, setPermise] = useState(false);
	console.log("app", permise);
	return (
		<div>
			<BrowserRouter>
				<Header permise={permise} />
				<div className="bg-slate-100 min-h-screen relative">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/question"
							element={<DisplayForm setPermise={setPermise} />}
						/>
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
