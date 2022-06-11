import { mockTimeslot, mockTimeslot2, mockTimeslot3 } from "../mocks";
import { getTimeRange, isTimeslotsMatch, isTimeslotsOverlap } from "./helper";

describe("getTimeRange", () => {
  it("should return time range", () => {
    expect(getTimeRange(mockTimeslot)).toBe("10:30 - 12:00");
  });
  it("should return empty string when timeslot is undefined", () => {
    expect(getTimeRange()).toBe("");
  });
  it("should return default value when timeslot is undefined and default value given", () => {
    expect(getTimeRange(undefined, "default")).toBe("default");
  });
});

describe("isTimeslotsMatch", () => {
  it("should return true when timeslots match", () => {
    expect(isTimeslotsMatch(mockTimeslot, mockTimeslot)).toBe(true);
  });
  it("should return false when timeslots doesn't match", () => {
    expect(isTimeslotsMatch(mockTimeslot, mockTimeslot2)).toBe(false);
  });
  it("should return undefined when against param is undefined", () => {
    expect(isTimeslotsMatch(mockTimeslot)).toBe(undefined);
  });
});

describe("isTimeslotsOverlap", () => {
  it("should return true when timeslots overlap", () => {
    expect(isTimeslotsOverlap(mockTimeslot, mockTimeslot2)).toBe(true);
  });
  it("should return false when timeslots doesn't overlap", () => {
    expect(isTimeslotsOverlap(mockTimeslot, mockTimeslot3)).toBe(false);
  });
  it("should return undefined when against param is undefined", () => {
    expect(isTimeslotsOverlap(mockTimeslot)).toBe(undefined);
  });
});
