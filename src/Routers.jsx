import { Route, Routes } from "react-router"

import Login from './pages/Login/Login'

export default function Routers() {
    return (
        <Routes>
            <Route exact path='/' element={<Login />} />
        </Routes>
    )
}