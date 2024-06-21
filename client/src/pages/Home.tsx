import AboutUs from "../components/splitup/AboutUs";
import Testimonials from "../components/splitup/Testimonials";
import ContactUs from "../components/splitup/ContactUs";
import { CoursesContainer } from "../components/courses/CoursesContainer";
import { courseData } from "../data/course";
export const Home = () => {
  return (
    <>
      {/* <Header /> */}

      <AboutUs />

      <CoursesContainer data={courseData} />
      <Testimonials />

      <ContactUs />
    </>
  );
};
