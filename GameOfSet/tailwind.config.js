/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",      // Indigo 600
        secondary: "#F59E0B",    // Amber 500
        accent: "#10B981",       // Emerald 500
        background: "#F9FAFB",   // Gray 50
        surface: "#FFFFFF",      // White
        muted: "#E5E7EB",        // Gray 200
        text: "#111827",         // Gray 900
        subtext: "#6B7280",      // Gray 500
        border: "#D1D5DB",       // Gray 300
        card: "#FFFFFF",         // For cards and sheets
        highlight: "#E0F2FE",    // Sky 100
      },
    },
  },
  plugins: [],
}