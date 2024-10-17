import { AuthHeaderPage } from "./_components/header/auth-header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthHeaderPage />
      {children}
    </>
  );
};

export default AuthLayout;
