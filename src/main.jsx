import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
