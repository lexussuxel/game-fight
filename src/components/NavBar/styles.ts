import styled from "@emotion/styled";
import { UI_KIT } from "../../UI";

interface NavWrapperProps {
  reverse: boolean;
}

export const NavWrapper = styled.div<NavWrapperProps>`
  height: 24vh;
  display: flex;
  flex-direction: ${({ reverse }) => (!reverse ? "row" : "row-reverse")};
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const PlayersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  box-sizing: border-box;
`;
