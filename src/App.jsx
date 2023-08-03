import { BrowserRouter } from 'react-router-dom'
/* import '../node_modules/bootstrap/dist/css/bootstrap.min.css' */

import { MainLayout } from './layouts'

import { AppRoutes } from './routes'
import { MusicProvider } from './context/MusicProvider'
import { FavoriteProvider } from './context/FavoriteProvider'

function App() {


  return (
    <BrowserRouter>
  
    <MusicProvider>
    <FavoriteProvider>
    <MainLayout>
       <AppRoutes/>
    </MainLayout>
    </FavoriteProvider>
    </MusicProvider>
  
    </BrowserRouter>
    
    
   
  )
}

export default App
