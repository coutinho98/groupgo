import Sidebar from "./Siderbar"

const MainLayout = ({ children }) => (
    <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">{children}</div>
    </div>
)

export default MainLayout