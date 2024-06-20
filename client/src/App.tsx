import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./components/splitup/Navbar";
import "./App.css";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";

const App = () => {
  return (
    <>
      <AppNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
