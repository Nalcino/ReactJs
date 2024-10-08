import styles from '../css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira from '../imgs/bandeira_aruba.png'

function Aruba(){
    return(
        <div className={styles.fundo}>
            <ComponenteProps 
            lugar="Aruba"
            texto="Lindas Praias, areia limpa, vida marinha.."
            bandeira_pais={bandeira}
            />
        </div>
    )
}

export default Aruba