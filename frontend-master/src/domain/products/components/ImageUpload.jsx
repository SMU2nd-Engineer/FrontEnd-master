import React from 'react';
import { useState } from 'react';
import * as UpImg from "../styles/ImageUploadDesign"
import imageCompression from 'browser-image-compression';

const ImageUpload = ({uploadImage, setUploadImage}) => {
  const [previewUrl, setPreviewUrl] = useState([]);


  const handleFileChange = async (event) => {
    const files = event.target.files;
    
      const newFiles = Array.from(files).slice(0, 6 - uploadImage.length); 
      const compressedFiles = [];
      const newPreviewUrls = [];
      let totalsize = 0;

      for (const file of newFiles) {
        try {
          const options = {
            maxSizeMB : 0.3,
            maxWidthorHeight : 1024,
            useWebWorker: true,
          };

          const compressedFile = await imageCompression(file, options);
          totalsize += compressedFile.size;

          if (totalsize > 2 * 1024 * 1024) {
            // 팝업으로 
            alert("사진이 너무 큽니다. ")
            return;
          }

          compressedFiles.push(compressedFile);

          const reader = new FileReader();
              reader.onloadend = () => {
                newPreviewUrls.push(reader.result);
                    // 모든 이미지의 preview가 준비됐을 때만 업데이트
                if (newPreviewUrls.length === compressedFiles.length) {
                      setPreviewUrl((prev) => [...prev, ...newPreviewUrls].slice(0, 6));
                }
          };
            reader.readAsDataURL(compressedFile);
        } catch (err) {
          console.error("이미지 압축 실패:", err);
      }
    }

      setUploadImage((prev) => [...prev, ...compressedFiles].slice(0, 6));
  };

  const handleDelete = (index) => {
    const updatePreview = previewUrl.filter((_, idx) => idx !== index);

    const uploadFiles = uploadImage.filter((_, idx) => idx !== index);

    setPreviewUrl(updatePreview);
    setUploadImage(uploadFiles);
  }



 return (
     <UpImg.SelectImg>
      <label htmlFor="input-file-button"  >
       사진 선택
      </label>
      <input type="file" id="input-file-button" style={{display: 'none'}} multiple onChange={handleFileChange} />

      <div className="preimagelist">
        {previewUrl.map((image, idx) => (
          <div key={idx} style={{ position: 'relative' }}>
            <img src={image} alt={`upload-preview-${idx}`} />
            <button onClick={() => handleDelete(idx)}> &times; </button>
          </div>
        ))}
      </div>
    </UpImg.SelectImg>
);
}

export default ImageUpload;