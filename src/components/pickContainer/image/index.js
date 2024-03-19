import { useState } from "react";
import { Preview, File, PreviewMsg, PreviewDesc } from "./style.js";

import { ReactComponent as IconImg } from "../../../assets/images/Icon.svg";
import { useToast } from "components/toast/index.js";

export const ImageContainer = (list) => {
  const [isActive, setActive] = useState(false);
  const [imgs, setImgs] = useState([]);
  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);

  const showToast = useToast();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size > 3 * 1024 * 1024) {
        showToast("업로드한 파일이 너무 큽니다", "attn");
      } else {
        showToast("업로드됨 : " + file.name, "info");
        setImgs([...imgs, file]);
      }
      console.log("d");
    }

    setActive(false);
  };

  return (
    <div>
      {imgs.map((image, index) => (
        <img
          key={index}
          src={URL.createObjectURL(image)}
          alt={`이미지-${index}`}
          style={{ width: "100px", height: "auto", marginRight: "10px" }}
        />
      ))}
      <Preview
        className={isActive ? " active" : ""}
        onDragEnter={handleDragStart}
        onDragOver={handleDragOver}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
      >
        <File type="file" />
        <IconImg fill="var(--deep-gray)" />
        <PreviewMsg>클릭 혹은 파일을 이곳에 드롭하세요.</PreviewMsg>
        <PreviewDesc>파일당 최대 3MB</PreviewDesc>
      </Preview>
    </div>
  );
};

export default ImageContainer;
