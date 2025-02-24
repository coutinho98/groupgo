import { Route, Routes } from "react-router"

import Login from './pages/Login/Login'
import SignUp from "./pages/SignIn/SignIn"
import Home from "./pages/Home/Home"

export default function Routers() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}