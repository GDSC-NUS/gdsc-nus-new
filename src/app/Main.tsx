import { ReactElement } from "react";
import ReactGA from "react-ga";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "components/navbar/Navbar";

import { useTheme } from "components/contexts/ThemeContext";
import { navbarLinks } from "constants/navbarLinks";
import { ROOT } from "constants/routes";
import Home from "routes/Home";

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
  const { isDark, setIsDark } = useTheme();

  return (
    <main id="main">
      <Navbar
        brandLink={ROOT}
        isBrandClickable={pathname !== ROOT}
        isDark={isDark}
        links={navbarLinks[pathname] ?? []}
        setIsDark={setIsDark}
      />
      <div className="main-page">
        <Routes>
          <Route element={<Home />} path={ROOT} />
          <Route element={redirectToHome} />
          <Route element={updateTracking} path="/" />
        </Routes>
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default Main;
