import Logo from "@Components/Logo";
import styles from "./styles.module.css";
import { Container } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.footerLogo}>
            <Logo size="large" />
            <p>
              Explore a comprehensive suite of over 100 perpetual and quarterly
              futures in crypto
            </p>
          </div>
          <div className={styles.footerText}>
            <p>
              This project is a college assignment created for educational
              purposes. It is intended solely to demonstrate the practical
              application of academic concepts and should not be used for any
              commercial purposes.
            </p>
          </div>
          <div id="contact" className={styles.footerContact}>
            <h2>Developed By</h2>
            <ul>
              <li>
                <a href="https://github.com/ieVictor" target="_blank">
                  Victor Gabriel Lucio
                </a>
              </li>
              <li>
                <a href="https://github.com/weslleysilv4" target="_blank">
                  Weslley Silva
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
