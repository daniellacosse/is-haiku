import isHaiku from "./isHaiku";

test.concurrent("the happy path", async () => {
  expect(
    isHaiku(`
      i forgot how to do this
      this is not a haiku
      i forgot how to count
    `)
  ).toBeFalsy();

  expect(
    isHaiku(`
      oh i remember
      finally a haiku here
      counting is not hard
    `)
  ).toBeTruthy();
});

test.concurrent("only permits three-line strings", async () => {
  expect(
    isHaiku(`
      this is a haiku but the second line has been
      mistakenly placed
    `)
  ).toBeFalsy();
});

test.concurrent("skip punctuation", async () => {
  expect(
    isHaiku(`
      yo, as an aside -
      i have questions?; no answers...
      exclaimation point!
    `)
  ).toBeTruthy();
});
