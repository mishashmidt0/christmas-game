export type Snow = {
  id: string;
  url: string;
  fontSize: string;
  animationDuration: string;
  animationDelay: string;
};

export type treeArrType = {
  url: string;
  id: string;
  count?: string;
  style?: {};
  shiftX?: number;
  shiftY?: number;
};
export type activeTree = {
  num: string;
  url: string;
  id: string;
  count?: string;
  style: styleToy;
  shiftX?: number;
  shiftY?: number;
};
type styleToy = {
  position: string;
  left: number;
  top: number;
};
