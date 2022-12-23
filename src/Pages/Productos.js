import ProductosList from "../components/ProductosList";

const Productos = () => {
  return (
    <div className="bg-dark text-white" >
      <h1 className="text-center display-1 py-4" >Productos</h1>

      <ProductosList />
    </div>
  );
};

export default Productos;
