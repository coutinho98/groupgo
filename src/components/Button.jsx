const Button = ({
    children,
    type = "button",
    variant = "primary",
    fullWidth = true,
    onClick,
    isLoading = false,
    disabled = false,
}) => {
    const basesStyles = 'py-2 rounded-md transition-colors'
    const variantStyles = {
        primary: "bg-teal-700 text-white hover:bg-teal-800",
        secondary: "bg-gray200 text-gray-800 horver:bg-gray-300",
        outline: "bg-transparent border border-gray-300 text-gray-700 horver:bg-gray-60"
    };

    const widthStyles = fullWidth ? 'w-full' : "";
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
        <button type={type} className={`${basesStyles} ${variantStyles[variant]} ${widthStyles} ${disabledStyles}`}
            onClick={isLoading || disabled ? null : onClick}
            disabled={isLoading || disabled}>
            {isLoading ? 'Loading...' : children}
        </button >
    )
}

export default Button;