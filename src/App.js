import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { PrivateRoutes } from './utils/PrivateRoutes';
import { Login } from './pages/Login';
import { UserHome } from './pages/UserHome';import { Home } from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route element={<UserHome/>} path='/private/userhome'/>
          </Route>
          <Route element={<Home/>} path='/' exact/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
