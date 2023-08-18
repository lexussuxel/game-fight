import { Unit } from "../../interfaces";
import { getRandomNumber, randomSetPlayers } from "../randomUnits";

describe("Random set players", () => {
  const players = randomSetPlayers();
  it("Should return 12 players", () => {
    expect(players.length).toBe(12);
  });
  it("Every player should be instance of Unit", () => {
    expect(players.every((player) => player instanceof Unit)).toBe(true);
  });
});

describe("Get random number", () => {
  it("Should return numbers between 0 and 9", () => {
    const randomNumbers = [];
    for (let i = 0; i < 100; i++) {
      randomNumbers.push(getRandomNumber(0, 9));
    }
    expect(randomNumbers.every((num) => num >= 0 && num < 9)).toBe(true);
  });
  it("Should return numbers between 0 and 4", () => {
    const randomNumbers = [];
    for (let i = 0; i < 100; i++) {
      randomNumbers.push(getRandomNumber(0, 4));
    }
    expect(randomNumbers.every((num) => num >= 0 && num < 4)).toBe(true);
  });
  it("Should return numbers between 0 and 50", () => {
    const randomNumbers = [];
    for (let i = 0; i < 100; i++) {
      randomNumbers.push(getRandomNumber(0, 50));
    }
    expect(randomNumbers.every((num) => num >= 0 && num < 50)).toBe(true);
  });
});
