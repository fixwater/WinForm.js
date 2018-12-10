import { DirectiveOptions } from "vue";
import { DirectiveBinding } from "vue/types/options";
import Hammer from "hammerjs";

interface BindingValues {
  handlePan: (e: HammerInput) => void;
  handlePanEnd: (e: HammerInput) => void;
}

export const GestureDirective: DirectiveOptions = {
  bind(el: HTMLElement, binding: DirectiveBinding) {
    let { handlePan, handlePanEnd } = binding.value as BindingValues;
    let hammer = new Hammer(el);

    hammer.on("pan", handlePan);
    hammer.on("panend", handlePanEnd);
  }
};
