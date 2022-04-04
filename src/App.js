import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="" element={''}></Route>
        <Route path="" element={''}></Route>
        <Route path="" element={''}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
