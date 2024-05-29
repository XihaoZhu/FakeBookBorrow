import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const plugin = require('tailwindcss/plugin')

const screenKeys = Array.from({length: 20}, (_, i) => i*5)
const screenSizes = screenKeys.reduce((v, key) => Object.assign(v, {[key]: key}), {});

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'color1': '#ededed',
        'color2': '#d9d9d9',
        'color3': '#555555',
        'color4': '#eaf7ff',
      },
    },
  },
  plugins: [
    plugin(function ({matchUtilities, theme}:PluginAPI) {
      matchUtilities(
        {
          'w-screen': (width:String) => ({
            width: `${width}vw`
          })
        },
        { values: Object.assign(screenSizes, theme('screenSize', {})) }
      ),
      matchUtilities(
        {
          'h-screen': (height:String) => ({
            height: `${height}vh`
          })
        },
        { values: Object.assign(screenSizes, theme('screenSize', {})) }
      )
    })
  ],
};
export default config;
