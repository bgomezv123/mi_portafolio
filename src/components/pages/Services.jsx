import imagen1 from './1.png'
import imagen2 from './2.webp'
import imagen3 from './3.jpg'


export const Services = () => {
    return <>


        <h1 className='titulo'>
            Mi Blog Personal
        </h1>

        <div className='contenedor-posts'>
                <h2> Titulo de mi post 2 </h2>
                <div className='contenedor-imagen'>
                    <img src={imagen2}></img>
                </div>

                <p>
                Estas es una cascascaspubliacacovpdsvodnvdskmvasvsavasvsavasvasassavsavañascascassavsavsdlmvñsdlmvdskvnjsdvjkdsnvp
                </p>
        </div>

        <div className='contenedor-posts'>
                <h2> Titulo de mi post 3 </h2>
                <div className='contenedor-imagen'>
                    <img src={imagen3}></img>
                </div>
                <p>
                Estas es una cascascaspubliacacovpdsvodnvdskmvasvsavasvsavasvasassavsavañascascassavsavsdlmvñsdlmvdskvnjsdvjkdsnvp
                </p>
        </div>

        <div className='contenedor-posts'>
                <h2> Titulo de mi post 1 </h2>
                <div className='contenedor-imagen'>
                    <img src={imagen1}></img>
                </div>
                <p>
                Estas es una cascascaspubliacacovpdsvodnvdskmvasvsavasvsavasvasassavsavañascascassavsavsdlmvñsdlmvdskvnjsdvjkdsnvp
                </p>
        </div>

    </>

}