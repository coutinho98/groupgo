import { Route, Routes } from "react-router"

import Login from './pages/Login/Login'
import SignUp from "./pages/SignIn/SignIn"
import Perfil from "./pages/Perfil/Perfil"
import Home from "./pages/Home/Home"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
/* import TermsOfService from "./pages/Terms/terms"
import PrivacyPolicy from "./pages/Terms/privacy" */

export default function Routers() {
    return (
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/Home' element={<Home />} />
           {/*  <Route path='/terms' element={<TermsOfService />} />
            <Route path='/privacy' element={<PrivacyPolicy />} /> */}
        </Routes>
    )
}