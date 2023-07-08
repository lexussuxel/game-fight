import { UI_KIT } from "./../../UI";
import styled from "@emotion/styled";

export const SmallCardWrapper = styled.div`
  max-width: calc(100% / 3);
  width: calc(100% / 3);
  padding: 10px;
  box-sizing: border-box;
`;

interface CardProps {
  dead: boolean;
  source: string | null;
  target: string | null | undefined;
}

function hoverCardValidation(dead: boolean, target: string | null | undefined) {
  if (dead) return "unset";
  if (target) return UI_KIT.boxShadow[target];
  else if (target === null) return "unset";
  return UI_KIT.boxShadow["light"];
}

export const CardWrapper = styled.div<CardProps>`
  background-color: ${({ dead }) =>
    dead ? UI_KIT.colors["secondary"] : UI_KIT.colors["light"]};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 8px;
  box-sizing: border-box;
  column-gap: 8px;
  position: relative;
  box-shadow: ${({ source }) => (source ? UI_KIT.boxShadow[source] : "unset")};
  &:hover {
    box-shadow: ${({ dead, target }) => hoverCardValidation(dead, target)};
  }
`;

export const SmallCardImg = styled.img`
  display: flex;
  width: 20%;
  height: auto;
  background-color: white;
  aspect-ratio: 1/1;
`;

export const InfoWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  font-size: 0.5rem;
  font-family: "Press Start 2P", cursive;
  p {
    margin: 0;
  }
`;

interface DeadIndicatorProps {
  dead: boolean;
}

export const DeadIndicator = styled.div<DeadIndicatorProps>`
  display: ${({ dead }) => (dead ? "unset" : "none")};
  position: absolute;
  background-color: ${UI_KIT.colors["dark-blue"]};
  opacity: 70%;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
