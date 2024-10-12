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
import { CookiesProvider, useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie] = useCookies(['loginStatus'])
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar cookies={cookies} setCookie={setCookie} setLoginStatus={setLoginStatus} loginStatus={loginStatus} />}>
            <Route index element={<Home />} />
            <Route path="login" element={((cookies.loginStatus)?(<NoPage />):(<Login setCookie={setCookie} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>))} />
            <Route path="profile" element={((cookies.loginStatus)?(<Profile />):(<NoPage />))} />
            <Route path="contribute" element={((cookies.loginStatus)?(<Contribute />):(<NoPage />))} />
            <Route path="view-request" element={((cookies.loginStatus)?(<ViewRequests />):(<NoPage />))} />
            <Route path="new-request" element={((cookies.loginStatus)?(<NewRequest />):(<NoPage />))} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
