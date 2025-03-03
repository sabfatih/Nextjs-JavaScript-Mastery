import React from "react";

interface IChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: IChildren) => {
  return (
    <>
      <div>Navigate to top</div>
      {children}
    </>
  );
};

export default Layout;
