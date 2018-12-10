/** 去除单位像 rem, px,rm... */
export function removeUnit(str: string): number {
  return +str.replace(/(^[0-9]+).*/g, (_match, capture) => capture);
}
