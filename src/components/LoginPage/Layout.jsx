
const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="flex-1 flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}

export default Layout;