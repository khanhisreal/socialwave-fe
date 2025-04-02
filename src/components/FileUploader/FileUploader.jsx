import { useEffect, useState } from "react";
import { MdInsertEmoticon } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import styles from "./FileUploader.module.css";
import PropTypes from "prop-types";
import api from "../../api/api";

const UploadStatus = {
  IDLE: "IDLE",
  UPLOADING: "UPLOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export default function FileUploader({ handleShowModal }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(UploadStatus.IDLE);
  const [previewURL, setPreviewURL] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputStr, setInputStr] = useState("");

  const onEmojiClick = (emojiObject) => {
    console.log(emojiObject.data);
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  function handleFileChange(e) {
    if (e.target.files) {
      // access the first file in the array of files
      const newFile = e.target.files[0];
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

  // log the file and its type - testing purpose
  useEffect(() => {
    if (file) {
      console.log(file);
      console.log("Type of file: " + typeof file);
    }
  }, [file]);

  function handleFileUpload() {
    // if we don't have a file, don't execute the rest
    if (!file) {
      return;
    }

    setStatus(UploadStatus.UPLOADING);

    // create a new FormData object
    const formData = new FormData();
    // append the file to the formData object
    formData.append("file", file);

    const fetchFileUpload = async () => {
      try {
        await api.post("/api/posts/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setStatus(UploadStatus.SUCCESS);
      } catch (error) {
        setStatus(UploadStatus.ERROR);
        alert(error);
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
    <img src={previewURL} className={styles.uploadImg} alt="Uploaded image" />
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
};
