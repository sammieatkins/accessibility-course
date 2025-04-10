// add clicking outside the sidenav to close it
// not scrollable on big screen zoomed in (scrollable with mouse) and should be
import { useEffect, useState } from "react";

export default function SidebarToggle() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e) => {
      const sidebarEl = document.getElementById("merged-sidebar");
      if (sidebarEl && !sidebarEl.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    window.closeSidebar = () => setIsOpen(false);
  }, []);

  return (
    <button
      className="sidebar-toggle-button"
      onClick={() => setIsOpen(true)}
      aria-label="Open menu"
    >
      <span className="material-symbols--menu-rounded text-primary text-2xl"></span>
    </button>
  );
}
