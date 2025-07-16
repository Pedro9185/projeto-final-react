
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import UserCard from './components/UserCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import Explorar from "./Pages/Explorar/Explorar";
import CadastroItem from "./CadastroItem";

function App() {


 return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/userCard" element={<UserCard/>}/>
          <Route path="/explorar" element={<Explorar/>}/>
          <Route path="/cadastrarItem" element={<CadastroItem/>}/>
        </Routes>
    </BrowserRouter>

  );
}
export default App

