import { CourseCard } from "./CourseCard";
type Props = {
  data: {
    title: string;
    description: string;
    image: string;
    btnName: string;
    link: string;
    newTab: boolean;
  }[];
};
export const CoursesContainer = ({ data }: Props) => {
  return (
    <>
      <div className="mt-10">
        <h1 className="m-b-20 text-center h1" style={{ color: "#20c997" }}>
          Discover Our Courses
        </h1>
        <hr
          style={{
            borderTop: "5px solid green",
            width: "10%",
            margin: "10px auto",
          }}
        />
        <p className="text-center">Easy and effective Training and Learning</p>
      </div>
      <div className="course-con">
        <CourseCard data={data} />
      </div>
    </>
  );
};
