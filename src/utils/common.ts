export const isNullOrUndefined = <T>(
  val: undefined | null | T
): val is null | undefined => val === undefined || val === null;
