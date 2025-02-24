import { useState } from "react"
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
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false
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
        console.log("sign in :):)")
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
                    <Button type="submit">sign up</Button>
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
        </Layout>
    )
}

export default SignUp;