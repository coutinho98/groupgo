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
        minLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecial: false,
        passwordMatch: false
    })

    const validatePassword = (password, confirmPassword) => {
        const validation = {
            minLength: password.length >= 8,
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
            console.log('erros: ', newErrors)
            return;
        }

        const loadingToast = toast.loading('creating account');
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast.dismiss(loadingToast);
            toast.success('account created successfully', {
                duration: 4000,
                position: 'top-center'
            })
            confettiReward();
        }, 1000)
    }

    return (
        <Layout>
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        marginTop: '20px',
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                }}
            />
            <Card>
                <Header
                    title="Create Account"
                    subtitle="sign up to start using our service"
                />
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Username"
                        id="username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="@username"
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
                        placeholder="seuemail@hotmail.com"
                        required
                        error={errors.email}
                    ></Input>

                    <Input
                        label="Password"
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
                        label="Confirm Password"
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder='*********'
                        required
                    ></Input>

                    <Checkbox
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        label="I agree to the terms of service and privacy policy"
                        error={errors.agreeTerms} />
                    <Button type="submit" disabled={isLoading || isConfettiAnimating}>
                        {isLoading ? 'loading...' : 'sign up'}
                    </Button>
                    <span id="confettiReward" className="fixed left-1/2" />
                </form>

                <p className="mt-4 text-center text-sm text-gray-500">
                    already have an account?{" "}
                    <Link to="/" className='text-teal-600 font-bold hover:underline'>
                        sign in
                    </Link>
                </p>

                <Divider text="or continue with" />

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