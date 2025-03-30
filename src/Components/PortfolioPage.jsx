import { useContext, memo } from "react";
import SideBar from "./subComponents/SideBar";
import { StateContext } from "../App";
import Main from "./pageComponents/portfolio/Main";
import Modal from "./subComponents/Modal";
import ThemeToggle from "./subComponents/ThemeToggle";
import { toast, Toaster } from "sonner";

const PortfolioPage = () => {
  const { userData } = useContext(StateContext);
  return (
    <div className="h-auto lg:w-10/12 xl:w-8/12 lg:items-start mx-auto justify-center relative lg:flex">
      <ThemeToggle />
      <div
        className={`lg:w-1/4 h-full fixed w-full duration-0 top-0 lg:!pointer-events-auto left-0 z-10 lg:z-auto lg:sticky lg:top-0 lg:h-screen ${
          userData.isSideBarOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          backdropFilter: `blur(${userData.isSideBarOpen ? "2px" : "0px"})`,
        }}
      >
        <div
          className={`h-full bg-custom lg:scale-100 lg:!opacity-100 rounded-lg lg:rounded-none border border-zinc-600 lg:border-none ${
            userData.isSideBarOpen
              ? "opacity-100 scale-95"
              : "opacity-0 scale-100"
          }`}
        >
          <SideBar />
        </div>
      </div>
      <div className="lg:w-3/4 p-4 pt-2 lg:pt-4">
        <Main />
      </div>
      <Modal modalTitle={"Send Email"} />
      <Toaster
        richColors
        toastOptions={{
          classNames: {
            error: "bg-red-400",
            success: "text-green-400",
            warning: "text-yellow-400",
            info: "bg-blue-400",
          },
        }}
        position="top-right"
      />
    </div>
  );
};

export default memo(PortfolioPage);
