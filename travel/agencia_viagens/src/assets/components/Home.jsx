import mala from '../imgs/mala.jpg'
import styles from '../css/Home.module.css'

function Home(){

    return(
        <section className={styles.corpo_home}>
            <div className={styles.imagem_lado}> </div>
            <div className={styles.texto_lado}>
                <h1>Encontre Aqui a viagem dos seus sonhos!!</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, molestias pariatur reprehenderit excepturi similique repellendus tempore rem, aperiam corrupti, maiores provident voluptate nulla mollitia distinctio. Sit assumenda eveniet eaque saepe.</p>
            </div>
        </section>
        

    )


}

export default Home