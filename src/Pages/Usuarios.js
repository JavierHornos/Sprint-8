import React, {useState, useEffect} from 'react'


const Usuarios = () => {
    const [ users, setUsers ] = useState([])
    
    
    const URL = 'https://digitaldrinks.onrender.com/api/users' 
    const showData = async () => {
        const response = await fetch(URL, {mode:'cors'})
        const data = await response.json()
        console.log(data)
        setUsers(data.data)
        
        
    }

    useEffect ( () => {
        showData()
    }, [])
    
    return (
        <div className='container-fluid' >
           <table className='table size=sm table-striped table-hover mt-6 shadow-lg responsive="xl"'>
            <thead>
                <tr className='bg-curso text-red'>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Dirección</th>
                    <th>Imagen</th>
                </tr>
            </thead>


            <tbody>
                { users.map( (user) => ( 
                <tr key={user.Id}>

                    <td>{user.Nombre}</td>
                    <td>{user.Apellido}</td>
                    <td>{user.Email}</td>
                    <td>{user.Direccion}</td>
                    <td><img src={user.Imagen}/></td>
                    
                                
                </tr>
             ))}
            </tbody>

           </table>
        </div>
    )
}
 
export default Usuarios
