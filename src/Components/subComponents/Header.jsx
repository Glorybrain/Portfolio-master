import React from "react";
import { IconItem } from "./Components";
import { StateContext } from "../../App";

const Header = () => {
	const { setUserData } = React.useContext(StateContext);

	function handleSideBarAction() {
		setUserData((prev) => {
			return {
				...prev,
				isSideBarOpen: !prev.isSideBarOpen,
			};
		});
	}

	return (
		<div className="items-center justify-between mb-2 flex lg:hidden">
      <h2 className="text-2xl font-bold text-[#222222] dark:text-white">Richard</h2>
			<button
				type="button"
				className="flex items-center justify-center rounded-full p-2 bg-transparent hover:bg-zinc-600/50"
				onClick={handleSideBarAction}>
				<IconItem icon={"eva:menu-fill"} className={"text-[1.7rem]"}></IconItem>
			</button>
		</div>
	);
};

export default Header;
