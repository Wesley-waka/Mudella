import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
        'gray-20': '#f0f0f0', // Example custom color
      },
    },
  },
  plugins: [],
};

export default config;