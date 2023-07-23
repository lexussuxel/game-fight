import React from "react";
import { NavWrapper, PlayersWrapper } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import FullCard from "../FullCard";

export default function NavBar() {
  const { players, order } = useSelector((state: RootState) => state.gameSlice);

  return (
    <NavWrapper>
      <PlayersWrapper>
        {order.map((player) => (
          <FullCard key={players[player].id} player={players[player]} />
        ))}
      </PlayersWrapper>
    </NavWrapper>
  );
}
