import { useEffect, useState } from "react"
import { useReward } from 'react-rewards';
import toast, { Toaster } from "react-hot-toast"
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import SocialButton from '../../components/SocialButton'
import Divider from '../../components/Divider'
import { GoogleIcon, FacebookIcon, GithubIcon } from '../../components/icons/Icons'
import { Link } from 'react-router'
import Layout from '../../components/LoginPage/Layout'
import Card from '../../components/LoginPage/Card'
import Header from '../../components/LoginPage/Header'

const SignUp = () => {
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
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false
    })

    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const [passwordValidation, setPasswordValidation] = useState({
        length: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecial: false,
        passwordMatch: false
    })

    const validatePassword = (password, confirmPassword) => {
        const validation = {
            length: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSpecial: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
            passwordMatch: password === confirmPassword && password !== ''
        };
        setPasswordValidation(validation)
        return Object.values(validation).every(Boolean)
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validateUsername = (username) => {
        return username && username.length >= 5;
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name === 'password' || name === 'confirmPassword') {
            validatePassword(
                name === 'password' ? value : formData.password,
                name === 'confirmPassword' ? value : formData.confirmPassword
            )
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        const validations = {
            email: {
                test: () => validateEmail(formData.email),
                error: 'Please, enter a valid email address'
            },
            password: {
                test: () => validatePassword(formData.password, formData.confirmPassword),
                error: 'Password does not meet requirements'
            },
            agreeTerms: {
                test: () => formData.agreeTerms,
                error: 'You need to agree to the terms'
            },
            username: {
                test: () => validateUsername(formData.username),
                error: 'Username must be at least 5 characters'
            }
        };

        const newErrors = Object.entries(validations).reduce((errors, [field, { test, error }]) => {
            if (!test()) {
                errors[field] = error;
            }
            return errors;
        }, {});

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            Object.values(newErrors).forEach(errorMsg => {
                toast.error(errorMsg, {
                    duration: 3000,
                    position: 'top-center'
                })
            })
            return;
        }

        const loadingToast = toast.loading('Criando Cota');
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast.dismiss(loadingToast);
            toast.success('Conta Criada com Sucesso', {
                duration: 3000,
                position: 'top-center'
            })
            confettiReward();
        }, 3000)
    }

    return (
        <Layout>
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        marginTop: '10px',
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                }}
            />
            <Card>
                <Header
                    title="Criar sua conta"
                    subtitle="Cadastre-se para começar a usar nosso serviço"
                />
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Usuário"
                        id="username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Usuário"
                        required
                        error={errors.username}
                    ></Input>
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Seu email principal"
                        required
                        error={errors.email}
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
                        error={errors.password}
                    ></Input>

                    <Input
                        label="Confirmar Senha"
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder='*********'
                        required
                    ></Input>
                    <div className="bg-blue-50 p-3 rounded-lg text-sm space-y-1">
                        <p className={`flex items-center gap-1 ${passwordValidation.length ? 'text-teal-600 font-medium' : 'text-gray-400'}`}>
                            <span className="mr-1">✓</span> 8-16 Caracteres
                        </p>
                        <p className={`flex items-center gap-1 ${passwordValidation.hasLowerCase ? 'text-teal-600 font-medium' : 'text-gray-400'}`}>
                            <span className="mr-1">✓</span> Letra Minúscula
                        </p>
                        <p className={`flex items-center gap-1 ${passwordValidation.hasUpperCase ? 'text-teal-600 font-medium' : 'text-gray-400'}`}>
                            <span className="mr-1">✓</span> Letra Maiúscula
                        </p>
                        <p className={`flex items-center gap-1 ${passwordValidation.hasNumber ? 'text-teal-600 font-medium' : 'text-gray-400'}`}>
                            <span className="mr-1">✓</span> Númer
                        </p>
                        <p className={`flex items-center gap-1 ${passwordValidation.hasSpecial ? 'text-teal-600 font-medium' : 'text-gray-400'}`}>
                            <span className="mr-1">✓</span> Caractere Especial: $ @ # % ^ & * ? _ + =
                        </p>
                        <p className={`flex items-center gap-1 ${passwordValidation.passwordMatch ? 'text-teal-600 font-medium' : 'text-gray-400'}`}>
                            <span className="mr-1">✓</span> Senhas Iguais
                        </p>
                    </div>
                    <Checkbox
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        label={
                            <span>
                                Concordo com os <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Termos de politica</a> e <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">privacidade</a>
                            </span>
                        }
                        error={errors.agreeTerms} />
                    <Button type="submit" disabled={isLoading || isConfettiAnimating}>
                        {isLoading ? 'Criando...' : 'Criar Conta'}
                    </Button>
                    <span id="confettiReward" className="fixed left-1/2" />
                </form>

                <p className="mt-4 text-center text-sm text-gray-500">
                    Já tem uma conta?{" "}
                    <Link to="/" className='text-teal-600 font-bold hover:underline'>
                        Entrar
                    </Link>
                </p>

                <Divider text="ou continuar com
" />

                <div className="grid grid-cols-3 gap-3">
                    <SocialButton icon={<GoogleIcon />} onClick={() => console.log("google :):):)")}></SocialButton>
                    <SocialButton icon={<GithubIcon />} onClick={() => console.log("github :):):)")}></SocialButton>
                    <SocialButton icon={<FacebookIcon />} onClick={() => console.log("facetruck :):):)")}></SocialButton>
                </div>
            </Card>
        </Layout >
    )
}

export default SignUp;