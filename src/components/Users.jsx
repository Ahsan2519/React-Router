import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  const params = useParams();
  console.log(params)
  const [initial, setinitial] = useState([]);
  const usersUrl = `https://dummyjson.com/user/${params.id}`;

  useEffect(() => {
      // eslint-disable-next-line
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const userResponse = await fetch(usersUrl);
      if (userResponse.status === 200) {
        const userData = await userResponse.json();
        console.log(userData);
        setinitial(userData);
      } else {
        throw Error(`sorry ${userResponse.status} bad request`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
        <div className="detail">
          <h1>{initial?.id}</h1>
          <p>{initial?.image}</p>
        </div>
  );
};
export default Users;
