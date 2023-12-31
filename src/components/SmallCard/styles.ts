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
  source: number | null | undefined;
  target: number | null | undefined;
  isSource: boolean;
  isTarget: boolean;
  shake: boolean;
  defend: boolean;
  hover: boolean;
}

export function hoverCardValidation(
  source: number | null | undefined,
  target: number | null | undefined,
  dead: boolean,
  isSource: boolean,
  isTarget: boolean
) {
  if (target !== null && target !== undefined && !dead) {
    if (isTarget) return UI_KIT.boxShadow["blue"];
    if (target === source) {
      return isSource
        ? UI_KIT.boxShadow["darkGreen"]
        : UI_KIT.boxShadow["green"];
    } else return UI_KIT.boxShadow["red"];
  }

  return "unset";
}

function backgroundCardValidation(dead: boolean, defend: boolean) {
  if (dead) return UI_KIT.colors["secondary"];
  if (defend) return UI_KIT.colors["green"];
  return UI_KIT.colors["light"];
}

export const CardWrapper = styled.div<CardProps>`
  background-color: ${({ dead, defend }) =>
    backgroundCardValidation(dead, defend)};
  width: 100%;
  transform: ${({ isSource, hover }) =>
    isSource ? "scale(1.15, 1.15)" : hover ? "scale(1.05, 1.05)" : "unset"};
  z-index: ${({ isSource }) => (isSource ? "1" : "unset")};
  max-height: 100%;
  display: flex;
  flex-direction: row;
  padding: 8px;
  box-sizing: border-box;
  column-gap: 8px;
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
  box-shadow: ${({ source, target, dead, isSource, isTarget }) =>
    hoverCardValidation(source, target, dead, isSource, isTarget)};
  @keyframes tilt-shaking {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0eg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  animation: ${({ shake }) =>
    shake ? "tilt-shaking 0.2s normal ease-in" : "unset"};
  &:hover {
    cursor: ${({ target, isSource }) =>
      (target === 0 || target) && !isSource ? "pointer" : "not-allowed"};
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
  paralyzed: boolean;
}

export const DeadIndicator = styled.div<DeadIndicatorProps>`
  max-height: ${({ dead, paralyzed }) => (dead || paralyzed ? "300px" : "0")};
  transition: max-height 2s;
  position: absolute;
  background-color: ${({ dead }) =>
    dead ? UI_KIT.colors["dark-blue"] : UI_KIT.colors["light"]};
  opacity: 70%;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
