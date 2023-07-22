import { Skeleton } from "../../unitClasses";
import { meleeValidation } from "../meleeValidation";
import {
  MOCK_FIRST_TEAM_FIRST_LINE_DEAD,
  MOCK_SECOND_TEAM_FIRST_LINE_DEAD,
  MOCK_TEAM,
} from "./testConstants";

describe("Melee validation full team", () => {
  describe("First team", () => {
    describe("Top", () => {
      it("Left corner", () => {
        expect(
          meleeValidation(new Skeleton(0), new Skeleton(6), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(0), new Skeleton(7), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(0), new Skeleton(8), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(0), new Skeleton(9), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(0), new Skeleton(10), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(0), new Skeleton(11), MOCK_TEAM)
        ).toBe(false);
      });
      it("Center", () => {
        expect(
          meleeValidation(new Skeleton(1), new Skeleton(6), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(1), new Skeleton(7), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(1), new Skeleton(8), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(1), new Skeleton(9), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(1), new Skeleton(10), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(1), new Skeleton(11), MOCK_TEAM)
        ).toBe(false);
      });
      it("Right corner", () => {
        expect(
          meleeValidation(new Skeleton(2), new Skeleton(6), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(2), new Skeleton(7), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(2), new Skeleton(8), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(2), new Skeleton(9), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(2), new Skeleton(10), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(2), new Skeleton(11), MOCK_TEAM)
        ).toBe(false);
      });
    });
    describe("Bottom", () => {
      it("Left corner", () => {
        expect(
          meleeValidation(new Skeleton(3), new Skeleton(6), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(3), new Skeleton(7), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(3), new Skeleton(8), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(3), new Skeleton(9), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(3), new Skeleton(10), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(3), new Skeleton(11), MOCK_TEAM)
        ).toBe(false);
      });
      it("Center", () => {
        expect(
          meleeValidation(new Skeleton(4), new Skeleton(6), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(4), new Skeleton(7), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(4), new Skeleton(8), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(4), new Skeleton(9), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(4), new Skeleton(10), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(4), new Skeleton(11), MOCK_TEAM)
        ).toBe(false);
      });
      it("Right corner", () => {
        expect(
          meleeValidation(new Skeleton(5), new Skeleton(6), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(5), new Skeleton(7), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(5), new Skeleton(8), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(5), new Skeleton(9), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(5), new Skeleton(10), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(5), new Skeleton(11), MOCK_TEAM)
        ).toBe(false);
      });
    });
  });
  describe("Second team", () => {
    describe("Top", () => {
      it("Left corner", () => {
        expect(
          meleeValidation(new Skeleton(6), new Skeleton(0), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(6), new Skeleton(1), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(6), new Skeleton(2), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(6), new Skeleton(3), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(6), new Skeleton(4), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(6), new Skeleton(5), MOCK_TEAM)
        ).toBe(false);
      });
      it("Center", () => {
        expect(
          meleeValidation(new Skeleton(7), new Skeleton(0), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(7), new Skeleton(1), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(7), new Skeleton(2), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(7), new Skeleton(3), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(7), new Skeleton(4), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(7), new Skeleton(5), MOCK_TEAM)
        ).toBe(true);
      });
      it("Right corner", () => {
        expect(
          meleeValidation(new Skeleton(8), new Skeleton(0), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(8), new Skeleton(1), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(8), new Skeleton(2), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(8), new Skeleton(3), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(8), new Skeleton(4), MOCK_TEAM)
        ).toBe(true);
        expect(
          meleeValidation(new Skeleton(8), new Skeleton(5), MOCK_TEAM)
        ).toBe(true);
      });
    });
    describe("Bottom", () => {
      it("Left corner", () => {
        expect(
          meleeValidation(new Skeleton(9), new Skeleton(0), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(9), new Skeleton(1), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(9), new Skeleton(2), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(9), new Skeleton(3), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(9), new Skeleton(4), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(9), new Skeleton(5), MOCK_TEAM)
        ).toBe(false);
      });
      it("Center", () => {
        expect(
          meleeValidation(new Skeleton(10), new Skeleton(0), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(10), new Skeleton(1), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(10), new Skeleton(2), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(10), new Skeleton(3), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(10), new Skeleton(4), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(10), new Skeleton(5), MOCK_TEAM)
        ).toBe(false);
      });
      it("Right corner", () => {
        expect(
          meleeValidation(new Skeleton(11), new Skeleton(0), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(11), new Skeleton(1), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(11), new Skeleton(2), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(11), new Skeleton(3), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(11), new Skeleton(4), MOCK_TEAM)
        ).toBe(false);
        expect(
          meleeValidation(new Skeleton(11), new Skeleton(5), MOCK_TEAM)
        ).toBe(false);
      });
    });
  });
});

describe("Melee validation first team first line dead", () => {
  describe("First team", () => {
    describe("Top", () => {
      it("Left corner", () => {
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(6),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(7),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(8),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(9),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(10),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(11),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
      it("Center", () => {
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(6),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(7),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(8),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(9),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(10),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(11),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
      it("Right corner", () => {
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(6),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(7),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(8),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(9),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(10),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(11),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
    });
  });
  describe("Second team", () => {
    describe("Top", () => {
      it("Left corner", () => {
        expect(
          meleeValidation(
            new Skeleton(6),
            new Skeleton(0),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(6),
            new Skeleton(1),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(6),
            new Skeleton(2),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
      });
      it("Center", () => {
        expect(
          meleeValidation(
            new Skeleton(7),
            new Skeleton(0),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(7),
            new Skeleton(1),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(7),
            new Skeleton(2),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
      });
      it("Right corner", () => {
        expect(
          meleeValidation(
            new Skeleton(8),
            new Skeleton(0),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(8),
            new Skeleton(1),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(8),
            new Skeleton(2),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
      });
    });
    describe("Bottom", () => {
      it("Left corner", () => {
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(0),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(1),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(2),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(3),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(4),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(5),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
      it("Center", () => {
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(0),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(1),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(2),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(3),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(4),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(5),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
      it("Right corner", () => {
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(0),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(1),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(2),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(3),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(4),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(5),
            MOCK_FIRST_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
    });
  });
});

describe("Melee validation second team first line dead", () => {
  describe("First team", () => {
    describe("Top", () => {
      it("Left corner", () => {
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(6),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(7),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(8),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(9),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(10),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(0),
            new Skeleton(11),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
      it("Center", () => {
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(6),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(7),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(8),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(9),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(10),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(1),
            new Skeleton(11),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
      it("Right corner", () => {
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(6),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(7),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(8),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(9),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(10),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(2),
            new Skeleton(11),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
    });
    describe("Bottom", () => {
      it("Left corner", () => {
        expect(
          meleeValidation(
            new Skeleton(3),
            new Skeleton(9),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(3),
            new Skeleton(10),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(3),
            new Skeleton(11),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
      });
      it("Center", () => {
        expect(
          meleeValidation(
            new Skeleton(4),
            new Skeleton(9),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(4),
            new Skeleton(10),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(4),
            new Skeleton(11),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
      });
      it("Right corner", () => {
        expect(
          meleeValidation(
            new Skeleton(5),
            new Skeleton(9),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(5),
            new Skeleton(10),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
        expect(
          meleeValidation(
            new Skeleton(5),
            new Skeleton(11),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(true);
      });
    });
  });
  describe("Second team", () => {
    describe("Bottom", () => {
      it("Left corner", () => {
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(0),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(1),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(2),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(3),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(4),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(9),
            new Skeleton(5),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
      it("Center", () => {
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(0),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(1),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(2),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(3),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(4),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(10),
            new Skeleton(5),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
      it("Right corner", () => {
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(0),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(1),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(2),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(3),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(4),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
        expect(
          meleeValidation(
            new Skeleton(11),
            new Skeleton(5),
            MOCK_SECOND_TEAM_FIRST_LINE_DEAD
          )
        ).toBe(false);
      });
    });
  });
});
