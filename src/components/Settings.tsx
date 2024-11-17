import { Settings as SettingsIcon } from "lucide-react";
import { BorderPreview } from "./BorderPreview";
import { FontSelect } from "./FontSelect";
import { WatermarkSettings, BorderType, TextAlignment } from "../types";

interface SettingsPanelProps {
  settings: WatermarkSettings;
  onSettingsChange: (settings: Partial<WatermarkSettings>) => void;
  showSettings: boolean;
  onToggleSettings: () => void;
}

export function SettingsPanel({
  settings,
  onSettingsChange,
  showSettings,
  onToggleSettings,
}: SettingsPanelProps) {
  const borderTypes: BorderType[] = [
    "none",
    "solid",
    "dashed",
    "double",
    "rounded",
    "dotted",
    "groove",
    "ridge",
    "inset",
    "outset",
  ];

  const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <div className={`lg:w-80 ${showSettings ? "block" : "hidden lg:block"}`}>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">設定</h2>
          <button
            onClick={onToggleSettings}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <SettingsIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              テキスト
            </label>
            <textarea
              value={settings.text}
              onChange={(e) => onSettingsChange({ text: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              背景透過
            </label>
            <input
              type="checkbox"
              checked={settings.backgroundTransparent}
              onChange={(e) =>
                onSettingsChange({ backgroundTransparent: e.target.checked })
              }
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              円形モード
            </label>
            <input
              type="checkbox"
              checked={settings.isCircle}
              onChange={(e) => {
                onSettingsChange({ isCircle: e.target.checked });
                onSettingsChange({ isRingText: false });
              }}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>

          {settings.isCircle === true && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                円形モード / スペース: {settings.circlePadding}px
              </label>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={settings.circlePadding}
                onChange={(e) =>
                  onSettingsChange({ circlePadding: Number(e.target.value) })
                }
                className="w-full"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              リングテキスト
            </label>
            <input
              type="checkbox"
              checked={settings.isRingText}
              onChange={(e) => {
                onSettingsChange({ isRingText: e.target.checked });
                onSettingsChange({ isCircle: false });
                onSettingsChange({ borderType: "none" });
              }}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>

          {settings.isRingText && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  リングの半径: {settings.ringRadius}px
                </label>
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="5"
                  value={settings.ringRadius}
                  onChange={(e) =>
                    onSettingsChange({ ringRadius: Number(e.target.value) })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  リングテキスト（逆転）
                </label>
                <input
                  type="checkbox"
                  checked={settings.ringTextReverse}
                  onChange={(e) =>
                    onSettingsChange({
                      ringTextReverse: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              斜線を表示
            </label>
            <input
              type="checkbox"
              checked={settings.showDiagonalLine}
              onChange={(e) =>
                onSettingsChange({ showDiagonalLine: e.target.checked })
              }
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>

          {settings.showDiagonalLine && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                斜線の太さ: {settings.diagonalLineWidth}px
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={settings.diagonalLineWidth}
                onChange={(e) =>
                  onSettingsChange({
                    diagonalLineWidth: Number(e.target.value),
                  })
                }
                className="w-full"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              テキストの配置
            </label>
            <select
              value={settings.textAlign}
              onChange={(e) =>
                onSettingsChange({ textAlign: e.target.value as TextAlignment })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="left">左寄せ</option>
              <option value="center">中央</option>
              <option value="right">右寄せ</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              フォント
            </label>
            <FontSelect
              value={settings.fontFamily}
              onChange={(value) => onSettingsChange({ fontFamily: value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              フォントサイズ: {settings.fontSize}px
            </label>
            <input
              type="range"
              min="12"
              max="120"
              value={settings.fontSize}
              onChange={(e) =>
                onSettingsChange({ fontSize: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              フォントウェイト
            </label>
            <select
              value={settings.fontWeight}
              onChange={(e) =>
                onSettingsChange({ fontWeight: Number(e.target.value) })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {fontWeights.map((weight) => (
                <option key={weight} value={weight}>
                  {weight}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              行間: {settings.lineHeight}
            </label>
            <input
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={settings.lineHeight}
              onChange={(e) =>
                onSettingsChange({ lineHeight: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              回転: {settings.rotation}°
            </label>
            <input
              type="range"
              min="-180"
              max="180"
              step="5"
              value={settings.rotation}
              onChange={(e) =>
                onSettingsChange({ rotation: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              透明度: {Math.round(settings.opacity * 100)}%
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={settings.opacity}
              onChange={(e) =>
                onSettingsChange({ opacity: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              色
            </label>
            <input
              type="color"
              value={settings.color}
              onChange={(e) => onSettingsChange({ color: e.target.value })}
              className="w-full h-10 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              外枠スタイル
            </label>
            <div className="grid grid-cols-3 gap-4">
              {borderTypes.map((type) => (
                <div>
                  <BorderPreview
                    key={type}
                    type={type}
                    selected={settings.borderType === type}
                    onClick={() => onSettingsChange({ borderType: type })}
                  />
                  <span className="text-sm text-gray-700">{type}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              外枠の太さ: {settings.borderWidth}px
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={settings.borderWidth}
              onChange={(e) =>
                onSettingsChange({ borderWidth: Number(e.target.value) })
              }
              className="w-full"
              disabled={settings.borderType === "none"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
