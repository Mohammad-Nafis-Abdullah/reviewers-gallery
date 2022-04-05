import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Blogs from "./Components/Blogs";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Reviews from "./Components/Reviews";

function App() {
  const {pathname} = useLocation();
  useEffect(()=> {
    window.scrollTo(0,0);
  },[pathname]);

  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="" element={''}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
