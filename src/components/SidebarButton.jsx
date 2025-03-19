const SidebarButton = ({ icon, label, active = false, onClick, path = null }) => (
    <button
        onClick={onClick}
        className={`flex items-center w-full px-2 py-2 rounded-md transition-colors duration-200 ${active ? 'bg-teal-500' : 'hover:bg-gray-800'
            }`}
    >
        <div className="flex items-center justify-center w-8 h-8">
            {icon}
        </div>
        <div>
            {label && (
                <span className="ml-3 text-sm font-medium">{label}</span>
            )}
        </div>
    </button>
)

export default SidebarButton;