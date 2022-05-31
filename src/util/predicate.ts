/**
 * Returns true if the passed parameter is not undefined or null
 * @param param The parameter to check
 * @returns True if the parameter is not undefined or null, otherwise false
 */
export const isPresent = <T>(param: T | undefined | null): param is T =>
  param !== undefined && param !== null;
