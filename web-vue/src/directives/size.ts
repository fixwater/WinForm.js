import { DirectiveOptions } from "vue";
import { DirectiveBinding } from "vue/types/options";
import { css } from "@/utils";

interface BindingValues {
  width: number | string;
  height: number | string;
}

function setProperty(
  el: HTMLElement,
  propName: string,
  sizeProp: string | number | undefined
) {
  if (sizeProp && typeof sizeProp === "string") {
    console.info(sizeProp);
    css(el, propName, sizeProp);
  } else {
    css(el, propName, sizeProp!, "px");
  }
}

export const SizeDirective: DirectiveOptions = {
  inserted(el: HTMLElement, binding: DirectiveBinding) {
    let { height, width } = binding.value as BindingValues;
    setProperty(el, "width", width);
    setProperty(el, "height", height);
  }
};
