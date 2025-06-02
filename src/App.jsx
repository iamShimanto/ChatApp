import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Group from "./pages/Group";
import Reset from "./pages/Reset";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset/>}/>
          <Route path="/" element={<Layout />}>
            <Route path="/chat" element={<Home />} />
            <Route path="/group" element={<Group />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
