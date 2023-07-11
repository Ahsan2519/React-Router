import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="home">
      <h1>Hey user.! this our Home page</h1>
      <button className="btn" onClick={()=>navigate(1)}>Go Forward</button>
      </div>
    </>
  );
};
export default Home;
