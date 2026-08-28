import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import WhyQuantumPage from "./pages/WhyQuantumPage.jsx";
import ResearchPage from "./pages/ResearchPage.jsx";
import RepositoryPage from "./pages/RepositoryPage.jsx";
import LandscapePage from "./pages/LandscapePage.jsx";
import RoadmapPage from "./pages/RoadmapPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import PartnersPage from "./pages/PartnersPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

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