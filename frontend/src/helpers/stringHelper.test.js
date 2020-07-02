import { splitLines } from "./stringHelper";

it("splits on n", () => {
  const actualArray = splitLines("a\nb");
  const expectedArray = ["a", "b"];
  expect(actualArray).toEqual(expectedArray);
});

it("splits on r", () => {
  const actualArray = splitLines("a\rb");
  const expectedArray = ["a", "b"];
  expect(actualArray).toEqual(expectedArray);
});

it("splits on rn", () => {
  const actualArray = splitLines("a\r\nb");
  const expectedArray = ["a", "b"];
  expect(actualArray).toEqual(expectedArray);
});

it("splits on nr", () => {
  const actualArray = splitLines("a\n\rb");
  const expectedArray = ["a", "b"];
  expect(actualArray).toEqual(expectedArray);
});
