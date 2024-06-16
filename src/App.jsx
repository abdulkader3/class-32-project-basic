
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  const kader= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />}/>
        <Route path='/Details' element={<Details/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={kader}/>
      
    </>
  )
}

export default App
