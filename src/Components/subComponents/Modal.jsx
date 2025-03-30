import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StateContext } from "../../App";
import { IconItem } from "./Components";
import Input, { TextArea } from "./Input";
import LoadingBtnAnimation from "./LoadingBtnAnimation";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const senderDefaultDetails = {
  senderName: "",
  senderEmailAddress: "",
  message: "",
};

export default function Modal({ modalTitle }) {
  const { userData, setUserData } = useContext(StateContext);
  const [userInput, setUserInput] = useState(senderDefaultDetails);

  const closeModal = () => {
    setUserData((prev) => ({ ...prev, isModalOpen: false }));
  };

  const updateUserInput = (value, targetInput) => {
    let currentInput;
    switch (targetInput.trim().toLowerCase()) {
      case "name":
        currentInput = "senderName";
        break;
      case "email":
        currentInput = "senderEmailAddress";
        break;
      case "message":
      case "msg":
        currentInput = "message";
        break;
    }
    setUserInput((prev) => ({ ...prev, [currentInput]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    for (const value of Object.values(userInput)) {
      if (value.trim() === "") {
        toast.warning("Input cannot be empty");
        setUserData((prev) => ({ ...prev, isBtnLoading: false }));
        return;
      }
    }
    setUserData((prev) => ({ ...prev, isBtnLoading: true }));

    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EmailJsServiceIdKey,
        import.meta.env.VITE_EmailJsTemplateIdKey,
        e.target,
        import.meta.env.VITE_EmailJsPubKey
      );

      if (response.status === 200 && response.text === "OK") {
        toast.success("Your mail has been sent");
        setUserInput(senderDefaultDetails);
      } else {
        toast.error("Error", { description: response.text });
      }
    } catch (error) {
      toast.error(error, { description: "If this issue persists, reach out to me directly" });
    } finally {
      setUserData((prev) => ({ ...prev, isModalOpen: false, isBtnLoading: false }));
    }
  };

  return (
    <AnimatePresence>
      {userData.isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center min-h-screen backdrop-blur-sm z-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal} // Click outside to close
        >
          <motion.div
            className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-300 dark:border-zinc-700 shadow-lg overflow-hidden mx-4 w-full sm:w-10/12 md:w-7/12 lg:w-6/12 xl:w-4/12"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            onClick={(e) => e.stopPropagation()} 
          >
            <header className="flex items-center py-3 px-3 justify-between">
              <h3 className="text-xl text-[#222222] dark:text-white">{modalTitle ?? "Title"}</h3>
              <button
                type="button"
                className="flex items-center justify-center rounded-full p-1 bg-transparent text-zinc-900 dark:text-white hover:bg-zinc-300/50 dark:hover:bg-zinc-600/50"
                onClick={closeModal}
              >
                <IconItem icon={"si:close-line"} className={"text-[1.8rem]"} />
              </button>
            </header>

            <main className="p-4">
              <form onSubmit={sendEmail}>
                <div className="flex flex-col gap-y-4 mt-3">
                  <Input
                    label={"Name"}
                    others={{ required: true, autoComplete: "off", spellCheck: "false", value: userInput.senderName }}
                    name="from_name"
                    onAction={(e) => updateUserInput(e.target.value, "name")}
                    placeholder={"Enter your name or company"}
                  />
                  <Input
                    label={"Email Address"}
                    type={"email"}
                    others={{ required: true, value: userInput.senderEmailAddress }}
                    name="email_from"
                    onAction={(e) => updateUserInput(e.target.value, "email")}
                    placeholder={"Enter email address"}
                  />
                  <TextArea
                    label={"Message"}
                    others={{ required: true, autoComplete: "off", spellCheck: "false", value: userInput.message }}
                    onAction={(e) => updateUserInput(e.target.value, "message")}
                    name={"message"}
                    placeholder={"Type your message here ..."}
                  />
                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={userData.isBtnLoading}
                      className={`flex items-center gap-x-3 justify-center rounded-lg p-1 w-full h-12 px-4 relative border ${
                        userData.isBtnLoading
                          ? "bg-zinc-300 dark:bg-zinc-600 border-transparent hover:bg-zinc-300 dark:hover:bg-zinc-600 cursor-not-allowed"
                          : "cursor-pointer border-zinc-400 dark:border-slate-600 hover:bg-zinc-300/50 dark:hover:bg-zinc-600/50"
                      }`}
                    >
                      {userData.isBtnLoading ? (
                        <LoadingBtnAnimation />
                      ) : (
                        <>
                          <span className="text-sm text-[#222222] dark:text-white">Send Email</span>
                          <IconItem icon={"fa:send"} className={"opacity-80 text-[.9rem]"} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </main>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
