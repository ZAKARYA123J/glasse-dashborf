import { Metadata } from "next";

export const metadata:Metadata={
  title: 'Ocean connecting',
  description: 'Ocean connecting Dashboard '
}
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;