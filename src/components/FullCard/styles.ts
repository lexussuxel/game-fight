import styled from "@emotion/styled/macro";
import { UI_KIT } from "../../UI";

interface FullCardWrapperProps {
  source: boolean;
  enemy: boolean;
}

interface HPProps extends FullCardWrapperProps {
  percent: number;
}

export const FullCardWrapper = styled.div<FullCardWrapperProps>`
  height: 100%;
  padding: 8px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${UI_KIT.colors["light"]};
  color: ${UI_KIT.colors["dark-blue"]};
  box-shadow: ${({ source }) =>
    source ? UI_KIT.boxShadow.green : UI_KIT.boxShadow.grey};
  transition: box-shadow 0.5s ease-in-out;
  position: relative;
  z-index: ${({ source }) => (source ? 1 : "unset")};
  transform: ${({ enemy }) => (enemy ? "scale(1.05, 1.1)" : "unset")};
  transition: transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
  &:hover {
    box-shadow: ${({ enemy }) =>
      enemy ? UI_KIT.boxShadow.green : UI_KIT.boxShadow.red};
  }
`;
export const PercentHP = styled.div<HPProps>`
  position: absolute;
  height: ${({ percent }) => percent}%;
  width: 100%;
  bottom: 0;
  display: none;
  opacity: 60%;
  background-color: ${({ enemy }) =>
    enemy ? UI_KIT.colors.green : UI_KIT.colors.red};
  ${FullCardWrapper}:hover & {
    display: flex;
  }
`;

export const PStyled = styled.p`
  margin: 0;
  font-size: calc(1px + 0.390625vw);
  font-family: "Press Start 2P", cursive;
  margin-bottom: 4px;
`;

export const TitleText = styled(PStyled)`
  margin: 8px 0;
  font-size: calc(2px + 0.390625vw);
`;

export const FullCardImg = styled.img`
  display: flex;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: white;
  height: 60%;
`;
