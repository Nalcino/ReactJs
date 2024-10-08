import styles from '../css/grand.module.css'
import bandeira_grand  from '../imgs/bandeira_eua.jpg'
import ComponenteProps from './ComponenteProps'


function Grand(){

    return(
        <div className={styles.fundo}>
            <ComponenteProps  
                lugar="GrandCannyon"
                texto="Buraco grande, lindos passaros, proximo rota 66.."
                bandeira_pais={bandeira_grand}
            />
        </div>

    )
}

export default Grand