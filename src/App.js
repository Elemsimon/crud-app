import AllAgendas from './Component/AllAgendas';
import AddAgenda from './Component/AddAgenda';
import EditAgenda from './Component/EditAgenda';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<AllAgendas />} />
        <Route path="/add" element={<AddAgenda />} />
        <Route path="/edit/:id" element={<EditAgenda />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
