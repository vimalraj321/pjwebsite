import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./components/splitup/Navbar";
import "./App.css";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { Tutorial } from "./pages/Tutorial";
import Footer from "./components/splitup/Footer";
import { About } from "./pages/About";
import { Tution } from "./components/courses/tutioncourse";

const App = () => {
  return (
    <>
      <div className="background">
        <AppNavbar />
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/tution" element={<Tution/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default App;
