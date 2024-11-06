import React from "react";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import { Login, SignUp, Home , About , Contact , Blogs , FAQs } from "./Pages";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  )
);
export default App;
