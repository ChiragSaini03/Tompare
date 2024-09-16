import { Outlet, Link, useNavigate } from "react-router-dom";

const NavBar = (props) => {
    const navigate = useNavigate();
    const logOut = () => {
        props.setLoginStatus(false);
        navigate("/")
    }

    // console.log(props);
  return (
    <>
     {(props.loginStatus)?(
      <nav className="bg-orange-200">
        <ul className="flex flex-row">
          <li className="text-xl font-semibold my-2 mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-semibold my-2 mx-4">
            <Link to="/contribute">Contribute</Link>
          </li>
          <li className="text-xl font-semibold my-2 mx-4">
            <Link to="/new-request">New Request</Link>
          </li>
          <li className="text-xl font-semibold my-2 mx-4">
            <Link to="/view-request">View Requests</Link>
          </li>
          <li className="text-xl font-semibold my-2 mx-4">
            <Link to="/Profile">Profile</Link>
          </li>
          <li className="text-xl font-semibold my-2 mx-4">
            <button onClick={logOut}>LogOut</button>
          </li>
        </ul>
      </nav>
     ):(
      <nav className="bg-orange-200">
        <ul className="flex flex-row">
          <li className="text-xl font-semibold my-2 mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-semibold my-2 mx-4">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
     )}
      

      <Outlet />
    </>
  )
};

export default NavBar;
