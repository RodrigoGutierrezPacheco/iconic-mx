import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
			<div className="bg-color-portada">
			<img src="images/carrito.png" alt="" className="png1 bg-color-portada" />
			<div className="row-portada ">
				<img src="images/etiqueta.png" alt="" className="png" />
				<img src="images/boton.png" alt="" className="png" />
				<img src="images/playera.png" alt="" className="png" />
				<img src="images/sudadera.png" alt="" className="png" />
			</div>
			<img className="iconic-portada" src="images/iconic.png" alt="" />
			</div>
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
				</div>
				<h2 className="justify">Moda con historia. <br />Unete a nosotros y lleva un pedacido de significado en cada prenda.</h2>
				<div className="flex-redes">
					<img className="png4" src="images/fb.png" alt="" />
					<img className="png4" src="images/tw.png" alt="" />
					<img className="png4" src="images/whats.png" alt="" />
					<img className="png4" src="images/insta.png" alt="" />
				</div>
				<img src="images/ali.webp" alt="" className="img marginb" />
			</div>
			<div>
				<div className="row-descubre">
					<h1 className="title-descubre marginl start justify">Nuestra inspiracion</h1>
				</div>
				<h2 className="justify marginl">Nos inspiramos en momentos cruciales que marcaron a la humanidad. Descubre neustra coleccion que fusiona estilo y significado. Unete a nosotros y lleva contigo un pedacito de historia en cada prenda.</h2>
				<img src="images/checo.jpg" alt="" className="img-checo marginb" />
			</div>
			<div className="descubre">
				<div className="row-descubre">
					<h1 className="title-descubre start">Nosotros</h1>
				</div>
				<h2 className="justify maginl en-icon">En icon, hacemos moda que inspira. Descubre nuestra seleccoin de ropa de calidad y escilo excepcionales. Cada prenda esta disenada para expresar tu personalidad y confianza. Unete a nosotros y encuentra tu simbolo de estilo y empoderamiento.</h2>
				<div className="column">
				<div className="container margint">
					<img src="images/pildora.png" alt="Imagen de fondo" className="png30" />
					<div className="text column">
						<span className="strong">10</span>
						<span>Modelos diferentes</span>
					</div>
				</div>
				<div className="container margint">
					<img src="images/circulo1.png" alt="Imagen de fondo" className="png3" />
					<div className="text column margint">
						<span className="strong">10</span>
						<span>Moentos Historicos</span>
					</div>
				</div>
				<div className="container margint">
					<img src="images/circulo.png" alt="Imagen de fondo" className="png3" />
					<div className="text column margint">
						<span className="strong">100+</span>
						<span>Clientes</span>
					</div>
				</div>
				</div>
			</div>
    </div>
  );
}

export default HomePage;
