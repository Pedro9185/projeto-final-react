
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import UserCard from './components/UserCard'
import SettingsPage from "./Pages/settings/settings";

function App() {


 return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/userCard" element={<UserCard/>}/>
          <Route path="/settings" element={<SettingsPage/>}/>
        </Routes>
    </BrowserRouter>

  );
}
export default App
