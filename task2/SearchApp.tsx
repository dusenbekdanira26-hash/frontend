import React, { useState } from "react";
import type { User } from "../task1/types";
import UserCard from "../task1/UserCard";

const INITIAL_DATA: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@mail.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@mail.com", age: 28 },
  { id: 4, name: "Dana", email: "dana@mail.com", age: 22 },
  { id: 5, name: "Eve", email: "eve@mail.com", age: 27 },
];

const SearchApp = () => {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm("");
    setFilteredUsers(users);
  };


  return (
    <div>
      <input value={searchTerm} onChange={handleSearch} placeholder="Search user..." />
      <button onClick={handleClear}>Clear</button>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((u, i) => (
          <UserCard key={i} user={u}>
            <p>Status: Active</p>
          </UserCard>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchApp;




