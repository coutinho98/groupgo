const SidebarButton = ({ icon, active = false }) => {
    return (
        <button className={`p-3 rounded-lg ${active ? `bg-teal-600` : `hover:bg-teal-600`} transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`}>
            {icon}
        </button>
    )
}

export default SidebarButton;