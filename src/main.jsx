import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home'
import Error from './routes/Error'
import Corrida from './routes/Corrida.jsx'
import Classificacao from './routes/Classificacao.jsx'
import Game from './routes/Game.jsx'
import CriarSala from './routes/CriarSala.jsx'
import EntrarSala from './routes/EntrarSala.jsx'
import Sala from './routes/Sala.jsx'


const router= createBrowserRouter([
  {
    //Elemento Pai
    path: '/', element: <App/>,
    errorElement:<Error/>,

    //Elementos Filhos

    children:[
      {path:'/', element:<Home/>},
      {path:'/corrida', element:<Corrida/>},
      {path:'/classificacao', element:<Classificacao/>},
      {path:'/game', element:<Game/>},
      {path: '/criarSala', element: <CriarSala/>},
      {path:'/entrarSala', element: <EntrarSala/>},
      {path:'/sala', element: <Sala />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


