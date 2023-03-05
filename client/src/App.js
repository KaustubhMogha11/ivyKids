import { Routes as Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";
import React,{useState} from 'react'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateContact from "./pages/CreateContact";
import AllContact from "./pages/AllContact";
import EditContact from "./pages/EditContact";
import "./App.css";
const App = () => {
  const [cursorX,setCursorX]=useState()
  const [cursorY,setCursorY]=useState()
  window.addEventListener('mousemove',e=>{
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })
  return (
    <>
<div className="cursor" style={{
        left:cursorX + 'px',
        top:cursorY + 'px'
      }}></div>
     <div className="main-cont">
    <ToastContextProvider>
      <AuthContextProvider>
        <Layout>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateContact />} />
            <Route path="/mycontacts" element={<AllContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
    </div>
    </>
  );
};

export default App;
