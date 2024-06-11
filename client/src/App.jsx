import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import LeftSection from './components/LeftSection/LeftSection';
import RightSection from './components/RightSection/RightSection';
import MainPage from './components/MainPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function App() {

  const {user} = useContext(UserContext);

  return (

    <>
      <Header />

      <Routes>

        <Route path='/' element={ <MainPage /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />

      </Routes>

    </>
  )
}

export default App
