import { useState } from "react";
import styles from "./NewsFeed.module.css";
import SideBar from "../../components/SideBar/SideBar";
import StoryBar from "./StoryBar/StoryBar";
import CreatingPost from "./CreatingPost/CreatingPost";
import List from "./Posts/List";
import Grid from "./Posts/Grid";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import Footer from "../../components/Footer/Footer";

function NewsFeed() {
  const [layout, setLayout] = useState("list");

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.content}>
        <StoryBar />
        <CreatingPost handleLayout={setLayout} layout={layout} />
        {layout === "list" ? <List /> : <Grid />}
        <Footer />
      </div>
      <RightSideBar />
    </div>
  );
}

export default NewsFeed;
