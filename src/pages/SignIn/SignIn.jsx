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

    const validatePassword = (password) => {
        setPasswordValidation(prev => ({
            ...prev,
            minLenght: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSpecial: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
        }))
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))

        if (name === 'password' ? value : formData.passwordd) {
            validatePassword(
                name === 'password' ? value : formData.password,
                name === 'confirmPassword' ? value : formData.confirmPassword
            )
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        const validation = {
            email: {
                test: () => validateEmail(formData.email),
                error: 'please, enter a valid email address'
            },
            password: {
                test: () => validatePassword(formData.password),
                error: 'password does not meet requirements'
            },
            agreeTerm: {
                test: () => formData.agreeTerms,
                error: 'you need to agree to the terms'
            }
        }

    }



    return (
        <Layout>
            <Card>
                <Header
                    title="Create Account"
                    subtitle="sign up to start using our service"
                />
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="username"
                        id="username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="@username"
                        required
                    ></Input>
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
                    ></Input>

                    <Input
                        label="confirm password"
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
                        label="i agree to the terms of service and privacy policy" />
                    <Button type="submit" disabled={isConfettiAnimating} onClick={() => {
                        confettiReward();
                    }}/*  onClick={passwordValidate} */> <span id="confettiReward" /> sign up</Button>
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