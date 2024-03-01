import { useState } from "react";
import { PickBox, Pick, PickTitle, PickJump } from "./style.js";

import Tooltip from "components/tooltip/index.js";

export const PickContainer = (list) => {
  const [pickMaterial, setPickMaterial] = useState(false);
  return (
    <PickBox>
      {list.map((option, index) => (
        <PickJump>
          <Tooltip width={"300px"} height={"40px"} option={option}>
            <Pick
              key={index}
              pick={pickMaterial === option.name ? "pick" : ""}
              onClick={() => {
                setPickMaterial(option.name);
                console.log(option.name);
              }}
            >
              <PickTitle pick={pickMaterial === option.name ? "pick" : ""}>
                {option.name}
              </PickTitle>
            </Pick>
          </Tooltip>
        </PickJump>
      ))}
    </PickBox>
  );
};

export default PickContainer;
