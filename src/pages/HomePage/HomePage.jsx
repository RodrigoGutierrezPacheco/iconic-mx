import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
			<div>
			<img src="images/carrito.png" alt="" className="png1" />
			<div className="row-portada">
				<img src="images/etiqueta.png" alt="" className="png" />
				<img src="images/boton.png" alt="" className="png" />
				<img src="images/playera.png" alt="" className="png" />
				<img src="images/sudadera.png" alt="" className="png" />
			</div>
			</div>
			<img className="iconic-portada" src="images/iconic.png" alt="" />
			<div className="column-portada">
				<span className="inicio-portada subtitle">Inicio</span>
				<span className="tienda-portada subtitle">Tienda</span>
				<span className="nosotros-portada subtitle">Nosotros</span>
			</div>
			<div className="productos">
				<h1 className="start title-productos">Productos</h1>
				<div className="marginb">
					<img src="images/producto1.jpg" alt="" className="producto" />
					<img src="images/producto1.jpg" alt="" className="producto" />
					<img src="images/producto1.jpg" alt="" className="producto" />
					<img src="images/producto1.jpg" alt="" className="producto" />
				</div>
			</div>
			<div className="descubre">
				<div className="row-descubre">
					<h1 className="title-descubre">Descubre</h1>
					<img src="images/lupa.png" alt="" className="png2 end" />
				</div>
				<h2 className="justify">Moda con historia. <br />Unete a nosotros y lleva un pedacido de significado en cada prenda.</h2>
				<img src="images/ali.webp" alt="" className="img" />
			</div>
    </div>
  );
}

export default HomePage;
