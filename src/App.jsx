import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter } from 'react-router'
import { NavigationProvider } from './contexts/NavigationContext'
import Routers from './Routers'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavigationProvider>
          <Routers />
        </NavigationProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
