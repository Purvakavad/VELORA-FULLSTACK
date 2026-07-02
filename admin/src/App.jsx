import Navbar from "./Component/Navbar"
import SideBar from "./Component/sidebar/SideBar"
import Add from './Pages/add/Add'
import List from './Pages/List/List'
import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Login from "./Pages/Login/Login"
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react"
import Order from "./Pages/oredr/Order"



export const backedURI = import.meta.env.VITE_BACKEND_URI


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])
  return <div><ToastContainer /> {

    token == "" ? <Login setToken={setToken} /> : (
      <div>
        <Navbar setToken={setToken} />
        <hr />
        <div className="main-conatiner">
          <SideBar />
          <hr />
          <div className="main">
            <Routes>
              <Route path="/add" element={<Add token={token} />}></Route>
              <Route path='/list' element={<List token={token} />}></Route>
              <Route path="/order" element={<Order token={token} />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    )}
  </div>
}

export default App
