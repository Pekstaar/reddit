import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
        name,
      });

      alert("Registration Successful!");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("ERROR", error.message);
    }
  };

  return (
    <div>
      <div
        className="col-md-8  col-lg-5 mx-auto d-flex "
        style={{ alignItems: "center ", height: "100vh" }}
      >
        <form
          className="bg-light p-3"
          style={{ width: "100%" }}
          onSubmit={handleSubmit}
        >
          <h4 className="text-center">Register</h4>
          <div class="form-group my-2">
            <label for="exampleInputEmail1">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter full name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div class="form-group my-2">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div class="form-group my-2">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Sign-in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
