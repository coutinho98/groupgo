import { useEffect, useState } from 'react';
import SidebarButton from './SidebarButton';
import { MenuIcon, UserIcon, LogoutIcon } from './icons/Icons'
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activePath, setActivePath] = useState("");

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    const handleNavigation = (path) => {
        if (path === '/logout') {
            navigate('/login');
            return;
        }
        navigate(path);
        setActivePath(path);
    };

    return (
        <div className="w-64 h-screen bg-gray-900 flex flex-col items-start py-6 text-white">
            <h2 className="text-sm font-medium text-gray-300 mb-4">menu</h2>
            <div className="flex flex-col items-start space-y-8 w-full px-3">
                <SidebarButton
                    icon={<MenuIcon />}
                    label="Menu"
                    path="/home"
                    active={activePath === "/home"}
                    onClick={() => handleNavigation("/home")}
                />
                <SidebarButton
                    icon={<UserIcon />}
                    label="Perfil" path="/perfil"
                    active={activePath === "/perfil"}
                    onClick={() => handleNavigation("/perfil")}
                />
            </div>
            <div className="mt-auto mb-6 w-full px-3">
                <h2 className="text-sm font-medium text-gray-300 mb-3">configurações</h2>
                <SidebarButton
                    icon={<LogoutIcon />}
                    label="Logout"
                    path="/"
                    active={activePath === "/"}
                    onClick={() => handleNavigation("/")}
                />
            </div>
        </div>
    )
}

export default Sidebar;