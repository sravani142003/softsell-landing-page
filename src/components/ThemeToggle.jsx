import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded shadow"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
