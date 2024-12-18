export type BorderType =
  | "none"
  | "solid"
  | "dashed"
  | "double"
  | "rounded"
  | "dotted"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

export type TextAlignment = "left" | "center" | "right";

export interface WatermarkSettings {
  text: string;
  fontSize: number;
  rotation: number;
  opacity: number;
  color: string;
  lineHeight: number;
  borderType: BorderType;
  borderWidth: number;
  fontFamily: string;
  backgroundTransparent: boolean;
  fontWeight: number;
  isCircle: boolean;
  circlePadding: number;
  showDiagonalLine: boolean;
  diagonalLineWidth: number;
  textAlign: TextAlignment;
  isRingText: boolean;
  ringRadius: number;
  ringTextReverse: boolean;
}
