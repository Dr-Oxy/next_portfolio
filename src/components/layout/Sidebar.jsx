import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import publicRoutes from '@/constants/publicRoutes';
import { closeBlack } from 'public/assets/icons';

const Sidebar = ({ sidebar, setSidebar }) => {
  const { route } = useRouter();

  const closeSideBar = () => {
    if (sidebar) {
      setSidebar(false);
    }
  };

  const NavLink = ({ link, name }) => {
    return (
      <Link href={link}>
        <li
          onClick={() => setSidebar(false)}
          className="list-none items-center relative flex hover:text-black active:black transition space-x-2 px-5"
        >
          <a
            className={`mt-8 font-semibold text-base hover:text-black ${
              route === link ? 'text-black transition' : 'text-gray-500 '
            } `}
          >
            {name}
          </a>
        </li>
      </Link>
    );
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 bottom-0 h-full  z-50  w-80 sm:w-96  text-white text-center  lg:hidden transition-all ease-in-out duration-300 ${
          sidebar ? 'right-0' : '-right-96'
        } `}
      >
        <div
          className="bg-white p-5 cursor-pointer absolute right-4"
          role="button"
          onClick={() => setSidebar(false)}
        >
          <Image
            alt="close icon"
            src={closeBlack}
            priority={true}
            height={20}
            width={20}
          />
        </div>

        <ul className="h-full flex flex-col justify-center items-center  bg-white">
          <NavLink link={publicRoutes.ABOUT} name="About" />
          <NavLink link={publicRoutes.PORTFOLIO} name="Portfolio" />
          <NavLink link={publicRoutes.RESUME} name="Resume" />
          <NavLink link={publicRoutes.CONTACT} name="Contact" />
        </ul>
      </div>
      {/* overlay */}
      {sidebar && (
        <div
          onClick={closeSideBar}
          className="h-full w-full z-20 bg-black/20 fixed top-0 right-0 bottom-0"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
