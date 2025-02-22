import { useState } from 'react'
import Sidebar from '../../components/Siderbar'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import SocialButton from '../../components/SocialButton'
import Divider from '../../components/Divider'
import { GoogleIcon, FacebookIcon, GithubIcon } from '../../components/icons/Icons'
import { Link } from 'react-router'

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
        //criar rotas para login
        e.preventDefault();
        console.log("log in", formData)
        onLogin();
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />

            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-sm p-6">
                    <h1 className="text-2x1 font-medium text-teal-700 text-center mb-2">Hi Shadys :)</h1>
                    <p className="text-sm text-gray-500 text-center mb-5">sign in to your account motherfucker</p>


                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            label="email"
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seuemail@hotmail.com"
                            required
                        ></Input>

                        <Input
                            label="password"
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='*********'
                            required
                            rightElement={
                                <a href='#' className='text-xs text-teal-600 hover:underline'>
                                    forgot password?
                                </a>
                            }
                        ></Input>

                        <Checkbox
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            label="remember me" />

                        <Button type="submit">sign in</Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-500">
                        dont have an account?{" "}
                        <Link to="/signup" className='text-teal-600 hover:underline'>
                            sign up
                        </Link>
                    </p>

                    <Divider text="or continue with" />

                    <div className="grid grid-cols-3 gap-3">
                        <SocialButton icon={<GoogleIcon />} onClick={() => console.log("google :):):)")}></SocialButton>
                        <SocialButton icon={<GithubIcon />} onClick={() => console.log("github :):):)")}></SocialButton>
                        <SocialButton icon={<FacebookIcon />} onClick={() => console.log("facetruck :):):)")}></SocialButton>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;