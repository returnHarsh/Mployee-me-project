import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { UserContextProvider } from './context/UserContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <ChakraProvider>
    <UserContextProvider>
    <App />
    </UserContextProvider>
    </ChakraProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
