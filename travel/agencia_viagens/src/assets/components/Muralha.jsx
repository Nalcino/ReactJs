import styles from '../css/muralha.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira from '../imgs/bandeira_china.png'

function Muralha(){
    return(
        <div className={styles.fundo}>
            <ComponenteProps 
            lugar="Muralha China"
            texto="Muralha em volta do todo pais, antigas bases  militares, construção milenar.."
            bandeira_pais={bandeira}
            />
        </div>
    )

}

export default Muralha