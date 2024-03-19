import {
  PickBlock,
  PickBox,
  SizeText,
  IconBox,
  IconJump,
  Pick,
  PickTitle,
  PickJump,
} from "./style.js";

import { ReactComponent as IconImg } from "../../../assets/images/Icon.svg";
import Tooltip from "components/tooltip/index.js";

export const PickContainer = (list, value, handle) => {
  return (
    <div>
      {list[0].type === "%about" && (
        <PickBlock>
          <SizeText>{list[0].name}</SizeText>
          <IconJump />

          <IconBox>
            <Tooltip width={"300px"} height={"40px"} option={list[0]}>
              <IconImg fill="#404040" width={"30px"} height={"30px"} />
            </Tooltip>
          </IconBox>
        </PickBlock>
      )}
      <PickBox>
        {list.map(
          (option, index) =>
            option.type !== "%about" && (
              <PickJump>
                <Tooltip width={"291px"} height={"40px"} option={option}>
                  <Pick
                    key={index}
                    pick={value === option.key ? "pick" : ""}
                    onClick={() => {
                      if (value !== option.key) {
                        handle(option.key);
                        console.log(option.key);
                      } else {
                        handle(false);
                      }
                    }}
                  >
                    <PickTitle pick={value === option.key ? "pick" : ""}>
                      {option.name}
                    </PickTitle>
                  </Pick>
                </Tooltip>
              </PickJump>
            )
        )}
      </PickBox>
    </div>
  );
};

export default PickContainer;
