import newReq from './components/newReq';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import NoPage from './components/NoPage';
import Contribute from './components/Contribute';
import ViewRequests from './components/ViewRequests';
import NewRequest from './components/NewRequest';
import { useState } from 'react';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar setLoginStatus={setLoginStatus} loginStatus={loginStatus} />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>} />
          <Route path="profile" element={((loginStatus)?(<Profile />):(<NoPage />))} />
          <Route path="contribute" element={((loginStatus)?(<Contribute />):(<NoPage />))} />
          <Route path="view-request" element={((loginStatus)?(<ViewRequests />):(<NoPage />))} />
          <Route path="new-request" element={((loginStatus)?(<NewRequest />):(<NoPage />))} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
