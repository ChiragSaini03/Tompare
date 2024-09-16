import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

    const logIn = () => {
      props.setLoginStatus(true);
      navigate("/");
    }

    return (
      <>
        {(props.loginStatus) ? (
          <>
            <h1>Already Logged In</h1>
          </>
        ) : (
          <>
            <h1>
              Login Here
            </h1>
            <button className = "bg-slate-400 m-2 px-2 py-1 rounded-lg" onClick={logIn}>
              Log In
            </button>
          </>
        )} 
      </>
    );
  };
  
  export default Login;
  