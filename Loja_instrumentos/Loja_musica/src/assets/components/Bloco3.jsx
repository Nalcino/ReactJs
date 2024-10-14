import styles from '../css/Bloco3.module.css'

function Bloco3(){

    return(
        <div className={styles.bloco}>
        <div className={styles.texto}>
        <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.9181163744673!2d-46.698083384407555!3d-23.526237884703267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5783f48c1fb1%3A0x7e8d9b7eae2fd6!2sRua%20Tito%2C%2054%20-%20Vila%20Romana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1633668564639!5m2!1sen!2sbr"
                    width="600"
                    height="350"
                    style={{ border: '0' }}
                ></iframe>
        </div>
        <div className={styles.loja}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolores deserunt quas dolor. Ut ducimus natus unde ullam consectetur nostrum perferendis dolor esse quasi fugiat, quod quis eius, incidunt optio!</p>
            <br />
        </div>
    </div>
    )
}

export default Bloco3