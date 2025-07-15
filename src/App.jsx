
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import UserCard from './components/UserCard'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


 return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/userCard" element={<UserCard/>}/>
        </Routes>
    </BrowserRouter>

  );
}
export default App
