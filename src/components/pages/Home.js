import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'
import dataImg from '../../img/data-science.png'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem vindo ao <span>Mind Your Data</span>
      </h1>
      <p>Comece a gerenciar informações suas e de seus clientes agora mesmo!</p>
      <LinkButton to="/dashboard" text="Gerenciar dados" />
      <img
        src={dataImg}
        alt="Banco de dados no meio de uma nuvem atômica, representando a ciência de dados"
      />
    </section>
  )
}

export default Home
