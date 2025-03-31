import { useTheme } from "./useTheme";
import { Sun, Moon } from "lucide-react"; 

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 fixed bottom-5 right-6 text-gray-700 dark:text-gray-200 shadow-lg transition-all hover:scale-110 z-20"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
    </button>
  );
}