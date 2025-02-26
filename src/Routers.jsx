import { Route, Routes } from "react-router"

import Login from './pages/Login/Login'
import SignUp from "./pages/SignIn/SignIn"
import Perfil from "./pages/Perfil/Perfil"

export default function Routers() {
    return (
        <Routes>
            <Route exact path='/' element={<Perfil />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}