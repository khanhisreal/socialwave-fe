import { useState } from "react";
import styles from "./FileUploader.module.css";
import axios from "axios";
import uploadImg from "../../assets/images/Pages/upload_icon.png";

const UploadStatus = {
  IDLE: "IDLE",
  UPLOADING: "UPLOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export default function FileUploader({ handleShowModal }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(UploadStatus.IDLE);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewURL, setPreviewURL] = useState(null);

  function handleFileChange(e) {
    if (e.target.files) {
      // access the first file in the array of files
      setFile(e.target.files[0]);
      setPreviewURL(URL.createObjectURL(e.target.files[0]));
      console.log(typeof e.target.files[0]);
      console.log(e.target.files[0]);
      console.log(typeof e.target.files[0]);
      URL.revokeObjectURL(e.target.files[0]);
    }
  }

  async function handleFileUpload() {
    // if we don't have a file, return it early
    if (!file) {
      return;
    }

    setStatus(UploadStatus.UPLOADING);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("https://httpbin.org/post", formData),
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const progress = progressEvent.total
              ? Math.round(progressEvent.loaded * 100) / progressEvent.total
              : 0;
            setUploadProgress(progress);
          },
        };

      setStatus(UploadStatus.SUCCESS);
      setUploadProgress(100);
    } catch {
      setStatus(UploadStatus.ERROR);
      setUploadProgress(0);
    }
  }

  const upload = (
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
        <img src={uploadImg} alt="" />
        <p>
          Drag and drop or click here
          <br /> to upload image
        </p>
        <span>Upload any images from desktop</span>
      </div>
    </>
  );

  const imgFileUploaded = (
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
          {!file && upload}
          {file && imgFileUploaded}
        </label>
        {file && status != UploadStatus.upload && (
          <div className={styles.functionButtons}>
            <button onClick={() => setFile(null)}>Cancel</button>
            <button>Upload</button>
          </div>
        )}
      </div>
      {/* <div
        className="tempData"
        style={{ width: "50%", backgroundColor: "white" }}
      >
        Data:
        {file && (
          <div>
            <p>File name: {file.name}</p>
            <p>File size: {(file.size / 1024).toFixed(2)} KB</p>
            <p>Type: {file.type}</p>
          </div>
        )}
      </div> */}
    </div>
  );
}
