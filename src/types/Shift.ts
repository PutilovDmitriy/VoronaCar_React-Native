export interface ShiftUpdateInfo {
  shiftId: string;
  carNumber: string;
  value: string | number;
  money: string | number;
}

export interface Shift {
  shiftId: string;
  carNumber: string[];
  value: string | number;
  money: string | number;
}
