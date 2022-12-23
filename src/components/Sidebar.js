import { NavLink} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <ul>
                <li>
                    <NavLink to="/" className='text-dark me-2'><FaHome/> Inicio</NavLink>
                </li>

                <li>
                    <NavLink to="/sales" className='text-dark me-2'><FaRegChartBar/> Ventas</NavLink>
                </li>

                <li>
                    <NavLink to="/clients" className='text-dark me-2'><FaUserFriends/> Clientes</NavLink>
                </li>

                <li>
                    <NavLink to="/Usuarios" className='text-dark me-2'><FaUserFriends/> Usuarios</NavLink>
                </li>

                <li>
                    <NavLink to="/Productos" className='text-dark me-2'><FaUserFriends/> Productos</NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar;