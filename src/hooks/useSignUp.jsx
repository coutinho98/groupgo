import { useState } from "react"
import { useNavigate } from "react-router"
import { useReward } from "react-rewards"
import toast from "react-hot-toast"

const useSignUp = () => {
    const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti', {
        elementCount: 50,
        elementSize: 17,
        colors: ['#00bba7', '#ff53ac', '#5733FF', '#b79700'],
        position: 'fixed',
        fps: 60,
        spread: 70,
        lifetime: 400,
    });

    const navigate = useNavigate();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        const validations = {
            email: {
                test: () => validateEmail(formData.email),
                error: 'Por favor, digite um email válido'
            },
            password: {
                test: () => validatePassword(formData.password, formData.confirmPassword),
                error: 'A senha não atende aos requisitos'
            },
            agreeTerms: {
                test: () => formData.agreeTerms,
                error: 'Você precisa concordar com os termos'
            },
            username: {
                test: () => validateUsername(formData.username),
                error: 'O nome de usuário deve ter pelo menos 5 caracteres'
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

        const loadingToast = toast.loading('Criando Conta');
        setIsLoading(true);

        try {
            const response = await fetch('https://groupgo.onrender.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                }),
            });

            setIsLoading(false)
            toast.dismiss(loadingToast);

            if (response.ok) {
                const data = await response.json();

                setTimeout(() => {
                    toast.success('Conta Criada com Sucesso', {
                        duration: 3000,
                        position: 'top-center'
                    });
                    confettiReward()

                    setTimeout(() => {
                        navigate('/perfil')
                    }, 3500);
                }, 500)
            }
            else {
                const errorData = await response.json();
                setErrors(errorData.message || 'Falha ao criar conta')
                toast.error(errorData.message || 'Falha ao criar conta', {
                    duration: 3000,
                    position: 'top-center'
                });
            }
        } catch (err) {
            setIsLoading(false);
            toast.dismiss(loadingToast)
            setErrors('Erro no server')
            toast.error('Error no servidor', {
                duration: 3000,
                position: 'top-center'
            })
        }
    }

    return { formData, errors, isLoading, passwordValidation, handleChange, handleSubmit, isConfettiAnimating }
}

export default useSignUp;