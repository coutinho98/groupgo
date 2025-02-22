const SocialButton = ({ icon, onClick }) => {
    return (
        <button
            className="flex justify-center py-2 border border-gray-200 roundedmd horver:bg-gray-500"
            onClick={onClick}
        >
            {icon}
        </button>
    )
}

export default SocialButton