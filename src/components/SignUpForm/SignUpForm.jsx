import Input from "../Input"
import Checkbox from "../Checkbox"
import Button from "../Button"
import PasswordValidation from "./PasswordValidation"

const SignUpForm = ({ formData, errors, handleChange, handleSubmit, isLoading, passwordValidation, isConfettiAnimating }) => (
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
        />
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
        />
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
        />
        <Input
            label="Confirmar Senha"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder='*********'
            required
        />
        <PasswordValidation validation={passwordValidation} />
        <Checkbox
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            label={
                <span>
                    Concordo com os
                    <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline">Termos de politica</a>
                    e
                    <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline">privacidade</a>
                </span>
            }
            error={errors.agreeTerms}
        />
        <Button type="submit" disabled={isLoading || isConfettiAnimating}>
            {isLoading ? 'Criando...' : 'Criar Conta'}
        </Button>
        <span id="confettiReward" className="fixed left-1/2" />
    </form>
)

export default SignUpForm;