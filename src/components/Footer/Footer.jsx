import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <a href="#">About</a>
        <a href="#">Help</a>
        <a href="#">Press</a>
        <a href="#">API</a>
        <a href="#">Jobs</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Locations</a>
        <a href="#">Top Accounts</a>
        <a href="#">Hashtags</a>
        <a href="#">Language</a>
      </div>
      <div className={styles.footerCopy}>
        <p>&copy; {currentYear} SocialWave</p>
      </div>
    </footer>
  );
}
