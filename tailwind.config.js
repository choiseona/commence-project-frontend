/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'tvNEnjoystoriesB': ['tvNEnjoystoriesB'],
        'tvNEnjoystoriesM': ['tvNEnjoystoriesM'],
        'tvNEnjoystoriesL': ['tvNEnjoystoriesL'],
        'AppleSDGothicNeoH00': ['AppleSDGothicNeoH00'],
        'AppleSDGothicNeoL00': ['AppleSDGothicNeoL00'],
        'AppleSDGothicNeoT00': ['AppleSDGothicNeoT00'],
        'AppleSDGothicNeoM00': ['AppleSDGothicNeoM00'],
        'AppleSDGothicNeoB00': ['AppleSDGothicNeoB00'],
        'AppleSDGothicNeoEB00': ['AppleSDGothicNeoEB00'],
        'AppleSDGothicNeoSB00': ['AppleSDGothicNeoSB00'],
        'Pretendard': ['Pretendard']
      },
      lineHeight: {
        _normal: "normal",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        }
      }
    },
  },
  plugins: [],
}

