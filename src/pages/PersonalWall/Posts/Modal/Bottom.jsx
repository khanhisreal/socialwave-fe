import { useState } from "react";
import styles from "./Bottom.module.css";
import PropTypes from "prop-types";
import Picker from "emoji-picker-react";

// regHeart: normal hear - faheart: liked post
// regBookmark: normal bookmark - fabookmark: saved post
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
} from "react-icons/fa";
import { MdInsertEmoticon } from "react-icons/md";

export default function Bottom({ likeCount }) {
  const [isHidden, setIsHidden] = useState(true);
  const [inputStr, setInputStr] = useState("");

  function handleIsHidden() {
    setIsHidden((prevState) => !prevState);
  }

  function onEmojiClick(emojiData) {
    console.log(emojiData.emoji); // Check if emoji is correctly logged
    setInputStr((prevInput) => prevInput + emojiData.emoji);
    setIsHidden(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.functionalBar}>
        <div className={styles.left}>
          <button>
            <FaRegHeart />
          </button>
          <button>
            <FaRegComment />
          </button>
        </div>
        <div className={styles.right}>
          <button>
            <FaRegBookmark />
          </button>
        </div>
      </div>
      <div className={styles.reactions}>
        <span>
          {likeCount > 1 ? `${likeCount} likes` : `${likeCount} like`}
        </span>
      </div>
      <div className={styles.inputBar}>
        <button>
          <MdInsertEmoticon onClick={handleIsHidden} />
          {!isHidden && (
            <Picker
              className={styles.emojiPicker}
              onEmojiClick={(emojiData) => onEmojiClick(emojiData)}
            />
          )}
        </button>
        <input
          type="text"
          placeholder="Add a comment..."
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
        />
        <button>Post</button>
      </div>
    </div>
  );
}

Bottom.propTypes = {
  likeCount: PropTypes.number,
};
