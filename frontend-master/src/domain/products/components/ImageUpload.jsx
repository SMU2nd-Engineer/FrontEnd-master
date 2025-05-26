import React from 'react';
import { useState } from 'react';

const ImageUpload = ({uploadImage, setUploadImage}) => {
  const [previewUrl, setPreviewUrl] = useState([]);


  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).slice(0, 10); 
      
      // 파일 상태 업데이트
      const updatedFiles = [...uploadImage, ...newFiles].slice(0,10);
      setUploadImage(updatedFiles);

      // 미리보기 URL 생성
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const image_Url = reader.result;
          setPreviewUrl((prev) => {
            const updatedUrls  = [...prev, image_Url].slice(0, 10);
            return updatedUrls ;
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDelete = (index) => {
    const updatePreview = previewUrl.filter((_, idx) => idx !== index);

    const uploadFiles = uploadImage.filter((_, idx) => idx !== index);

    setPreviewUrl(updatePreview);
    setUploadImage(uploadFiles);
  }



 return (
     <div>
      <input type="file" multiple onChange={handleFileChange} />

      <div className="preimagelist">
        {previewUrl.map((image, idx) => (
          <div key={idx} style={{ position: 'relative' }}>
            <img src={image} alt={`upload-preview-${idx}`} />
            <button onClick={() => handleDelete(idx)}> &times; </button>
          </div>
        ))}
      </div>
    </div>
);
}

export default ImageUpload;