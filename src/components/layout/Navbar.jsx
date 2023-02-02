import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import publicRoutes from '@/constants/publicRoutes';

import Sidebar from './Sidebar';
import { logo, hamburger } from 'public/assets/icons';

const Navbar = () => {
  const { route } = useRouter();
  const [sidebar, setSidebar] = useState(false);

  const NavLink = ({ link, name }) => {
    return (
      <Link href={link}>
        <li
          className={`text-base hover:text-black ${
            route === link ? 'text-black transition' : 'text-gray-500 '
          }  list-none items-center relative flex hover:text-black active:black transition space-x-2 px-5`}
        >
          {name}
        </li>
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white lg:flex items-center justify-center whitespace-nowrap px-4">
      <nav className=" flex justify-between items-center py-3  container mx-auto">
        <Link href={publicRoutes.HOME}>
          <div className="cursor-pointer">
            <Image alt="RIL logo" src={logo} height={100} width={100} />
          </div>
        </Link>

        <ul className="hidden lg:flex lg:flex-1 justify-center  items-center">
          <NavLink link={publicRoutes.ABOUT} name="About" />
          <NavLink link={publicRoutes.PORTFOLIO} name="Portfolio" />
          <NavLink link={publicRoutes.RESUME} name="Resume" />
          <NavLink link={publicRoutes.CONTACT} name="Contact" />
        </ul>

        <div
          role="button"
          className="lg:hidden"
          onClick={() => setSidebar(true)}
        >
          <Image alt="hamburger" src={hamburger} height={25} width={25} />
        </div>
      </nav>

      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </header>
  );
};

export default Navbar;
