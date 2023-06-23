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
				<img src="images/ali.webp" alt="" className="img marginb" />
			</div>
			<div className="productos">
				<div className="row-descubre">
					<h1 className="title-descubre start justify">Nuestra inspiracion</h1>
					<img src="images/inspiracion.png" alt="" className="png2" />
				</div>
				<h2 className="justify marginl">Nos inspiramos en momentos cruciales que marcaron a la humanidad. Descubre neustra coleccion que fusiona estilo y significado. Unete a nosotros y lleva contigo un pedacito de historia en cada prenda.</h2>
				<img src="images/checo.jpg" alt="" className="img marginb" />
			</div>
			<div className="descubre">
				<div className="row-descubre">
					<h1 className="title-descubre start">Nosotros</h1>
					<img src="images/nosotros.png" alt="" className="png2" />
				</div>
				<h2 className="justify maginl">En icon, hacemos moda que inspira. Descubre nuestra seleccoin de ropa de calidad y escilo excepcionales. Cada prenda esta disenada para expresar tu personalidad y confianza. Unete a nosotros y encuentra tu simbolo de estilo y empoderamiento.</h2>
				<div className="column">
				<div className="container">
					<img src="images/circulo1.png" alt="Imagen de fondo" className="png3" />
					<h2 className="text">10 <br /> Modelos diferentes.</h2>
				</div>
				<div className="container">
					<img src="images/circulo2.png" alt="Imagen de fondo" className="png3" />
					<h2 className="text">Moda Sustentable</h2>
				</div>
				<div className="container">
					<img src="images/circulo3.png" alt="Imagen de fondo" className="png3" />
					<h2 className="text">Moda para Todos</h2>
				</div>
				</div>
			</div>
    </div>
  );
}

export default HomePage;
