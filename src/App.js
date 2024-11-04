import React from 'react';
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements,Outlet } from 'react-router-dom'
import { Login, SignUp,Home } from './Pages'; 
import Layout from './Layout'


function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route element={<Layout />} >
      <Route path="home" element={<Home />} />
      </Route>
    </Route>
  )
);
export default App;
