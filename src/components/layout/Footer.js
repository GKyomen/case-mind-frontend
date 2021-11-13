import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a
            href="https://www.facebook.com/Mindconsulting2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mind_consulting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/mind-tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copy}>
        <span>MYD</span> | <span>Mind Your Data</span> &copy; 2021
      </p>
    </footer>
  )
}

export default Footer
