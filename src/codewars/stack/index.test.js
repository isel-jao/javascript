const Stack = require("./index");

describe("My Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it("is created empty ", () => {
    expect(stack.top).toBe(-1);
    expect(stack.peak).toBe(null);
    expect(stack.storage).toEqual({});
  });
  it("can push to the top", () => {
    stack.push(1);
    expect(stack.top).toBe(0);
    expect(stack.peak).toBe(1);
    expect(stack.storage).toEqual({ 0: 1 });
    stack.push(1337);
    expect(stack.top).toBe(1);
    expect(stack.peak).toBe(1337);
    expect(stack.storage).toEqual({ 0: 1, 1: 1337 });
    stack.push(1992);
    expect(stack.top).toBe(2);
    expect(stack.peak).toBe(1992);
    expect(stack.storage).toEqual({ 0: 1, 1: 1337, 2: 1992 });
  });
  it("can pop off", () => {
    stack.push(1);
    stack.push(1337);
    stack.push(1992);
    expect(stack.pop()).toBe(1992);
    expect(stack.top).toBe(1);
    expect(stack.peak).toBe(1337);
    expect(stack.storage).toEqual({ 0: 1, 1: 1337 });
    expect(stack.pop()).toBe(1337);
    expect(stack.top).toBe(0);
    expect(stack.peak).toBe(1);
    expect(stack.storage).toEqual({ 0: 1 });
    expect(stack.pop()).toBe(1);
    expect(stack.top).toBe(-1);
    expect(stack.peak).toBe(null);
    expect(stack.storage).toEqual({});
  });
});
