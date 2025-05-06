import { useEffect, useState } from "react";
import { MdInsertEmoticon } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import styles from "./FileUploader.module.css";
import PropTypes from "prop-types";
import api from "../../api/api";
import { getAuthToken } from "../../util/auth";
import { useUser } from "../../store/UserContext";

const UploadStatus = {
  IDLE: "IDLE",
  UPLOADING: "UPLOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export default function FileUploader({ handleShowModal, onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(UploadStatus.IDLE);
  const [previewURL, setPreviewURL] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const { user } = useUser();

  const onEmojiClick = (emojiObject) => {
    console.log(emojiObject.data);
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  function handleFileChange(e) {
    if (e.target.files) {
      // access the first file in the array of files
      const newFile = e.target.files[0];
      const maxSize = 4 * 1024 * 1024; //4MB

      if (newFile.size > maxSize) {
        alert("File size exceeds the 4MB limit.");
        return;
      }

      setFile(newFile);
      setPreviewURL(URL.createObjectURL(newFile));
    }
  }

  // revoke the URL after the component is unmounted
  useEffect(() => {
    return () => {
      if (previewURL) {
        URL.revokeObjectURL(previewURL);
      }
    };
  }, [previewURL]);

  function handleFileUpload() {
    // if we don't have a file, don't execute the rest
    if (!file) {
      return;
    }

    setStatus(UploadStatus.UPLOADING);

    // prepare a formData object to save the file and its caption
    const formData = new FormData();
    formData.append("file", file);
    formData.append("caption", inputStr);
    formData.append("userId", user.userId);

    const token = getAuthToken();

    if (!token) {
      alert("You are not logged in!");
      return;
    }

    const fetchFileUpload = async () => {
      try {
        await api.post("/api/posts/upload", formData);

        setStatus(UploadStatus.SUCCESS);
        handleShowModal(false);

        if (onUploadSuccess) {
          onUploadSuccess();
        }
      } catch (error) {
        setStatus(UploadStatus.ERROR);
        console.log(error);
      }
    };

    fetchFileUpload();
  }

  const noImg = (
    <>
      <input
        type="file"
        onChange={handleFileChange}
        name=""
        id="input-file"
        accept="image/*"
        hidden
      />
      <div className={styles.selectImg}>
        <img src="/upload_icon.png" alt="" />
        <p>
          Drag and drop or click here
          <br /> to upload image
        </p>
        <span>Upload any images from desktop</span>
      </div>
    </>
  );

  const uploadedImg = (
    <div className={styles.imgContainer}>
      <img src={previewURL} className={styles.uploadImg} alt="Uploaded image" />
    </div>
  );

  return (
    <div className={styles.container}>
      <span onClick={() => handleShowModal(false)} className={styles.close}>
        X
      </span>
      <div className={styles.dropArea}>
        <h1>Create new post</h1>
        <label htmlFor="input-file">
          {!file && noImg}
          {file && uploadedImg}
        </label>
        {file && status != UploadStatus.UPLOADING && (
          <>
            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="write your caption..."
                className={styles.input}
                value={inputStr}
                onChange={(e) => setInputStr(e.target.value)}
              />
              <div
                id={styles.pickerWrapper}
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <MdInsertEmoticon />
              </div>
              {showEmojiPicker && (
                <EmojiPicker
                  className={styles.emojiPicker}
                  onEmojiClick={onEmojiClick}
                />
              )}
            </form>
            <div className={styles.functionButtons}>
              <button onClick={() => setFile(null)}>Cancel</button>
              <button onClick={handleFileUpload}>Upload</button>
            </div>
          </>
        )}
      </div>
      {}
    </div>
  );
}

FileUploader.propTypes = {
  handleShowModal: PropTypes.func,
  onUploadSuccess: PropTypes.func,
};
