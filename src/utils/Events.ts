import { MouseEvent, RefObject } from "react";

export class Events {
  static doesEventContainElement(
    selectorOrElement: string | HTMLElement,
    event:
      | MouseEvent<HTMLDivElement, globalThis.MouseEvent>
      | globalThis.MouseEvent
  ): boolean {
    if (!document) return false;
    let element;
    if (typeof selectorOrElement === "string") {
      element = document.querySelector(selectorOrElement);
    } else {
      element = selectorOrElement;
    }
    if (!element) return false;
    return element.contains(event?.target as HTMLElement);
  }

  static stopPropagation(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    e?.stopPropagation();
  }
}
