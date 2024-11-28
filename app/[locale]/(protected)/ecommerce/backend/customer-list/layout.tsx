import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Oceanconnecting',
  description: 'Oceanconnecting Page'
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;