import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './pages/App.tsx'
import BooksCatalog from './pages/BooksCatalog.tsx' 
import PageNotFound from './pages/PageNotFound.tsx'
import Register from './auth/register.tsx'
import SignIn from './auth/sign.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    {
      path: "/books", element: <BooksCatalog />,
      errorElement: <PageNotFound/>
    },
    { path: "*", element: <PageNotFound /> },
    { path: "/register", element: <Register /> },
    {path: "/sign-in", element: <SignIn />},
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)