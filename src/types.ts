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
}
