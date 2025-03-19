import { Toaster } from "react-hot-toast"
import SocialButton from "../../components/SocialButton"
import Divider from "../../components/Divider"
import { GoogleIcon, FacebookIcon, GithubIcon, LeftArrow } from "../../components/icons/Icons"
import Layout from "../../components/LoginPage/Layout"
import Card from "../../components/LoginPage/Card"
import Header from "../../components/LoginPage/Header"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import useSignUp from "../../hooks/useSignUp"
import { Link } from "react-router"

const SignUp = () => {
    const { formData, errors, isLoading, passwordValidation, handleChange, handleSubmit, isConfettiAnimating } = useSignUp();

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
                <button className="-ml-1 text-teal-700"> <Link to="/"><LeftArrow />
                </Link></button>
                <Header
                    title="Criar sua conta"
                    subtitle="Cadastre-se para começar a usar nosso serviço"
                />
                <SignUpForm
                    formData={formData}
                    errors={errors}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                    passwordValidation={passwordValidation}
                    isConfettiAnimating={isConfettiAnimating}
                />

                <p className="mt-4 text-center text-sm text-gray-500">
                    Já tem uma conta?{" "}
                    <Link to="/" className='text-teal-600 font-bold hover:underline'>
                        Entrar
                    </Link>
                </p>
                <Divider text="ou continuar com" />
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