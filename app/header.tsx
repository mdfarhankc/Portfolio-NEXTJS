"use client";

import Logo from "@/components/Logo";
import ThemeToggle from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all px-3 py-2 dark:bg-inherit bg-orange-50",
        isScrolled && "bg-transparent backdrop-blur-md border-b"
      )}
    >
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex gap-x-2 items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
