const Header = ({ title, subtitle }) => {
    return (
        <div className="w-full max-w-sm p-6">
            <h1 className="text-4xl font-medium text-teal-700 text-center mb-2">{title}</h1>
            <p className="text-2x1 text-gray-500 text-center mb-5">{subtitle}</p>
        </div>
    )
}

export default Header;