import { useEffect, useState } from "react";
import Producto from "./Producto";

function ProductosList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://digitaldrinks.onrender.com/api/products",
        { mode: "cors" }
      );
      const data = await response.json();
      setLoading(false);
      setProductos(data.data);
    }

    fetchData();
  }, []);

  return (
    <div className="container bg-info">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {productos.map((producto) => {
            return (
              <div className="col-md-4" key={producto.id}>
                <Producto nombre={producto.nombre} img={producto.imagen} descripcion={producto.descripcion} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductosList;
