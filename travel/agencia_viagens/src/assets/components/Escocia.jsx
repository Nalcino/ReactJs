import ComponenteProps from './ComponenteProps'
import styles from '../css/escocia.module.css'
import bandeira from '../imgs/bandeira_escocia.png'

function Escocia(){

    return(
        <div className={styles.fundo}>
            <ComponenteProps  
                lugar="Escocia"
                texto="Castelos Medievais, lindas florestas, Torta de manteiga escocesa, boa cerveja, clima bom, ambiente acolhedor,  comidas tipicas, etc.."
                bandeira_pais={bandeira}
            />
        </div>

    )
}

export default Escocia