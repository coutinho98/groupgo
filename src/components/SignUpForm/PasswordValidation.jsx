const passwordValidation = ({ validation }) => (
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
            <span className="mr-1">✓</span> Número
        </p>
        <p className={`flex items-center gap-1 ${passwordValidation.hasSpecial ? 'text-teal-600 font-medium' : 'text-gray-400'}`}>
            <span className="mr-1">✓</span> Caractere Especial: $ @ # % ^ & * ? _ + =
        </p>
        <p className={`flex items-center gap-1 ${passwordValidation.passwordMatch ? 'text-teal-600 font-medium' : 'text-gray-400'}`}>
            <span className="mr-1">✓</span> Senhas Iguais
        </p>
    </div>
)

export default passwordValidation;