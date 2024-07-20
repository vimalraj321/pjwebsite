import { CoursesContainer } from "../components/courses/CoursesContainer";
import { tutorialcourse } from "../data/course";

export const Tutorial = () => {
  return <CoursesContainer data={tutorialcourse} />;
};
