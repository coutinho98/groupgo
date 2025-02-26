import { BrowserRouter } from 'react-router'
import { NavigationProvider } from './contexts/NavigationContext'
import Routers from './Routers'

// import { Home } from "./pages/Home/Home"
//import Sidebar from "./components/Siderbar"

function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Routers />
      </NavigationProvider>
    </BrowserRouter>
  )
}

export default App
