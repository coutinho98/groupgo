import { useState } from 'react'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import SocialButton from '../../components/SocialButton'
import Divider from '../../components/Divider'
import { GoogleIcon, FacebookIcon, GithubIcon } from '../../components/icons/Icons'
import { Link, useNavigate } from 'react-router'
import { useReward } from 'react-rewards';
import Layout from '../../components/LoginPage/Layout'
import Card from '../../components/LoginPage/Card'
import Header from '../../components/LoginPage/Header'


const Login = ({ onLogin }) => {
   
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
                    login: formData.email,
                    password: formData.password,
                }),
            });
            console.log('status da resposta', response.status);
            if (response.ok) {
                const data = await response.json();

                console.log("dados da resposta", data);
                setTimeout(() => {
                    navigate('/home');
                }, 3000)

            } else {
                const errorData = await response.json();
                setError(errorData.message || 'falha')
            }
        } catch (err) {
            setError('error server')
        }
    }

    return (
        <Layout>
            <Card>
                <Header
                    title="Welcome to the GroupGo"
                    subtitle="Sign in to your account"
                />
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
                            <Link to="/forgotpassword" className='text-teal-600 font-bold hover:underline'>
                                forgot password?{" "}
                            </Link>
                        }
                    ></Input>
                    <Checkbox
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        label="remember me">
                    </Checkbox>
                    <Button
                        type="submit"> sign in
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
            </Card>
        </Layout>
    )
}


export default Login;