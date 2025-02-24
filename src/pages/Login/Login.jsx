import { useState } from 'react'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import SocialButton from '../../components/SocialButton'
import Divider from '../../components/Divider'
import { GoogleIcon, FacebookIcon, GithubIcon } from '../../components/icons/Icons'
import { Link, useNavigate } from 'react-router'
import { useReward } from 'react-rewards';


const Login = ({ onLogin }) => {
    const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti', {
        elementCount: 50,
        elementSize: 17,
        colors: ['#00bba7', '#ff53ac', '#5733FF', '#b79700'],
        position: 'fixed',
        fps: 60,
        spread: 70,
        lifetime: 400,
    });
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    });
    const navigate = useNavigate();
    const [error, setError] = useState(null)


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
        console.log('handleSubmit chamado')
        e.preventDefault();
        setError(null);
        try {
            const response = await fetch('https://groupgo.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });
            console.log('status da resposta', response.status);
            if (response.ok) {
                const data = await response.json();
                console.log("dados da resposta", data);
                setTimeout(() => {
                    confettiReward();
                    navigate('/home');
                }, 3000)
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'falhaa')
            }
        } catch (err) {
            setError('error server')
        }
    }

    return (
        <div className="flex min-h-screen bg-gray-50">

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
                                placeholder="email@hotmail.com"
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
                                    <a href='#' className='text-xs text-teal-600 font-bold hover:underline'>
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

                                disabled={isConfettiAnimating}
                                type="submit"> <span id="confettiReward" /> sign in
                            </Button>
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