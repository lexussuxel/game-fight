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
}

export default function NavBar({ setHelperText }: NavBarProps) {
  const {players, order} = useSelector((state: RootState) =>
     state.gameSlice
  );

  return (
    <NavWrapper>
      <PlayersWrapper>
        {order.map((player) => (
          <FullCard key={players[player].id} player={players[player]} setHelperText={setHelperText} />
        ))}
      </PlayersWrapper>
    </NavWrapper>
  );
}
