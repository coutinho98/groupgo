const SidebarButton = ({ icon, active = false }) => {
    return (
        <button className={`p-3 rounded-lg ${active ? `bg-teal-600` : `hover:bg-teal-600`} transition`}>
            {icon}
        </button>
    )
}

export default SidebarButton;