import styles from "./Body.module.css";
import PersonalWall from "./PersonalWall/PersonalWall";
import SideBar from  "../SideBar/SideBar.jsx"
export default function Body() {
  return (
    <>
      <div className={styles.container}>
        <PersonalWall />
          <SideBar/>
      </div>
    </>
  );
}
