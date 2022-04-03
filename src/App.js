import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to='/home'></Navigate>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="" element={''}></Route>
        <Route path="" element={''}></Route>
        <Route path="" element={''}></Route>
        <Route path="" element={''}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
