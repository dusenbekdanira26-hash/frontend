import { useParams } from "react-router-dom";
import { courses } from "./data";

export default function CourseDetail() {
  // useParams қайтарған объектіні деструктуризациялау
  const { id } = useParams<{ id: string }>();

  const course = courses.find((c) => c.id.toString() === id);

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.description}</p>
    </div>
  );
}
