import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setusers] = useState([]);
  const [name, setName] = useState('')
  useEffect(() => {
     // eslint-disable-next-line
    fechData();
  }, []);
  const fechData = async () => {
    const url = "https://dummyjson.com/user";
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setusers(data);
        // setName(data.users?.map(res=>res.firstName))
      } else {
        throw Error(`sorry ${response.status} bad request`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(name)

  return (
    <>
      <div className="user">
        <h1>This is Users Page</h1>
        { users.users?.map((element) => {
        return(
            <Link key={element.id} to = {`/users/${element.id}`} state = {element.age} >
                <h3>{element.id}</h3>
                <p>{element.firstName}{element.lastName}</p>
            </Link>
        )
      })}
     </div>

      
      
    </>
  );
};
export default User;
