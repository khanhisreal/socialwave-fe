import styles from "./RightSideBar.module.css";
import UserIndicator from "./UserIndicator";
import posts from "./data.js";
import { FaPenAlt } from "react-icons/fa";

export default function RightSideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.explore}>
        <h1>Check out these blogs</h1>
        <div className={styles.wrapper}>
          <div className={styles.users}>
            {posts.map((post) => (
              <UserIndicator key={post.id} post={post} />
            ))}
          </div>
          <button>Explore all of SocialWave</button>
        </div>
      </div>
      <div className={styles.createStory}>
        <h1>Create a story</h1>
        <div className={styles.wrapper}>
          <FaPenAlt />
          <button>Create Story</button>
        </div>
      </div>
      <div className={styles.sponsored}>
        <h1>Sponsored</h1>
        <div className={styles.wrapper}>
          <div className={styles.primary}>
            <div className={styles.left}>
              <img src="https://picsum.photos/3840/2160?random=1" alt="" />
            </div>
            <div className={styles.right}>
              <h1>booking.com</h1>
              <p>booking.com</p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.primary}>
            <div className={styles.left}>
              <img src="https://picsum.photos/3840/2160?random=2" alt="" />
            </div>
            <div className={styles.right}>
              <h1>hotels.com</h1>
              <p>hotels.com</p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.primary}>
            <div className={styles.left}>
              <img src="https://picsum.photos/3840/2160?random=3" alt="" />
            </div>
            <div className={styles.right}>
              <h1>travel.com</h1>
              <p>travel.com</p>
            </div>
          </div>
        </div>
        <div style={{ height: "50px" }}></div>
      </div>
    </div>
  );
}
