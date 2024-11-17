import React from "react";
import { Download, RefreshCw } from "lucide-react";
import { WatermarkSettings } from "../types";

interface PreviewProps {
  settings: WatermarkSettings;
  watermarkRef: React.RefObject<HTMLDivElement>;
  onReset: () => void;
  onDownload: () => void;
}

export function Preview({
  settings,
  watermarkRef,
  onReset,
  onDownload,
}: PreviewProps) {
  const getBorderStyles = () => {
    if (settings.borderType === "none") return {};

    const baseStyle = {
      border: `${settings.borderWidth}px ${settings.borderType} ${settings.color}`,
    };

    if (settings.borderType === "rounded") {
      return {
        ...baseStyle,
        borderRadius: "1rem",
      };
    }

    return baseStyle;
  };

  return (
    <div className="flex-1">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">プレビュー</h2>
        <div className="border-2 border-gray-200 rounded-lg">
          <div
            ref={watermarkRef}
            className="relative w-full h-[600px] bg-white rounded-lg overflow-hidden select-none"
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `rotate(${settings.rotation}deg)`,
              }}
            >
              <div
                className="text-center whitespace-pre-wrap font-bold p-4"
                style={{
                  fontSize: `${settings.fontSize}px`,
                  opacity: settings.opacity,
                  color: settings.color,
                  lineHeight: settings.lineHeight,
                  fontFamily: settings.fontFamily,
                  fontWeight: settings.fontWeight,
                  ...getBorderStyles(),
                  ...(settings.isCircle && {
                    borderRadius: "100%",
                    aspectRatio: "1",
                    alignItems: "center",
                    display: "flex",
                    padding: "50px",
                  }),
                }}
              >
                {settings.text}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            リセット
          </button>
          <button
            onClick={onDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            ダウンロード
          </button>
        </div>
      </div>
    </div>
  );
}
