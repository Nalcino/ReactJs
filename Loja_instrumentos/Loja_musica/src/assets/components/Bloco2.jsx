import styles from '../css/Bloco2.module.css'
import viola from '../imgs/guitarrinha.jpg'

function Bloco2(){
    return(
        <div className={styles.fundo}>
            <div className={styles.card}>
                <div className={styles.bloco}>
                    <img src={viola} alt="viola" />
                    <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                    <p1>R$ 989,50</p1>
                </div>
                <div className={styles.bloco}>
                    <img src={viola} alt="viola" />
                    <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                    <p1>R$ 989,50</p1>
                </div>
                <div className={styles.bloco}>
                    <img src={viola} alt="viola" />
                    <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                    <p1>R$ 989,50</p1>
                </div>
                <div className={styles.bloco}>
                    <img src={viola} alt="viola" />
                    <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                    <p1>R$ 989,50</p1>
                </div>
            </div>
        </div>
    )
}

export default Bloco2