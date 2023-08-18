import styled from "@emotion/styled";
import { UI_KIT } from "../../UI";

export const BattlefiledWrapper = styled.div`
  margin: auto 20%;
  box-sizing: border-box;
  background-color: ${UI_KIT.colors["dark"]};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

interface TeamWrapperProps {
  hoverColor: "red" | "green" | undefined;
  team: number;
  source: number | undefined;
}

function TeamWrapperHover(
  team: number,
  source: number | undefined,
  hoverColor: string | undefined
) {
  if (source && hoverColor) {
    if (hoverColor === "red" && team !== source)
      return "inset " + UI_KIT.boxShadow["red"];

    if (hoverColor === "green" && team === source)
      return "inset " + UI_KIT.boxShadow["green"];
  }
  return "unset";
}

export const TeamWrapper = styled.div<TeamWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  transition: box-shadow 0.5s ease-in-out;
  box-shadow: ${({ team, source, hoverColor }) =>
    TeamWrapperHover(team, source, hoverColor)};
`;

export const Divider = styled.hr`
  width: 90%;
  border-color: ${UI_KIT.colors["secondary"]};
  border-style: solid;
`;
