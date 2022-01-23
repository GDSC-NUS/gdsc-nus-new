import { lazy, ReactElement, Suspense, useEffect } from "react";
// import { Loading } from "@hanming.dev/components";
import { useTheme } from "components/contexts/ThemeContext";

import { project } from "data/projects";
import {
  processSmallerCloudinaryUrl,
  usePreloadImages,
} from "utils/imageUtils";
import { BrowserRouter } from "react-router-dom";

const imagesToPreload = project.projects
  .filter((project) => !project.isFavourite)
  .filter((project) => project.isShown !== false)
  .map((project) => project.image ?? "")
  .filter((image) => image.length > 0)
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
