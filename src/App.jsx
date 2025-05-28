import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Group from "./pages/Group";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/group" element={<Group/>}/>
          </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
