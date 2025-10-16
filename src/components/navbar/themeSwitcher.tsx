import { useContext, useEffect, useState } from "react";
import { ConfigContext } from "../../utils/configContext";

function ThemeSwitcher() {
  const config = useContext(ConfigContext);
  const [mode, setMode] = useState<string>();

  useEffect(() => {
    function getPreferredColorScheme() {
      if (!window.matchMedia) {
        return;
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    const theme = localStorage.getItem("theme") ?? getPreferredColorScheme();
    if (!theme) return;
    setMode(theme);
  }, []);

  const toggleTheme = () => {
    const newMode = mode === "dark" ? config?.theme : "dark";
    if (!newMode) return;
    document.documentElement.setAttribute("data-theme", newMode);
    localStorage.setItem("theme", newMode);
    setMode(newMode);
  };

  const isDark = mode === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-8 rounded-full text-sm font-medium"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        // Sun icon - shown in dark mode
        <svg
          className="w-6 h-6 nav:w-4 nav:h-4 shrink-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 8a2 2 0 1 0 4 4"></path>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      ) : (
        // Moon icon - shown in light mode
        <svg
          className="w-6 h-6 nav:w-4 nav:h-4 shrink-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  );
}

export default ThemeSwitcher;
