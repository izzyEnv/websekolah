/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page.html", // Pindai file HTML ini untuk kelas-kelas Tailwind
    // Tambahkan jalur lain di mana Anda menggunakan kelas Tailwind, contohnya:
    // "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
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