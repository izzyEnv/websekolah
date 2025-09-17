/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./page.html",],
  theme: {
    extend: {
      // Anda bisa memperluas tema default Tailwind di sini jika diperlukan
    },
  },
  plugins: [
    require('daisyui'), // Sertakan plugin DaisyUI
  ],
  // Konfigurasi DaisyUI (opsional)
  daisyui: {
    themes: ["light"], // Gunakan tema "light" dari DaisyUI. Anda bisa mengatur ke `true` untuk semua tema atau menentukan tema lain.
  },
};