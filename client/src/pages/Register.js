import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
import "./auth";
const Register = () => {
  const { toast } = useContext(ToastContext);
  const { registerUser } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !credentials.email ||
      !credentials.password ||
      !credentials.confirmPassword
    ) {
      toast.error("please enter all the required fields!");
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      toast.error("password do not match!");
      return;
    }

    const userData = { ...credentials, confirmPassword: undefined };
    registerUser(userData);
  };

  return (
    <>
    {/* <div class="form-box"> */}
      {/* <h3>Create your account</h3> */}

      <form onSubmit={handleSubmit} id="register" class="input-group-register">
      <div class="form-box2">
      <div class="button-box">
        <div id="btn"></div>
        <Link to="/login"><button type="button" onclick='login()' class="toggle-btn">Log In</button></Link>
        <Link to="/register"> <button type="button" onclick='register()' class="toggle-btn">Register</button></Link>
      </div>
       <div class="form-group">
          <label for="nameInput" class="form-label mt-4">
            Your Name
          </label>
          <input
            type="text"
            class="form-control"
            id="nameInput"
            name="name"
            value={credentials.name}
            onChange={handleInputChange}
            placeholder="name"
            required
          />
        </div>
        <div class="form-group">
          <label for="emailInput" class="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            placeholder="xyz@example.com"
            required
          />
        </div>
        <div class="form-group">
          <label for="passwordInput" class="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword" class="form-label mt-4">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={credentials.confirmPassword}
            onChange={handleInputChange}
            placeholder="Enter Password"
            required
          />
        </div>
        <input 
          type="submit"
          value="Register"
          class="submit-btn" 
        />
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </div> 
      </form>
      {/* </div> */}
    </>
  );
};

export default Register;
