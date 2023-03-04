import React, { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    !user && navigate("/login", { replace: true });
  }, []);
  return (
    <>
      <div className="jumbotron">
        <h1>Welcome {user ? user.name : null}</h1>
        <hr className="my-4" />
        <Link to="/create"> <a className="btn btn-info" href="#" role="button">
          Add Contacts
        </a></Link>
      </div>
    </>
  );
};

export default Home;
