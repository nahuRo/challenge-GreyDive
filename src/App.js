import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./components/Home";
import DisplayForm from "./components/DisplayForm";
import DisplayAnswers from "./components/DisplayAnswers";

import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<div className="bg-slate-100 min-h-screen">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/question" element={<DisplayForm />} />
						<Route path="/answer" element={<DisplayAnswers />} />
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
