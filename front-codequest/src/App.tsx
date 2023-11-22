import React from "react";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "./responsive";
import { render } from "react-dom";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesSoftwarePage from "./pages/desktop/DesSoftwarePage";
import AnaliseDadosPage from "./pages/desktop/AnaliseDadosPage";
import DesWebPage from "./pages/desktop/DesWebPage";
import DesAplicativosPage from "./pages/desktop/DesAplicativosPage";
import SavePage from "./pages/desktop/SavePage";
import TestPage04 from "./pages/desktop/TestPage04";
import TestPage03 from "./pages/desktop/TestPage03";
import TestPage02 from "./pages/desktop/TestPage02";
import TestPage01 from "./pages/desktop/TestPage01";
import TestPage05 from "./pages/desktop/TestPage05";
import HomePage from "./pages/desktop/HomePage";
import SegTiPage from "./pages/desktop/SegTiPage";

window.React = React;

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/analisedados-page":
        title = "";
        metaDescription = "";
        break;
      case "/desweb-page":
        title = "";
        metaDescription = "";
        break;
      case "/desaplicativos-page":
        title = "";
        metaDescription = "";
        break;
      case "/save-page":
        title = "";
        metaDescription = "";
        break;
      case "/testpage04":
        title = "";
        metaDescription = "";
        break;
      case "/testpage03":
        title = "";
        metaDescription = "";
        break;
      case "/testpage02":
        title = "";
        metaDescription = "";
        break;
      case "/testpage01":
        title = "";
        metaDescription = "";
        break;
      case "/testpage05":
        title = "";
        metaDescription = "";
        break;
      case "/segti-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/testpage01" element={<TestPage01 />} />
      <Route path="/testpage02" element={<TestPage02 />} />
      <Route path="/testpage03" element={<TestPage03 />} />
      <Route path="/testpage04" element={<TestPage04 />} />
      <Route path="/testpage05" element={<TestPage05 />} />
      <Route path="/dessoftware" element={<DesSoftwarePage />} />
      <Route path="/analisedados" element={<AnaliseDadosPage />} />
      <Route path="/desweb" element={<DesWebPage />} />
      <Route path="/desaplicativos" element={<DesAplicativosPage />} />
      <Route path="/segti" element={<SegTiPage />} />
      <Route path="/save" element={<SavePage />} /> */
    </Routes>
  );
}
export default App;
