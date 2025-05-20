/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-900": "#03045E",
        "blue-800": "#023E8A",
        "blue-700": "#0077B6",
        "blue-600": "#0096c7",
        "blue-500": "#00B4D8",
        "blue-400": "#48CAE4",
        "blue-300": "#90E0EF",
        "blue-200": "#ADE8F4",
        "blue-100": "#CAF0F8",
        "blue-dark": "#090926",
        "dark-primer": "#070819",
      },
      fontFamily: {
        "general-Bold": "general-Bold",
        "general-Medium": "general-Medium",
        "general-Regular": "general-Regular",
        "general-SemiBold": "general-SemiBold",
      },
      container: {
        center: true, // باعث میشه کانتینر همیشه وسط چین باشه
        padding: {
          DEFAULT: "20px", // معادل 16px
          sm: "20px", // معادل 24px برای اسکرین‌های sm
          md: "10px", // معادل 32px برای md
          lg: "50px", // معادل 48px برای lg
          xl: "2rem", // معادل 64px برای xl
          "2xl": "5rem", // معادل 80px برای 2xl
        },
      },
      boxShadow: {
        "blue-800": "0 5px 20px #023e8aa3",
        // "deep-shadow":"0 4px 100px #48CAE4"
        "light":"0 4px 50px 0 rgba(255,255,255,50)"
      },
      dropShadow: {
        "deep-shadow": "0 4px 100px #48cae485",
      },
      backgroundImage: {
        'achievements-pattern': "url('./src/assets/image/Achievements/image.png')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
