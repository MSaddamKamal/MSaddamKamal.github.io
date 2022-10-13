
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import { useRoutes } from 'react-router-dom';
import {  routes } from './routes';



function App() {
  const routing = useRoutes(routes)
  return (
    <>
    {routing}
    </>
  );
}

export default App;
