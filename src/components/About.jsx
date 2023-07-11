import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const About = ()=>{ 
    const navigate = useNavigate();
    return (
        <>
          <div className="home">
          <h1>Hey user.! this our about us  page </h1>
          <button className="btn" onClick={()=>navigate(-1)}>Go Back</button>
          </div>
        </>
      );
 }
export default About