import styles from "./Authentication.module.css";
import AuthForm from "./AuthForm";

export default function AuthenticationPage() {
  return (
    <div className={styles.container}>
      <AuthForm />
    </div>
  );
}
