import styles from "./RightSideBar.module.css";

export default function UserIndicator({ post }) {
  return (
    <div className={styles.user}>
      <div className={styles.left}>
        <img src={post.user[0].avatarImageSource} alt="" />
        <div className={styles.infor}>
            <p>{post.user[0].name}</p>
            <p>{post.user[0].userName}</p>
        </div>
      </div>
      <div className={styles.right}>
        <button>follow</button>
      </div>
    </div>
  );
}
