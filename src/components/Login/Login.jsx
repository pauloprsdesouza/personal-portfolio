import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/API";

const Login = function () {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState();
  const formLogin = React.createRef();
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

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
      document.cookie = "Token=" + response.data.token;
      navigate("/admin/posts");
    }).catch((erros) => {

    }).finally(() => {
      setLoading(false);
    })
  }

  function validateForm() {
    setIsFormValid(formLogin.current.checkValidity());
}

  return (
    <div className="container mt-3">
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
                  disabled={!isFormValid}>
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
