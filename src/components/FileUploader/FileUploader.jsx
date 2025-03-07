import { useState } from "react";
import styles from "./FileUploader.module.css";
import axios from "axios";

const UploadStatus = {
  IDLE: "IDLE",
  UPLOADING: "UPLOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export default function FileUploader() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(UploadStatus.IDLE);
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleFileChange(e) {
    if (e.target.files) {
      // access the first file in the array of files
      setFile(e.target.files[0]);
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

  return (
    <div className={styles.container}>
      modal content
      {/* <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <p>File name: {file.name}</p>
          <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
          <p>Type: {file.type}</p>
        </div>
      )}

      <div>
        progress:
        <div className="progress-bar" style={{ width: `${uploadProgress}%` }}>
          {uploadProgress}% uploaded
        </div>
      </div>

      {file && status !== UploadStatus.UPLOADING && (
        <button
          style={{
            backgroundColor: "var(--whitish)",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
          }}
          onClick={handleFileUpload}
        >
          Upload
        </button>
      )}

      {status === UploadStatus.UPLOADING && <p>Uploading...</p>}
      {status === UploadStatus.SUCCESS && <p>Upload successful!</p>}
      {status === UploadStatus.ERROR && <p>Upload failed!</p>} */}
    </div>
  );
}
