
function Producto(producto) {
  return (
    <div className="text-center p-5">
      <h3>{producto.nombre}</h3>
      <img className="img-fluid" src={producto.imagen} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
    </div>
  );
}

export default Producto;
 