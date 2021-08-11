import { Element } from "@svgdotjs/svg.js";

interface selectionPointArray {
  [index: number]:
    | "lt"
    | "rt"
    | "rb"
    | "lb"
    | "t"
    | "r"
    | "b"
    | "l"
    | "rot"
    | "shear";
}

interface selectionOptions {
  points: selectionPointArray;
  pointsExclude: selectionPointArray;
  classRect: string;
  classPoints: string;
  pointType: "circle" | "rect";
  pointSize: number;
  rotationPoint: boolean;
  deepSelect: boolean;
}

declare module "@svgdotjs/svg.js" {
  class SelectHandler {}
  interface Element {
    selectize(width: number, height: number): this;

    selectize(width: number, height: number, enable: boolean): this;
    selectize(width: number, height: number, options: selectionOptions): this;
    selectize(width: number, height: number, handler: SelectHandler): this;
    selectize(
      width: number,
      height: number,
      attr?: SelectHandler | selectionOptions | boolean
    ): this;
  }
}
