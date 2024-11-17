import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { Preview } from "./components/Preview";
import { SettingsPanel } from "./components/Settings";
import { WatermarkSettings } from "./types";

const defaultSettings: WatermarkSettings = {
  text: "AI学習利用禁止\nDo Not Use\nFor AI Training",
  fontSize: 48,
  rotation: -45,
  opacity: 0.5,
  color: "#FF0000",
  lineHeight: 1.5,
  borderType: "solid",
  borderWidth: 2,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  backgroundTransparent: true,
  fontWeight: 400,
};

function App() {
  const [settings, setSettings] = useState<WatermarkSettings>(defaultSettings);
  const [showSettings, setShowSettings] = useState(true);
  const watermarkRef = useRef<HTMLDivElement>(null);

  const handleSettingsChange = (newSettings: Partial<WatermarkSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const downloadImage = async () => {
    if (watermarkRef.current) {
      const dataUrl = await toPng(watermarkRef.current, {
        backgroundColor: settings.backgroundTransparent
          ? "transparent"
          : "#FFFFFF",
        width: 700,
        height: 600,
      });

      const link = document.createElement("a");
      link.download = "watermark.png";
      link.href = dataUrl;
      link.click();
    }
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Preview
            settings={settings}
            watermarkRef={watermarkRef}
            onReset={resetSettings}
            onDownload={downloadImage}
          />
          <SettingsPanel
            settings={settings}
            onSettingsChange={handleSettingsChange}
            showSettings={showSettings}
            onToggleSettings={() => setShowSettings(!showSettings)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
