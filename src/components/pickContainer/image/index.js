import { useState } from "react";
import { Upload, Preview, File, UploadDesc, UploadMsg } from "./style.js";

import { ReactComponent as IconImg } from "../../../assets/images/Icon.svg";
import { useToast } from "components/toast/index.js";

export const ImageContainer = (list) => {
  const [isActive, setActive] = useState(false);
  const [imgs, setImgs] = useState([]);
  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);

  const showToast = useToast();

  const handleImageClick = (index) => {
    setImgs((prevImgs) => prevImgs.filter((_, i) => i !== index));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log(file.size + " " + 3 * 1024 * 1024);
      if (file.size > 3 * 1024 * 1024) {
        showToast("업로드한 파일이 너무 큽니다", "attn");
      } else {
        showToast("업로드 완료", "info");
        console.log(file.name);
        setImgs((imgs) => [...imgs, file]);
      }
      console.log("d");
    }

    setActive(false);
  };

  return (
    <div>
      {imgs.map((image, index) => (
        <Preview
          key={index}
          src={URL.createObjectURL(image)}
          alt={`이미지-${index}`}
          onClick={() => handleImageClick(index)}
        />
      ))}
      <Upload
        className={isActive ? " active" : ""}
        onDragEnter={handleDragStart}
        onDragOver={handleDragOver}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
      >
        <File type="file" />
        <IconImg fill="var(--deep-gray)" />
        <UploadMsg>클릭 혹은 파일을 이곳에 드롭하세요.</UploadMsg>
        <UploadDesc>파일당 최대 3MB</UploadDesc>
      </Upload>
    </div>
  );
};

export default ImageContainer;
