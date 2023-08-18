import { Unit } from "../interfaces";

export function targetValidation(target: Unit) {
  if (target.HP !== 0) return true;
  return false;
}
