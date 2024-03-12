import '../../assets/css/elements/Presentacion.css'

function Presentacion({nombres, apellidos, desarrollador, texto, imagen}) {
    return (
      <div className="contenedor-presentacion">
        <div className='contenedor-imagen-presentacion'>
          <img src= {imagen} className="imagen-presentacion" alt="imagen proyecto"></img>
        </div>
        <div className="contenedor-texto-presentacion">
          <h1 className='nombres-presentacion'><span>{">"}</span><span className='nombres'>{nombres}</span><span> {apellidos}</span></h1>
          <h2 className="desarrollador-presentacion"><span>Desarrollador </span>{desarrollador}</h2>
          <p className="texto-presentacion">{texto}</p>
        </div>
      </div>
    );
}


export default Presentacion;