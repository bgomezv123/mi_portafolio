import '../../assets/css/elements/Habilidad.css'

function Habilidad({titulo, texto, imagen}) {
    return (
      <div className="contenedor-habilidad">

        <div className="contenedor-texto-habilidad">
          <h1 className="titulo-habilidad">{titulo}</h1>
          <div className='contenedor-imagen-habilidad'>
            <img src= {imagen} className="imagen-habilidad" alt="imagen proyecto"></img>
          </div>
          <p className="texto-habilidad">{texto}</p>
        </div>
      </div>
    );
}


export default Habilidad;