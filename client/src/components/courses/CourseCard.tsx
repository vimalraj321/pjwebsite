import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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

export const CourseCard = ({ data }: Props) => {
  return (
    <>
      {data.map(({ title, description, image, btnName, link, newTab }, i) => (
        <Card style={{ width: "18rem" }} key={i}>
          <Card.Img variant="top" src={image} style={{ height: "200px", objectFit:"fill" }}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={link} target={newTab ? "_blank" : "_self"}>
              <Button variant="primary">{btnName}</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}{" "}
    </>
  );
};
