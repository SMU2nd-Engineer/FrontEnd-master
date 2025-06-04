import React from "react";
import { useState } from "react";
import * as UpImg from "../styles/ImageUploadDesign";
import imageCompression from "browser-image-compression";
import { useModalStore } from "@/store/useModalStore";
import { useEffect } from "react";

const ImageUpload = ({ uploadImage, setUploadImage }) => {
  const [previewUrl, setPreviewUrl] = useState(uploadImage);
  const openModal = useModalStore((state) => state.open);

  useEffect(() => {
    const isStringArray = uploadImage.every((item) => typeof item === "string");
    if (isStringArray) {
      setPreviewUrl(uploadImage);
    }
  }, [uploadImage]);

  const handleFileChange = async (event) => {
    if (uploadImage.length >= 5) {
      await openModal("alert", {
        title: "용량 초과",
        message: "사진은 5개 이상 등록할 수 없습니다.",
      });
      return;
    }

    const newFiles = Array.from(event.target.files);
    const compressedFiles = [];
    let totalsize = 0;

    for (const file of newFiles) {
      try {
        const options = {
          maxSizeMB: 0.3,
          maxWidthorHeight: 1024,
          useWebWorker: true,
        };

        const compressedFile = await imageCompression(file, options);
        totalsize += compressedFile.size;

        if (totalsize > 2 * 1024 * 1024) {
          await openModal("alert", {
            title: "용량 초과",
            message: "사진이 너무 큽니다.",
          });
          return;
        }

        compressedFiles.push(compressedFile);
        const compressedBlob = await imageCompression.getDataUrlFromFile(
          compressedFile
        );
        setPreviewUrl((prev) => [...prev, compressedBlob]);
      } catch (err) {
        console.error("이미지 압축 실패:", err);
      }
    }

    setUploadImage((prev) => [...prev, ...compressedFiles]);
  };

  const handleDelete = (index) => {
    const updatePreview = previewUrl.filter((_, idx) => idx !== index);
    const uploadFiles = uploadImage.filter((_, idx) => idx !== index);

    setPreviewUrl(updatePreview);
    setUploadImage(uploadFiles);
  };

  return (
    <UpImg.SelectImg>
      <label htmlFor="input-file-button">사진 선택</label>
      <input
        type="file"
        id="input-file-button"
        style={{ display: "none" }}
        multiple
        onChange={handleFileChange}
      />

      <div className="preimagelist">
        {previewUrl.map((image, idx) => (
          <div key={idx} style={{ position: "relative" }}>
            <img src={image} alt={`upload-preview-${idx}`} />
            <button onClick={() => handleDelete(idx)} type="button">
              {" "}
              &times;{" "}
            </button>
          </div>
        ))}
      </div>
    </UpImg.SelectImg>
  );
};

export default ImageUpload;
