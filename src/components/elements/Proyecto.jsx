import '../../assets/css/elements/Proyecto.css'

function Proyecto({titulo, texto, imagen}) {
    return (
      <div className="contenedor-proyecto">
        <div className='contenedor-imagen-proyecto'>
          <img src= {imagen} className="imagen-proyecto" alt="imagen proyecto"></img>
        </div>
        <div className="contenedor-texto-proyecto">
          <h1 className="titulo-proyecto">{titulo}</h1>
          <p className="texto-proyecto">{texto}</p>
        </div>
      </div>
    );
}


export default Proyecto;