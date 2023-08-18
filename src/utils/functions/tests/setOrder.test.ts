import { newRound, setOrder } from "../setOrder";
import { MOCK_TEAM } from "./testConstants";

describe("New round", () => {
  const myPlayers = MOCK_TEAM;
  myPlayers[0].defend = true;
  myPlayers[1].defend = true;
  myPlayers[4].defend = true;
  myPlayers[7].defend = true;
  it("Should return all players with no defend", () => {
    expect(newRound(myPlayers).every((player) => player.defend === false)).toBe(
      true
    );
  });
});
describe("Set order", () => {
  const order = setOrder(MOCK_TEAM);
  it("Should return 12 numbers", () => {
    expect(order.length).toBe(12);
  });
  it("Should consist only of numbers between 0 and 11", () => {
    expect(order.every((one) => one >= 0 && one < 12)).toBe(true);
  });
});
