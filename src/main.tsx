import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Formulario from './Pages/Formulario/Components/PageBody/index.tsx'
import Corpo from './Pages/Home/Components/Corpo/Corpo.tsx'
import Perfil from './Pages/Perfil/Components/Perfil/index.tsx'
import InfoConta from './Pages/InformacoesDaConta/Components/Body/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Corpo/>
  },
  {
    path: '/perfil',
    element: <Perfil/>
  },
  {
    path: '/informacoes',
    element: <InfoConta/>
  },
  {
    path: '/cadastro',
    element: <Formulario/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)

