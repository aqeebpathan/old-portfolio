import Link from "next/link";
import { footerLinks } from "../constant";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="max-w-[1008px] mx-auto w-full flex justify-between text-xl md:text-2xl">
        <p>©{year}</p>
        <ul className="flex gap-8">
          {footerLinks.map((link, i) => (
            <li key={i} className="hover:text-[#d2d2d6] text-[#72727a]">
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
