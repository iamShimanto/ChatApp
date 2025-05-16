import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./layout/Index"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
