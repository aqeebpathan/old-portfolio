import Link from "next/link";
import { navLinks, typeformLink } from "../constant";
import ShinyButton from "./ShinyButton";

const Navbar = () => {
  return (
    <header>
      <nav className="max-w-[1008px] mx-auto flex justify-between items-center py-4 px-4 lg:px-0 ">
        <Link href="/" title="Mohmmed Aqeeb" className="leading-4">
          Aqe <br /> eb.
        </Link>
        <div className="flex gap-6 items-center">
          <ul className="flex gap-6 text-[14px]  ">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className="text-[#72727a] hover:text-[#d2d2d6] active:text-[#d2d2d6]"
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden sm:flex">
            <ShinyButton text={"Drop me a line"} href={typeformLink} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
