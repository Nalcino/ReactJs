import{Link} from 'react-router-dom'
import Logo from '../imgs/viagens.jpg'
import Lupa from '../imgs/lupa.png'
import styles from '../css/Header.module.css'

function Header(){

    return(

        <header className={styles.content}>
            <Link to='/'> 
            <img src={Logo} alt="Logo"  className={styles.logo}/>
            </Link>
            <nav className={styles.menu}>
                <ul>
                    <li> <Link to='/'>HOME</Link></li>
                    <li> <Link to='Escocia'>Escócia</Link></li>
                    <li> <Link to='Grand'>GrandCanyon </Link></li>
                    <li> <Link to={'http://cvc.com.br'}>Muralhas da China </Link></li>
                    <li> <Link to='Aruba'>Aruba</Link></li>
                </ul>
            </nav>
            <div>
                <input type="search" className={styles.login}/>
            </div>

            <img src={Lupa} alt="Lupa" className={styles.lupa}/>
        </header>


    )
}

export default Header

