const SocialButton = ({ icon, onClick }) => {
    return (
        <button
            className="flex justify-center py-2 border border-gray-300 roundedmd horver:bg-gray-50"
            onClick={onClick}
        >
            {icon}
        </button>
    )
}

export default SocialButton