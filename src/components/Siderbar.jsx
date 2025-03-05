import { useEffect, useState } from 'react';
import SidebarButton from './SidebarButton';
import { MenuIcon, UserIcon, LogoutIcon, ConfigurationIcon, XIcon } from './icons/Icons'
import { useNavigate, useLocation } from 'react-router';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activePath, setActivePath] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

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
        setMobileOpen(false);
    };

    return (
        <>
            <button onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-teal-500 p-2">
                <MenuIcon />
            </button>

            <div className="fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white flex flex-col transform transition-transform duration-300 max-lg:hidden lg:flex">
                <h2 className="text-sm font-medium text-gray-300 mb-4 px-3">menu</h2>
                <div className="flex flex-col items-start space-y-8 w-full px-3">
                    <SidebarButton
                        icon={<UserIcon />}
                        label="Home" path="/events"
                        active={activePath === "/events"}
                        onClick={() => handleNavigation("/events")}
                    />
                    <SidebarButton
                        icon={<MenuIcon />}
                        label="Create"
                        path="/home"
                        active={activePath === "/home"}
                        onClick={() => handleNavigation("/home")}
                    />

                </div>
                <div className="mt-auto mb-6 w-full px-3 space-y-8">
                    <h2 className="text-sm font-medium  text-gray-300">configurações</h2>
                    <SidebarButton
                        icon={<ConfigurationIcon />}
                        label="Configuration" path="/perfil"
                        active={activePath === "/perfil"}
                        onClick={() => handleNavigation("/perfil")}
                    />
                    <SidebarButton
                        icon={<LogoutIcon />}
                        label="Logout"
                        path="/"
                        active={activePath === "/"}
                        onClick={() => handleNavigation("/")}
                    />
                </div>
            </div>

            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                >
                    <div
                        className={`
                       w-64 h-full bg-gray-900 text-white
                       absolute top-0 left-0
                       transform transition-transform duration-300
                       ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
                   `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="absolute top-6 right-4 text-white"
                        >
                            <XIcon />
                        </button>
                        <div className="pt-16 px-3 h-full flex flex-col">
                            <h2 className="text-sm font-medium text-gray-300 mb-4">menu</h2>
                            <div className="flex flex-col items-start space-y-8 w-full">
                                <SidebarButton
                                    icon={<UserIcon />}
                                    label="Home" path="/events"
                                    active={activePath === "/events"}
                                    onClick={() => handleNavigation("/events")}
                                />
                                <SidebarButton
                                    icon={<MenuIcon />}
                                    label="Create"
                                    path="/home"
                                    active={activePath === "/home"}
                                    onClick={() => handleNavigation("/home")}
                                />
                            </div>
                            <div className="mt-auto mb-6 space-y-8">
                                <h2 className="text-sm font-medium text-gray-300">configurações</h2>
                                <SidebarButton
                                    icon={<ConfigurationIcon />}
                                    label="Configuration" path="/perfil"
                                    active={activePath === "/perfil"}
                                    onClick={() => handleNavigation("/perfil")}
                                />
                                <SidebarButton
                                    icon={<LogoutIcon />}
                                    label="Logout"
                                    path="/"
                                    active={activePath === "/"}
                                    onClick={() => handleNavigation("/")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Sidebar;