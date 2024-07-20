import AboutUs from "../components/splitup/AboutUs";
import Testimonials from "../components/splitup/Testimonials";
import ContactUs from "../components/splitup/ContactUs";
import { CoursesContainer } from "../components/courses/CoursesContainer";
import { courseData } from "../data/course";
import CarouselFadeExample from "../components/splitup/Slide";
export const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <CarouselFadeExample />
      <AboutUs />

      <CoursesContainer data={courseData} />
      <Testimonials />

      <ContactUs />
    </>
  );
};
