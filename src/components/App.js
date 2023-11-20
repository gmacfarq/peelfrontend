import { useEffect, useState } from 'react';
import userContext from './userContext';
import { BrowserRouter } from 'react-router-dom';
import '../stylesheets/App.css';
import '../stylesheets/StyleGuide.css';
import Nav from './Nav';
import Footer from './Footer';
import RoutesList from './RoutesList';
import PEELApi from '../api';
import { jwtDecode } from "jwt-decode";
import useLocalStorage from './useLocalStorage';
import Loader from './Loader';


function App() {

  const [token, setToken] = useLocalStorage("token", null);
  const [currUser, setCurrUser] = useState({
    data: null,
    isLoaded: false
  });

  /** On mount or token change fetch user data using token*/
  useEffect(function fetchUserOnMountAndTokenChange() {
    async function fetchUser() {
      const username = jwtDecode(token).username;
      PEELApi.token = token;
      try{
        const result = await PEELApi.getUser(username);
        setCurrUser({
          data: result,
          isLoaded: true,
        });
      }
      catch(err){
        alert(err)
        setCurrUser({
          data: null,
          isLoaded: true,
        });
      }
    }

    if (token) {
      fetchUser();
    } else {
      setCurrUser({
        data: null,
        isLoaded: true,
      });
    }

  }, [token]);

  /** Set token using API signup */
  async function signup(userData) {
    const result = await PEELApi.signupUser(userData);
    setToken(result);
  }

  /** Set token using API login */
  async function login(userData) {
    const result = await PEELApi.loginUser(userData);
    setToken(result);
  }

  /** Set token using API login */
  async function update(userData) {
    const result = await PEELApi.updateUser(userData);
    setCurrUser({
      data: result,
      isLoaded: true
    })
  }

  /** reset token and currUser */
  function logout() {
    PEELApi.token = "";
    setToken(null);
    setCurrUser({
      data: null,
      isLoaded: true,
    });
  }

  if (!currUser.isLoaded) return (<Loader />)

  return (
    <div className="App">
      <userContext.Provider value={{ currUser }}>
        <BrowserRouter>
          <Nav logout={logout} />
          <RoutesList currUser={currUser.data} signup={signup} login={login} update={update} />
          <Footer/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
