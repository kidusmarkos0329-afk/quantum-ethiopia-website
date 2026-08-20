import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import WhyQuantumPage from "./pages/WhyQuantumPage";
import ResearchPage from "./pages/ResearchPage";
import RepositoryPage from "./pages/RepositoryPage";
import LandscapePage from "./pages/LandscapePage";
import RoadmapPage from "./pages/RoadmapPage";
import NewsPage from "./pages/NewsPage";
import PartnersPage from "./pages/PartnersPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/why-quantum"
          element={<WhyQuantumPage />}
        />

        <Route
          path="/research"
          element={<ResearchPage />}
        />

        <Route
          path="/repository"
          element={<RepositoryPage />}
        />

        <Route
          path="/landscape"
          element={<LandscapePage />}
        />

        <Route
          path="/roadmap"
          element={<RoadmapPage />}
        />

        <Route
          path="/news"
          element={<NewsPage />}
        />

        <Route
          path="/partners"
          element={<PartnersPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;