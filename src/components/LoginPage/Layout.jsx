
const Layout = ({ children }) => (
    <div className="flex min-h-screen bg-slate-100">
        <div className="flex-1 flex items-center justify-center">
            {children}
        </div>
    </div>
)

export default Layout;