"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="md:flex items-center gap-3 hidden ">
          {/* <Logo /> */}
          <p className="font-bold">ACME</p>
        </div>
        <button onClick={() => setOpen(!open)} className="cursor-pointer md:hidden">
          ☰
        </button>

        {/* mobile */}
        {open && (
          <div className="absolute top-16 left-0 w-[150px] flex flex-col items-center gap-4 py-4 md:hidden">
            {["Home", "All Tiles", "My Profile"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
          w-11/12 text-center py-1 rounded-lg
          transition-all duration-300

          bg-white/5
          hover:bg-white/10
          active:bg-white/20

          border border-transparent
          hover:border-white/20

          focus:outline-none focus:ring-2 focus:ring-indigo-400
        "
              >
                {item}
              </a>
            ))}
          </div>
        )}

        <ul className="hidden md:flex items-center gap-4">
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
        </ul>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <p >User</p>
            <Button className="btn-primary">Login</Button>
          </div>
          <ThemeChanger/>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
