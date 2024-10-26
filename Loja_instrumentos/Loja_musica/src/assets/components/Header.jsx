import styles from '../css/Header.module.css'
import{Link} from 'react-router-dom'

function Header(){
    return(
       <header>
             <nav >
            <a> <Link to='/'>home</Link></a>
            <a><Link to='Bloco1'>Quem Somos</Link></a>
            <a><Link to='Bloco2'>Instrumentos</Link></a>
            <a><Link to='Bloco3'>Endereço</Link></a>
            <a><Link to='Bloco4'>Contato</Link></a>
        </nav>
       </header>
    )
}

export default Header