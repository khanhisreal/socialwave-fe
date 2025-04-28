import { useEffect, useState } from "react";
import styles from "./NewsFeed.module.css";
import SideBar from "../../components/SideBar/SideBar";
import StoryBar from "./StoryBar/StoryBar";
import CreatingPost from "./CreatingPost/CreatingPost";
import List from "./Posts/List";
import Grid from "./Posts/Grid";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import Footer from "../../components/Footer/Footer";
import { getUserToken } from "../../util/auth";
import api from "../../api/api";
import { useUser } from "../../store/UserContext";

function NewsFeed() {
  const [layout, setLayout] = useState("list");
  const { setUser } = useUser();

  useEffect(() => {
    /**
     * Fetches user data from the server using the user token.
     */
    const fetchUserData = async () => {
      try {
        const data = getUserToken();

        if (data) {
          const response = await api.get(`/api/users/fetch/${data.sub}`);
          setUser(response.data);
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [setUser]);

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
