import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css";

const Login = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onLogin();
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", background: "#b6cefc" }}
    >
      <div>
        <p className="loginHeading text-center">
          <strong>Msoft</strong>Pos
        </p>
        <form
          className="bg-white px-5 py-5 border border-dark rounded"
          onSubmit={onSubmitHandler}
        >
          <p className="text-muted text-center">Login to start your session</p>
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="Email" />
            <div class="input-group-append">
              <div class="input-group-text h-100">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
            <div class="input-group-append">
              <div class="input-group-text h-100">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary btn-block px-3 py-2">
              <strong>Sign In</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
