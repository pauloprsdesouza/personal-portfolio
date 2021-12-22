import React, { useState } from "react";

const Login = function () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState();

    function loadingText() {
        return loading ? "Loging..." : "Login";
    }

    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title">Login</div>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                onChange={(event) => {
                                setEmail(event.target.value);
                            }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Senha</label>
              <input
                type="password"
                className="form-control"
                placeholder="name@example.com"
                onChange={(event) => {
                                setPassword(event.target.value);
                            }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {loadingText()}
            </button>
          </form>
        </div>
      </div>
    );
};

export default Login;
