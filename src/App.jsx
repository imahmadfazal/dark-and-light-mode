import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      <h1 className="text-3xl font-bold mb-6">Dark Mode Toggle 🌙</h1>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black transition"
      >
        Toggle Theme
      </button>

      <p className="mt-4 text-lg">Current: {theme}</p>
    </div>
  );
}

export default App;
