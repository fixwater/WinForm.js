export type Unit = "%" | "in" | "cm" | "em" | "mm" | "ex" | "pt" | "pc" | "px";

export function css(
  el: HTMLElement,
  styleName: string,
  styleValue: number | string,
  unit?: Unit
) {
  el.style[styleName as any] = `${styleValue}${unit || ""}`;
}
