import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Route, Routes} from 'react-router-dom'
import RequiredAuth from "./hoc/RequiredAuth";


function App() {
  return <div className="App">
    <Navbar/>    
    <Routes>
        <Route path="/" element={<RequiredAuth><Home /></RequiredAuth>} />
        <Route path="/login" element={<Login />} />
    </Routes>
  </div>;
}

export default App;
