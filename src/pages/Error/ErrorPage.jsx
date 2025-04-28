import Header from "../../components/Header/Header";
import { getAuthToken } from "../../util/auth";
import styles from "./ErrorPage.module.css";
import { Link, Navigate, useLocation } from "react-router-dom";

export default function ErrorPage() {
  const token = getAuthToken();
  const location = useLocation();

  if (!token && location.pathname !== "/") {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <img src="/error.png" alt="" />
        <h1>This content isn&apos;t available at the moment</h1>
        <p>
          When this happens, it&apos;s usually because the owner only shared it
          with a small group of people or changed who can see it, or it&apos;s
          been deleted.
        </p>
        <Link to={"newsfeed"}>Go to News Feed</Link>
      </main>
    </div>
  );
}
