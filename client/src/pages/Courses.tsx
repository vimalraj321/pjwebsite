import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { courseData } from "../data/course";
import { Link } from "react-router-dom";

export const Courses = () => {
  return (
    <div>
      {courseData.map(({ title, description, image, btnName, link }, i) => (
        <Card style={{ width: "18rem" }} key={i}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={link} target={"_blank"}>
              <Button variant="primary">{btnName}</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
