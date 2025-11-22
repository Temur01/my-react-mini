import { VNode } from "../types/vnode";

export function createElement(type: any, props: any, ...children: any) {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}
