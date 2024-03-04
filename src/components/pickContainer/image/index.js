import { useState } from "react";
import {} from "./style.js";

import { ReactComponent as IconImg } from "../../../assets/images/Icon.svg";
import Tooltip from "components/tooltip/index.js";

// todo DnD

export const ImageContainer = (list) => {
  const [preview, setPreview] = useState("assets/image/default.jpg");
  const [pickButton, setPickButton] = useState(false);
  return <div></div>;
};

export default ImageContainer;
