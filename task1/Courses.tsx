export default function Courses() {
    const courses = ["Math", "Physics", "programming"];
    return (
        <ul>
            {courses.map((c, i) => (
                <li key={i}>{c}</li>
            ))}
        </ul>
    );
}