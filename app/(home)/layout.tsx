import { SiteHeader } from "./_components/header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
};

export default HomeLayout;
