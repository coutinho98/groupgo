import { useState } from 'react'

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("log in", formData)
        onLogin();
    }

    return (
        <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm p-6">
                <h1 className="text-2x1 font-medium text-teal-700 text-center mb-2">Hi Shadys :)</h1>
                <p className="text-sm text-gray-500 text-center mb-5">sign in to your account motherfucker</p>
            </div>
        </div>
    )
}


export default Login;