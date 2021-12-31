import React, { useRef, useState } from "react";
import api from "../../../api/API";
import { autenticaded } from "../../../services/Auth";
import DangerMessage from "../../AlertMessage/DangerMessage";

const Login = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState();
  const formLogin = useRef();
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState([]);

  function loadingText() {
    return loading ? "Loging..." : "Login";
  }

  function login(event) {
    event.preventDefault();
    setLoading(true);

    api.put("/login", {
      email,
      password
    }).then((response) => {
      console.log(response);
      autenticaded(response.data.token, response.data.user.name);
      
      window.location.href = "/admin/posts";
    }).catch((errors) => {
      setErrors(["Login/Passwords is invalid. Please, check your credentials."]);
      setEmail("");
      setPassword("");
    }).finally(() => {
      setLoading(false);
    })
  }

  function validateForm() {
    setIsFormValid(formLogin.current.checkValidity());
  }

  return (
    <div className="container mt-3">
      <DangerMessage errors={errors} close={setErrors} />
      <form
        ref={formLogin}
        onSubmit={login}
        className="needs-validation was-validated"
        onChange={validateForm}
        noValidate>
        <div className="row align-items-center align-content-center">
          <div className="col-6 ms-auto me-auto ">
            <div className="card ">
              <div className="card-body">
                <div className="card-title">Login</div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    required
                    value={email}
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
                    required
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!isFormValid || loading}>
                  {loadingText()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
