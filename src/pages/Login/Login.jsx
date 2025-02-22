import { useState } from 'react'
import Sidebar from '../../components/Siderbar'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import SocialButton from '../../components/SocialButton'
import Divider from '../../components/Divider'
import { GoogleIcon, FacebookIcon, GithubIcon } from '../../components/icons/Icons'
import { Link } from 'react-router'
import { useReward } from 'react-rewards';


const Login = ({ onLogin }) => {
    const { reward: balloonsReward, isAnimating: isBalloonsAnimating } = useReward('balloonsReward', 'balloons', {
        elementCount: 20,
        elementSize: 30,
        colors: ['#00bba7', '#ff53ac', '#5733FF', '#b79700'],
        position: 'fixed',
        fps: 60
    });
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
        console.log("log in :):)", formData)
        onLogin();
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />

            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <div className="w-full max-w-sm p-6">
                        <h1 className="text-4xl font-medium text-teal-700 text-center mb-2">Welcome to the GroupGo</h1>
                        <p className="text-2x1 text-gray-500 text-center mb-5">sign in to your account </p>

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

                            <Button
                                disabled={isBalloonsAnimating}
                                onClick={() => {
                                    balloonsReward();
                                }}
                                type="submit"> <span id="balloonsReward" /> sign in</Button>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-500">
                            dont have an account?{" "}
                            <Link to="/signup" className='text-teal-600 font-bold hover:underline'>
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
        </div>
    )
}


export default Login;