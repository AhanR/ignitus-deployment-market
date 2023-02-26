import './App.css'
import Checkout from './pages/checkout'
import Home from './pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/checkout",
      element: <Checkout/>
    }
  ])

  return (
    <div className="">
      <RouterProvider router={routes}  />
    </div>
  )
}

export default App
