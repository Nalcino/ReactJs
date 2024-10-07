import Logo from '../imgs/viagens.jpg'
import Lupa from '../imgs/lupa.png'
import styles from '../css/Header.module.css'

function Header(){

    return(

        <header className={styles.content}>
            <img src={Logo} alt="Logo"  className={styles.logo}/>
            <nav className={styles.menu}>
                <ul>
                    <li>HOME</li>
                    <li>Escócia</li>
                    <li>GrandCanyon</li>
                    <li>Muralhas da China</li>
                    <li>Aruba</li>
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

