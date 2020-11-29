import syllable from "syllable";

import {
  HAIKU_LINE_COUNT,
  HAKIU_MIDDLE_LINE_INDEX,
  MIDDLE_LINE_SYLLABLE_COUNT,
  TOP_BOTTOM_LINE_SYLL_COUNT,
} from "./constants";

/**
 * checks to see if the given string is a haiku
 * 
 * @example
 * // returns true
 * isHaiku(`
 *   a reclusive cloud
 *   retreats into the starlight
 *   the shadows double
 * `);
 * @param {string} haiku - the multi-line string to test 
 * @return {boolean} whether or not the given string is a haiku
 */
export default (haiku: string): boolean => {
  const haikuLines = haiku
    .trim()
    .split(/\n/)
    .map((line) => line.trim());

  if (haikuLines.length !== HAIKU_LINE_COUNT) return false;

  return haikuLines.every(
    (line, index) =>
      line.split(/\W+/).reduce((sum, word) => sum + syllable(word), 0) ===
      (index === HAKIU_MIDDLE_LINE_INDEX
        ? MIDDLE_LINE_SYLLABLE_COUNT
        : TOP_BOTTOM_LINE_SYLL_COUNT)
  );
};
