import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./components/splitup/Navbar";
import "./App.css";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import TutorialPage from "./data/TutorialPage";
import Footer from "./components/splitup/Footer";

const App = () => {
  return (
    <>
      <AppNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tutorial" element={<TutorialPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
