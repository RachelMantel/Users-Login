
import { RouterProvider } from 'react-router'
import './App.css'
import Home from './components/Home'
import { router } from './Router'


function App() {

  return (
    <>
      <Home />
      <RouterProvider router={router} />
    </>
  )
}

export default App
