import { useState } from "react";
import { Preview, File, PreviewMsg, PreviewDesc } from "./style.js";

import { ReactComponent as IconImg } from "../../../assets/images/Icon.svg";
import { useToast } from "components/toast/index.js";

// todo DnD

export const ImageContainer = (list) => {
  const [isActive, setActive] = useState(false);
  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);

  const showToast = useToast();

  const handleDragOver = (event) => {
    event.preventDefault(); // 필수 1
  };

  console.log();

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    // readImage(file);
    if (file.size > 3 * 1024 * 1024) {
      showToast("파일이 너무 큽니다", "attn");
    }

    setActive(false);
  };

  return (
    <div>
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
