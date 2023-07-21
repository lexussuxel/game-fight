import React from "react";
import {
  NavWrapper,
  PlayersWrapper,
} from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import FullCard from "../FullCard";

interface NavBarProps {
  setHelperText: React.Dispatch<React.SetStateAction<string>>;
  id: number;
}

export default function NavBar({ id, setHelperText }: NavBarProps) {
  const players = useSelector((state: RootState) =>
     state.gameSlice.players.slice(6 * id, 6 * (id+1))
  );

  return (
    <NavWrapper reverse={id === 1}>
      <PlayersWrapper>
        {players.map((player) => (
          <FullCard key={player.id} player={player} setHelperText={setHelperText} />
        ))}
      </PlayersWrapper>
    </NavWrapper>
  );
}
