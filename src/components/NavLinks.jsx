"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({href, text }) => {
  const pathName = usePathname();
  
  return (
    <li>
      <Link href={href} className={pathName === href?"rounded-sm text-[var(--text-main)]  bg-[var(--accent)]/30 border border-transparent p-1":"text-[var(--text-muted)]"}>
       {text}
      </Link>
    </li>
  );
};

export default NavLinks;
// className="
//         w-11/12 text-center py-2 rounded-lg
//         transition-all duration-300

//         text-[var(--text-main)]
//         bg-transparent

//         hover:bg-[var(--accent)]/10
//         active:bg-[var(--accent)]/20

//         border border-transparent
//         hover:border-[var(--accent)]/30

//         focus:outline-none
//         focus:ring-2
//         focus:ring-[var(--accent)]
//       "