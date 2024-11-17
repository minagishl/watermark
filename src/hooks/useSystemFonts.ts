import { useState, useEffect } from "react";

// List of common system fonts
const commonFonts = [
  {
    name: "システムフォント",
    value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  { name: "Arial", value: "Arial" },
  { name: "Helvetica", value: "Helvetica" },
  { name: "Times New Roman", value: "Times New Roman" },
  { name: "Times", value: "Times" },
  { name: "Courier New", value: "Courier New" },
  { name: "Courier", value: "Courier" },
  { name: "メイリオ", value: "Meiryo" },
  { name: "游ゴシック", value: "Yu Gothic" },
  { name: "游明朝", value: "Yu Mincho" },
  { name: "ヒラギノ角ゴ", value: "Hiragino Kaku Gothic ProN" },
  { name: "ヒラギノ明朝", value: "Hiragino Mincho ProN" },
  { name: "ＭＳ ゴシック", value: "MS Gothic" },
  { name: "ＭＳ 明朝", value: "MS Mincho" },
];

export function useSystemFonts() {
  const [availableFonts, setAvailableFonts] = useState(commonFonts);

  useEffect(() => {
    // @ts-expect-error - window.queryLocalFonts is not yet in the TypeScript types
    if (window.queryLocalFonts) {
      const getLocalFonts = async () => {
        try {
          // @ts-expect-error - window.queryLocalFonts is not yet in the TypeScript types
          const fonts = await window.queryLocalFonts();
          const uniqueFonts = Array.from(
            new Set(fonts.map((font: { family: string }) => font.family))
          );

          setAvailableFonts([
            ...commonFonts,
            ...uniqueFonts
              .filter((font) => !commonFonts.some((cf) => cf.value === font))
              .map((font) => ({ name: font as string, value: font as string })),
          ]);
        } catch (error) {
          console.warn("Local fonts could not be loaded:", error);
        }
      };

      getLocalFonts();
    }
  }, []);

  return availableFonts;
}
