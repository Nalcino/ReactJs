import styles from '../css/Footer.module.css'
import face from '../imgs/face.png'
import insta from '../imgs/insta.png'
import whats from '../imgs/whats.png'

function Footer() {
    return (

        <footer>
            <div className={styles.texto_end}>
                <h3>
                    Nossa Loja - Instrumentos Musicais
                </h3>
                <h4>
                    Rua tito,54 - lapa
                </h4>
                <h4>
                    São Paulo - Brasil
                </h4>
            </div>
            <div className={styles.redes_end}>
                <img className={styles.img_end} src={face} alt="" />
                <img className={styles.img_end} src={insta} alt="insta" />
                <img className={styles.img_end} src={whats} alt="whats" />
            </div>
        </footer>
    )
}


export default Footer
