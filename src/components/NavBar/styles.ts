import styled from "@emotion/styled";
import { UI_KIT } from "../../UI";

interface NavWrapperProps {
  reverse: boolean;
}

export const NavWrapper = styled.div<NavWrapperProps>`
  height: 24vh;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row" : "row-reverse")};
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

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  row-gap: 10px;
`;

export const ButtonStyled = styled.button`
  display: flex;
  text-align: center;
  padding: 10px 15px;
  background-color: ${UI_KIT.colors["dark-blue"]};
  color: ${UI_KIT.colors["light"]};
  outline: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: ${UI_KIT.colors["dark"]};
  }
`;

export const DescriptionText = styled.div`
  width: 30vw;
  padding: 8px;
  background-color: ${UI_KIT.colors["light"]};
  color: ${UI_KIT.colors["dark"]};
  font-size: 32px;
`;
