import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password },navigate);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3 style={{ marginBottom: "40px" }}>Cocoon Admin Login</h3>
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
        Login
      </button>
      {isError && (
        <h6 style={{ color: "red", marginTop: "20px", fontFamily: "Poppins" }}>
          invalid username or user name
        </h6>
      )}
    </div>
  );
};

export default Login;
