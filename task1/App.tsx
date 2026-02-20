import UserCard from "./UserCard";
import SkillList from "./SkillList";
import type { User, Skill } from "./types";

const sampleUser: User = {
  id: 1,
  name: "Alice",
  email: "alice@mail.com",
  age: 25,
};

const sampleSkills: Skill[] = [
  { id: 1, name: "React", level: "Expert" },
  { id: 2, name: "TypeScript", level: "Intermediate" },
];


const App = () => {
  return (
    <div>
      <UserCard user={sampleUser}>
        <p>Bio: Loves coding and teaching.</p>
      </UserCard>
      <SkillList skills={sampleSkills} />
    </div>
  );
};

export default App;
