import { useState } from 'react'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import SocialButton from '../../components/SocialButton'
import Divider from '../../components/Divider'
import { GoogleIcon, FacebookIcon, GithubIcon } from '../../components/icons/Icons'
import { Link, useNavigate } from 'react-router'
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
    const { setToken } = useAuth();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
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
            if (response.ok) {
                const data = await response.json();
                setToken(data.token)

                setTimeout(() => {
                    navigate('/perfil');
                }, 500)

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
                    title="Bem-vindo ao GroupGo"
                    subtitle="Entre na sua conta"
                />
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    ></Input>
                    <Input
                        label="Senha"
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='*********'
                        required
                        rightElement={
                            <Link to="/forgotpassword" className='text-teal-600 font-medium text-xs hover:underline'>
                                Esqueceu sua senha?{" "}
                            </Link>
                        }
                    ></Input>
                    <Checkbox
                        label="Lembre de mim"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                    >
                    </Checkbox>
                    <Button
                        type="submit"> Entrar
                    </Button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-500">
                    Não tem uma conta? {" "}
                    <Link to="/signup" className='text-teal-600 font-bold hover:underline'>
                        Inscreva-se
                    </Link>
                </p>
                <Divider text="ou continuar com" />
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