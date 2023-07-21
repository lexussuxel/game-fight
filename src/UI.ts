import styled from "@emotion/styled";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

interface UI_KIT_TYPE {
  colors: {
    [name: string]: string;
  };
  boxShadow: {
    [name: string]: string;
  };
}
export const UI_KIT: UI_KIT_TYPE = {
  colors: {
    light: "#EAEAEA",
    main: "#CBC5EA",
    secondary: "#73628A",
    "dark-blue": "#313D5A",
    dark: "#3D315B",
    Melee: "#8E5572",
    Paralyzer: "#D8E2DC",
    HealerMass: "#EFE9AE",
    HealerSingle: "#BBBE64",
    Range: "#6DAEDB",
    Mage: "#FF928B",
  },
  boxShadow: {
    grey: "-3px 5px 15px 0px #7A7A7A40",
    Melee: "0px 0px 19px 4px #8E5572",
    Paralyzer: "0px 0px 19px 4px #D8E2DC",
    HealerMass: "0px 0px 19px 4px #EFE9AE",
    HealerSingle: "0px 0px 19px 4px #BBBE64",
    Range: "0px 0px 19px 4px #6DAEDB",
    Mage: "0px 0px 19px 4px #FF928B",
    light: "0px 0px 15px 0px #eaeaeaad",
    red: "0px 5px 15px 0px #ff3c38",
    blue: "0px 5px 15px 0px #064789",
    green :"0px 5px 15px 0px #94FBAB",
    darkGreen: "0px 5px 15px 0px #24c044"
  },
};

export const RoundWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 80px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 8px;
`;

export const RoundCounter = styled.div`
  background-color: ${UI_KIT.colors["secondary"]};
  color: ${UI_KIT.colors["light"]};
  width: 80px;
  display: flex;
  border-radius: 50%;
  border: 4px solid ${UI_KIT.colors["light"]};
  aspect-ratio: 1/1;
  box-shadow: ${UI_KIT.boxShadow["grey"]};
  p {
    margin: auto;
    font-size: 32px;
    font-weight: 700;
  }
`;

export const EndRoundButton = styled.button`
  font-size: 20px;
  background-color: ${UI_KIT.colors["secondary"]};
  box-shadow: ${UI_KIT.boxShadow["grey"]};
  color: ${UI_KIT.colors["light"]};
  cursor: pointer;
  &:hover {
    background-color: ${UI_KIT.colors["dark-blue"]};
  }
  &:disabled{
    cursor: not-allowed;
    background-color: ${UI_KIT.colors["main"]};
  }
`;

export const HelperTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: -4vw;
  transform: translate(-50%, -50%);
  background-color: ${UI_KIT.colors["light"]};
  color: ${UI_KIT.colors["dark"]};
  width: 10vw;
  height: 25vh;
  padding: 8px;
  font-family: "Indie Flower", cursive;
  box-shadow: ${UI_KIT.boxShadow["grey"]};
`;
