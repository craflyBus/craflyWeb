import { useState } from "react";
import { PickBox, Pick, PickTitle, PickJump } from "./style.js";

import Tooltip from "components/tooltip/index.js";

export const PickContainer = (list) => {
  const [pickButton, setPickButton] = useState(false);
  return (
    <PickBox>
      {list.map((option, index) => (
        <PickJump>
          <Tooltip width={"291px"} height={"40px"} option={option}>
            <Pick
              key={index}
              pick={pickButton === option.name ? "pick" : ""}
              onClick={() => {
                setPickButton(option.name);
                console.log(option.name);
              }}
            >
              <PickTitle pick={pickButton === option.name ? "pick" : ""}>
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
