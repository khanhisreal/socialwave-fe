import { useState, useEffect } from "react";
import styles from "./NewsFeed.module.css";
import SideBar from "../../components/SideBar/SideBar";
import StoryBar from "./StoryBar/StoryBar";
import CreatingPost from "./CreatingPost/CreatingPost";
import List from "./Posts/List";
import Grid from "./Posts/Grid";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import Footer from "../../components/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import { useUser } from "../../store/UserContext";
import { getAuthToken } from "../../util/auth";
import api from "../../api/api";

function NewsFeed() {
  const [layout, setLayout] = useState("list");
  const loaderUser = useLoaderData();
  const { setUser } = useUser();
  //fetch posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const fetchPosts = async () => {
    const token = getAuthToken();
    if (!token) {
      return;
    }
    try {
      const response = await api.get("/api/posts/full");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  //refresh posts when user changes
  useEffect(() => {
    fetchPosts();
  }, [refresh]);

  const handlePostUploadSuccess = () => {
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    setUser(loaderUser);
  }, [loaderUser, setUser]);

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.content}>
        <StoryBar />
        <CreatingPost
          handleLayout={setLayout}
          layout={layout}
          onUploadSuccess={handlePostUploadSuccess}
        />
        {layout === "list" ? (
          loading ? (
            <p>Loading...</p>
          ) : (
            <List posts={posts} />
          )
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <Grid posts={posts} />
        )}

        <Footer />
      </div>
      <RightSideBar />
    </div>
  );
}

export default NewsFeed;
