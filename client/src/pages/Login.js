import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
import "./auth";
const Login = () => {
  const { toast } = useContext(ToastContext);
  const { loginUser } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!credentials.email || !credentials.password) {
      toast.error("please enter all the required fields!");
      return;
    }

    loginUser(credentials);
  };

  return (
    <>
      {/* <h3 >Login</h3> */}

      <form onSubmit={handleSubmit} id="login-form" class="login-page">
       <div class="form-box">
       <div class="button-box">
        <div id="btn"></div>
        <button type="button" onclick='login()' class="toggle-btn">Log In</button>
        <Link to="/register"> <button type="button" onclick='register()' class="toggle-btn">Register</button></Link>
      </div>
        <div className="form-group">
          <label htmlFor="emailInput" className="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            placeholder="xyz@gmail.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
            required
          />
        </div>
        <input type="submit" value="Login" class="submit-btn" />
        <p>
          Don't have an account ? <Link to="/register">Create One</Link>
        </p>
        </div>
      </form>
    </>
  );
};

export default Login;
