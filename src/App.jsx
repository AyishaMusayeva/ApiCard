import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/router";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import NavBar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Info from "./components/Info";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={ROUTER.Home} exact element={<Home />} />
        <Route path={ROUTER.AddUser} element={<AddUser />} />
        <Route path={ROUTER.UpdateUser + "/:userId"} element={<UpdateUser />} />
        <Route path={ROUTER.Info + "/:userId"} element={<Info />} />

      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
