// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#8B0000',      // 버건디
        secondary: '#D4AF37',    // 골드 (금색)
        accent: '#64748B',       // 보조
        light: '#F8FAFC',        // 밝은 배경
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('data:image/svg+xml,%3Csvg width=...')", // 생략 가능
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // 필요시 추가 플러그인...
  ],
};
