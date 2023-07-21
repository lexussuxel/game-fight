import styled from "@emotion/styled/macro";
import { UI_KIT } from "../../UI";

interface FullCardWrapperProps {
  type: string;
  source: boolean;
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
  box-shadow: ${({source})=> source?UI_KIT.boxShadow.green:UI_KIT.boxShadow.grey};
  transition: box-shadow 0.5s ease-in-out;
  position: relative;
  transform: ${({source})=>source?"scale(1.05, 1.05)":"unset"};
  transition: transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
  &:hover {
    box-shadow: ${({ type }) => type};
  }
`;
export const PercentHP = styled.div<HPProps>`
  position: absolute;
  height: ${({ percent }) => percent}%;
  width: 100%;
  top: 0;
  display: none;
  opacity: 60%;
  background-color: ${({ type }) => type};
  ${FullCardWrapper}:hover & {
    display: unset;
  }
`;

export const PStyled = styled.p`
  margin: 0;
  font-size: 0.5rem;
  font-family: "Press Start 2P", cursive;
  margin-bottom: 4px;
`;

export const TitleText = styled(PStyled)`
  margin: 8px 0;
  font-size: 0.6rem;
`;

export const FullCardImg = styled.img`
  display: flex;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: white;
  height: 60%;
`;
