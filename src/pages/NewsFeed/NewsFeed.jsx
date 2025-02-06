import styles from "./NewsFeed.module.css";
import SideBar from "../../components/SideBar/SideBar.jsx";

function NewsFeed() {
  return (
    <div className={styles.container}>
        <SideBar/>
    </div>
  );
}

export default NewsFeed;
