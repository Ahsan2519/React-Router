import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const User = () => {
  const { value: users } = useFetch([], "https://dummyjson.com/user");
  const [name, setName] = useState("");

  return (
    <>
      <div className="user">
        <h1>This is Users Page</h1>
        {users.users?.map((element) => {
          return (
            <Link
              key={element.id}
              to={`/users/${element.id}`}
              state={element.age}
            >
              <h3>{element.id}</h3>
              <p>
                {element.firstName}
                {element.lastName}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default User;
