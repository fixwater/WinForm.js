import { DirectiveOptions } from "vue";
import { DirectiveBinding } from "vue/types/options";
import { css } from "@/utils";

interface Size {
  width: number;
  height: number;
}

interface BindingValues {
  origin: Size;
  target: Size;
}

export const IncrementSizeDirective: DirectiveOptions = {
  bind() {
    console.info("hello");
  },
  update(el: HTMLElement, binding: DirectiveBinding) {
    let { origin, target } = binding.value as BindingValues;
    let { width: originWidth, height: originHeight } = origin;
    let { width: offsetWidth, height: offsetHeight } = target;

    console.info(origin, target);

    originWidth && css(el, "width", originWidth + offsetWidth);
    originHeight && css(el, "height", originHeight + offsetHeight);
  }
};
