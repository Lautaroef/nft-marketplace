import Header from "../header";
import Footer from "../footer";
import PageTitle from "../page-title";
import { useRouter } from "next/router";

function MainLayout({ children }: any) {
  const { pathname } = useRouter();
  return (
    <>
      <Header />
      {pathname !== "/" && <PageTitle />}
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
