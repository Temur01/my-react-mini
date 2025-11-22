export type VNodeType = string | Function;

export type VNode = {
  type: VNodeType;
  props: {
    children: VNode[];
    [key: string]: any;
  };
};
