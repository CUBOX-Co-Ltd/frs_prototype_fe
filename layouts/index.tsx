import React from 'react';

// components

import AdminNavbar from 'components/Navbars/AdminNavbar';
import Sidebar from 'components/Sidebar/Sidebar';
import HeaderStats from 'components/Headers/HeaderStats';
import FooterAdmin from 'components/Footers/FooterAdmin';

interface Props {
  children: React.ReactNode;
}
export default function Admin({ children }: Props) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">{children}</div>
      </div>
    </>
  );
}
