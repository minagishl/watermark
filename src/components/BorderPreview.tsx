import { BorderType } from "../types";

interface BorderPreviewProps {
  type: BorderType;
  selected: boolean;
  onClick: () => void;
}

export function BorderPreview({ type, selected, onClick }: BorderPreviewProps) {
  const baseClasses = "w-16 h-16 border-2 cursor-pointer transition-all";
  const selectedClasses = selected
    ? "ring-2 ring-blue-500 ring-offset-2"
    : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-2";

  const getBorderClasses = () => {
    switch (type) {
      case "none":
        return "border-transparent";
      case "solid":
        return "border-gray-800";
      case "dashed":
        return "border-gray-800 border-dashed";
      case "double":
        return "border-gray-800 border-4 box-content";
      case "rounded":
        return "border-gray-800 rounded-xl";
      case "dotted":
        return "border-gray-800 border-dotted";
      case "groove":
        return "border-gray-800 border-groove";
      case "ridge":
        return "border-gray-800 border-ridge";
      case "inset":
        return "border-gray-800 border-inset";
      case "outset":
        return "border-gray-800 border-outset";
      default:
        return "";
    }
  };

  return (
    <div
      className={`${baseClasses} ${selectedClasses} ${getBorderClasses()}`}
      onClick={onClick}
    />
  );
}
