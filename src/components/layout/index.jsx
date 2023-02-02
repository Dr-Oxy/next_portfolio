import { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <main className="mt-[70px]">{children}</main>
    </div>
  );
};

export default Layout;
