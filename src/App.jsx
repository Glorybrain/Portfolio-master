import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Loader from "./Components/subComponents/Loader.jsx";
const PortfolioPage = React.lazy(() => import("./Components/PortfolioPage.jsx"));
const Index = React.lazy(() => import("./index.jsx"));

export const StateContext = React.createContext();

const userContextData = {
	isSideBarOpen: false,
	isModalOpen: false,
	isBtnLoading: false,
};

export default function App() {
	const [userData, setUserData] = useState(userContextData);

	return (
		<StateContext.Provider value={{ userData, setUserData }}>
			<React.Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/portfolio" element={<PortfolioPage />} />
				</Routes>
			</React.Suspense>
		</StateContext.Provider>
	);
}
