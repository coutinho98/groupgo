import SidebarButton from './SideBarButton';
import { HomeIcon, MenuIcon, PlusIcon, UserIcon, LogoutIcon } from './icons/Icons'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('onlogout');
        navigate('/login');
    };

    return (
        <div className="w-16 h-screen bg-teal-700 flex flex-col items-center py-6 text-white">
            <motion.div
                animate={{ x: [0, -5, 5, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
                <div className="h-12 w-12 rounded-full bg-teal-600 flex items-center justify-center mb-6 text-xl font-bold">
                    GG
                </div>
            </motion.div>
            <div className="flex flex-col items-center space-y-8 mt-4">
                <SidebarButton icon={<UserIcon />} active />
                <SidebarButton icon={<HomeIcon />} />
                <SidebarButton icon={<MenuIcon />} />
                <SidebarButton icon={<PlusIcon />} />
            </div>
            <div className="mt-auto mb-6">
                <SidebarButton icon={<LogoutIcon />} onClick={handleLogout} /> </div>
        </div>
    )
}

export default Sidebar;