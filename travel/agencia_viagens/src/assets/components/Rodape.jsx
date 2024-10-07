import styles from '../css/rodape.module.css'
import insta from '../imgs/insta.jpg'
import whats from '../imgs/whtas.png'
import face from '../imgs/faceboook.jpg'
import tiktok from '../imgs/tiktok.png'


function Rodape() {

    return(

        <footer className={styles.corpo}>
            <h3>Siga-nos nas redes sociais</h3>
            <div className={styles.logos}>
                <img src={insta} alt="insta" />
                <img src={face} alt="face" />
                <img src={tiktok} alt="tiktok" />
                <img src={whats} alt="whats" />
            </div>
            <h3>Telefone de Contato - (11) 4002-89222 </h3>
        </footer>

    )
       


}

export default Rodape