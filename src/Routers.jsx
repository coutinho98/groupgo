import { Route, Routes } from "react-router"

import Login from './pages/Login/Login'
import SignUp from "./pages/SignIn/SignIn"

export default function Routers() {
    return (
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/signup' element={<SignUp />} />
        </Routes>
    )
}