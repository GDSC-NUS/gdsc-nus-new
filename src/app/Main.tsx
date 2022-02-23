import { ReactElement } from "react";
import ReactGA from "react-ga";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import { navbarLinks } from "constants/navbarLinks";
import { HACKFORGOOD, ROOT } from "constants/routes";
import Home from "routes/Home";
import HackForGood from "routes/HackForGood";

import "./Main.scss";

const redirectToHome = (): ReactElement<void, typeof Navigate> => (
  <Navigate to={"/"} />
);

const updateTracking = (): null => {
  ReactGA.pageview(window.location.pathname);
  return null;
};

const Main = (): ReactElement<void, "main"> => {
  const { pathname } = useLocation();

  return (
    <main id="main">
      <Navbar
        brandLink={ROOT}
        isBrandClickable={pathname !== ROOT}
        links={navbarLinks}
      />
      <div className="main-page">
        <Routes>
          <Route element={<Home />} path={ROOT} />
          <Route element={<HackForGood />} path={HACKFORGOOD} />
          <Route element={redirectToHome} />
          <Route element={updateTracking} path="/" />
        </Routes>
        <Footer />
      </div>
    </main>
  );
};

export default Main;
