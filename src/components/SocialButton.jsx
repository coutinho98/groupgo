const SocialButton = ({ icon, onClick }) => {
    return (
        <button
            className="flex justify-center py-2 border border-gray-200 rounded"
            onClick={onClick}
        >
            {icon}
        </button>
    )
}

export default SocialButton