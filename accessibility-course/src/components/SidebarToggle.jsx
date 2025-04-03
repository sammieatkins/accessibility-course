import { useEffect, useState } from "react";

export default function SidebarToggle() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    const onEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isOpen]);

  useEffect(() => {
    window.closeSidebar = () => setIsOpen(false);
  }, []);

  return (
    <button
      className="lg:hidden ml-4 mt-4 bg-transparent text-primary p-2 rounded-full"
      onClick={() => setIsOpen(true)}
      aria-label="Open menu"
    >
      <span className="material-symbols--menu-rounded text-primary text-2xl"></span>
    </button>
  );
}
