import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Users = () => {
  const params = useParams();
  const location = useLocation();
  const { value: initial } = useFetch(
    [],
    `https://dummyjson.com/user/${params.id}`
  );
  return (
    <div className="detail">
      <h1>{initial?.id}</h1>
      <p>{initial?.image}</p>
      <p>My age is {location.state}</p>
    </div>
  );
};
export default Users;
