import styles from '../css/Bloco1.module.css'
import loja from '../imgs/loja.jpg'

function Bloco1(){
    return(
        <main>

        <div className={styles.bloco}>
            <div className={styles.texto}>
                <h1>Nossa Loja-Instrumentos Musicais</h1>
                <p>
                    Se você é um amante da Musica, está em busca de um novo instrumento musica.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aut corporis tempore dolor architecto est totam, quia amet dicta exercitationem illo accusantium. Quisquam sunt blanditiis et illo, illum delectus iste!
                </p>
            </div>
            <div className={styles.loja}>
                <img src={loja} alt="loja" />
            </div>
        </div>
        </main>
    )
}

export default Bloco1