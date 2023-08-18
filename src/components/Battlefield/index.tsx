import React, { useCallback } from "react";
import { BattlefiledWrapper, Divider, TeamWrapper } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SmallCard from "../SmallCard";
import { HealerMass, Mage } from "../../utils/typeClasses";

export default function Battlefield() {
  const { players, source } = useSelector(
    (state: RootState) => state.gameSlice
  );
  const blueTeam = players.slice(0, 6);
  const redTeam = players.slice(6, 12);

  const hoverSourceHandler = useCallback(() => {
    if (source instanceof HealerMass) {
      return "green";
    }
    if (source instanceof Mage) {
      return "red";
    }
    return undefined;
  }, [source]);
  return (
    <BattlefiledWrapper>
      <TeamWrapper
        team={blueTeam[0].team}
        hoverColor={hoverSourceHandler()}
        source={source?.team}
      >
        {blueTeam.map((player) => (
          <SmallCard key={player.id} player={player} />
        ))}
      </TeamWrapper>
      <Divider />
      <TeamWrapper
        team={redTeam[0].team}
        hoverColor={hoverSourceHandler()}
        source={source?.team}
      >
        {redTeam.map((player) => (
          <SmallCard key={player.id} player={player} />
        ))}
      </TeamWrapper>
    </BattlefiledWrapper>
  );
}
