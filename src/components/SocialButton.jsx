const SocialButton = ({ icon, onClick }) => (
    <button
        className="flex justify-center py-2 border border-gray-200 rounded"
        onClick={onClick}
    >
        {icon}
    </button>
)

export default SocialButton