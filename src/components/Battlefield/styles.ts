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

export const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export const Divider = styled.hr`
  width: 90%;
  border-color: ${UI_KIT.colors["secondary"]};
  border-style: solid;
`;
