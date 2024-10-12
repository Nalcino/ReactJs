import styles from '../css/Bloco1.module.css'
import loja from '../imgs/loja.jpg'

function Bloco1(){
    return(
        <div className={styles.bloco}>
            <div className={styles.texto}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde cum architecto vel totam earum nihil eos, reprehenderit distinctio inventore quam. Minus veniam architecto debitis omnis rerum repellat, necessitatibus quae laudantium!
                    <br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex sequi delectus laborum voluptas, quod dolor dignissimos saepe assumenda, rem dolore, aut facere ratione accusantium mollitia laboriosam possimus debitis pariatur tempore.</p>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis, vel, voluptatem culpa, ea dolor nihil ipsam assumenda officia sint libero incidunt alias dolores eos aut blanditiis facere est provident?
                </p>
            </div>
            <div className={styles.loja}>
                <img src={loja} alt="loja" />
            </div>
        </div>
    )
}

export default Bloco1