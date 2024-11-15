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
          <div className={styles.footerContact}>
            <h2>Developed By</h2>
            <ul>
              <li>Victor Gabriel Lucio</li>
              <li>Weslley Silva</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
