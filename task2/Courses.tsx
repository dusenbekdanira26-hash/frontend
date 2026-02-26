import { Link, useSearchParams } from "react-router-dom";
import { courses } from "./data";

export default function Courses() {
    const [searchParams, setSearchParams] = useSearchParams();
    const sort = searchParams.get("sort") || "asc";

    const sortedCourses = [...courses].sort((a, b) => 
        sort === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

    return (
        <div>
            <h2>Courses</h2>
            <button onClick={() => setSearchParams({ sort: "asc" })}>Sort Ascending</button>
            <button onClick={() => setSearchParams({ sort: "desc" })}>Sort Descending</button>
            <ul>
                {sortedCourses.map((c) => (
                    <li key={c.id}>
                        <Link to={`/courses/${c.id}`}>{c.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}