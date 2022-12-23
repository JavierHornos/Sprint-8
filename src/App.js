import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Sales from "./Pages/Sales";
import Clients from "./Pages/Clients";
import Usuarios from "./Pages/Usuarios";
import Productos from "./Pages/Productos";

function App() {
  return (

    // <div className="container-fluid" >
    //   <h2 className="text-center" >Lista de Usuarios</h2>
    //   <Usuarios/>
    //   <Productos/>
    // </div>

    
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="content" >
          <Routes>
          <Route path="/" exact={true} element={<Home/>} />
          <Route path="/sales" exact={true} element={<Sales/>} />
          <Route path="/clients" exact={true} element={<Clients/>} />
          <Route path="/Usuarios" exact={true} element={<Usuarios/>} />
          <Route path="/Productos" exact={true} element={<Productos/>} />
          </Routes>
        </div>


      </div>
    </Router>

   
  );
}

export default App;
