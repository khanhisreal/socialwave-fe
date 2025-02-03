import styles from "./Body.module.css";
import PersonalWall from "./PersonalWall/PersonalWall";

export default function Body() {
  return (
    <>
      <div className={styles.container}>
        <PersonalWall />
      </div>
    </>
  );
}
