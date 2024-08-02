import './CssGlobal.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login"
import Inicio from "./pages/inicio/Inicio";
import Requerimento from "./pages/requerimento/Requerimento";
import Biblioteca from "./pages/biblioteca/Biblioteca";
import Boletim from "./pages/boletim/Boletim";
import NotFound from './pages/not-found/NotFound';

export default function App() {
  return (
    <Router>
        <Routes basename="/login">
          <Route exact path="/login" element={<Login/>}/>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/boletim" element={<Boletim/>}/>
          <Route path="/requerimento" element={<Requerimento/>}/>
          <Route path="/biblioteca" element={<Biblioteca/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );
}
