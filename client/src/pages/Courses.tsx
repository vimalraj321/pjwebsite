import { CoursesContainer } from "../components/courses/CoursesContainer";
import { computerCoursesData } from "../data/course";

export const Courses = () => {
  return <CoursesContainer data={computerCoursesData} />;
};
