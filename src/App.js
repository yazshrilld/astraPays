import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import Login from './pages/Login/Login';
import HomeLayout from './Layout/HomeLayout/HomeLayout';
import SearchLabour from './pages/SearchLabour/SearchLabour';
import DashBoard from './Layout/DashBoard/DashBoard';
import Welcome from './pages/Welcome/Welcome';
import Details from './pages/Details/Details';

function App() {
  return (
   <>
    <Routes>
      <Route element={<Login />} path="/"/>
      <Route element={<Welcome />} path="/welcome"/>
      <Route element={<Details />} path="/details"/>
      <Route element={<Main />} path="/homepage"/>
      <Route element={<HomeLayout />} path="/home"/>
      <Route element={<DashBoard />} path="/dash"/>
      <Route element={<SearchLabour />} path="/search"/>
    </Routes>
   </>
  );
}

export default App;
