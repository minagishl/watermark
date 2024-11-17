import { useSystemFonts } from "../hooks/useSystemFonts";

interface FontSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function FontSelect({ value, onChange }: FontSelectProps) {
  const fonts = useSystemFonts();

  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
        style={{ fontFamily: value }}
      >
        {fonts.map((font) => (
          <option
            key={font.value}
            value={font.value}
            style={{ fontFamily: font.value }}
          >
            {font.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
