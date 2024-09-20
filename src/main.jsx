import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home'
import Error from './routes/Error'
import Corrida from './routes/Corrida.jsx'
import Highlights from './routes/Highlights.jsx'
import Classificacao from './routes/Classificacao.jsx'
import Sustentabilidade from './routes/Sustentabilidade.jsx'


const router= createBrowserRouter([
  {
    //Elemento Pai
    path: '/', element: <App/>,
    errorElement:<Error/>,

    //Elementos Filhos

    children:[
      {path:'/', element:<Home/>},
      {path:'/corrida', element:<Corrida/>},
      {path:'/highlights', element:<Highlights/>},
      {path:'/classificacao', element:<Classificacao/>},
      {path:'/sustentabilidade', element:<Sustentabilidade/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


