import { useState } from "react";
import styles from "./StoryBar.module.css";
import StoryBuilder from "./StoryBuilder";
import stories from "./tempData";

const username = (name) => {
  return name.length > 10 ? `${name.slice(0, 8)}...` : name;
};

export default function StoryBar() {
  const [index, setIndex] = useState(0);
  const visibleCount = 6;

  function nextStory() {
    setIndex((prevIndex) => {
      const maxIndex = stories.length - visibleCount;
      return Math.min(prevIndex + visibleCount, maxIndex);
    });
  }

  function prevStory() {
    setIndex((prevIndex) => Math.max(prevIndex - visibleCount, 0));
  }

  return (
    <div className={styles.container}>
      <h1>Stories</h1>
      <div className={styles.storyContainer}>
        <button
          className={`${styles.button} ${styles.prev}`}
          onClick={prevStory}
          disabled={index === 0}
          style={{ visibility: index === 0 ? "hidden" : "visible" }}
        >
          ◀
        </button>
        <div className={styles.stories}>
          <div
            className={styles.storyWrapper}
            style={{ transform: `translateX(-${index * 70}px)` }}
          >
            {stories.map((story) => (
              <StoryBuilder
                imgSrc={story.user.userAvatar}
                userName={username(story.user.userName)}
                updateTime={story.updateTime}
                key={story.storyId}
              />
            ))}
          </div>
        </div>
        <button
          className={`${styles.button} ${styles.next}`}
          onClick={nextStory}
          disabled={index >= stories.length - visibleCount}
          style={{
            visibility:
              index >= stories.length - visibleCount ? "hidden" : "visible",
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
