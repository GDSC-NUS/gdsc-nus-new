import { lazy, ReactElement, Suspense, useEffect } from "react";
import { useTheme } from "components/contexts/ThemeContext";

import { about } from "data/about";
import {
  processSmallerCloudinaryUrl,
  usePreloadImages,
} from "utils/imageUtils";
import { BrowserRouter } from "react-router-dom";

const imagesToPreload = about.aboutItems
  .filter((item) => !item.isFavourite)
  .filter((item) => item.isShown !== false)
  .map((item) => item.image ?? "")
  .filter((item) => item.length > 0)
  .map((image) => processSmallerCloudinaryUrl(image));

const Main = lazy(() => import("./Main"));

const App = (): ReactElement<void, typeof Suspense> => {
  const { isDark } = useTheme();
  useEffect(() => {
    if (isDark) {
      document.documentElement.className = "dark";
    } else {
      document.documentElement.className = "";
    }
  }, [isDark]);

  usePreloadImages(imagesToPreload);
  console.log("runing");

  return (
    <Suspense fallback>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
