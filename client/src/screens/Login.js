import React from "react";

const Login = () => {
  return (
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>

        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default Login;
