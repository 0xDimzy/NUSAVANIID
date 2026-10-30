# Nusavaniid — cara upload ke shared hosting

Website ini adalah website statis: hanya HTML, CSS, JavaScript, dan aset logo. Tidak memakai database, Node.js, PHP, atau proses build. Form penawaran langsung membuka WhatsApp dengan isi pesan dari pengunjung.

## 1. Yang perlu disiapkan

- Domain, misalnya `nusavaniid.com`.
- Shared hosting dengan SSL gratis dan akses cPanel/File Manager.
- Nomor WhatsApp bisnis aktif.

Hosting apa pun boleh digunakan selama menyediakan folder web seperti `public_html`, `htdocs`, atau document root khusus domain.

## 2. Ubah konfigurasi sebelum upload

Buka file `site.config.js`, lalu isi data bisnis yang benar:

```js
contactEmail: 'sales@domain-anda.com',
phoneDisplay: '+62 812 9000 7700',
whatsappNumber: '6281290007700',
address: 'Kota, Provinsi, Indonesia',
```

Aturan untuk `whatsappNumber`:

- Gunakan kode negara, contoh Indonesia dimulai `62`.
- Jangan gunakan tanda `+`, spasi, atau strip.
- Contoh benar: `6281290007700`.

Isi URL akun Instagram jika diperlukan. Semua konfigurasi publik berada di satu file ini.

## 3. Folder yang di-upload

Gunakan isi folder proyek ini sebagai paket deploy. File yang harus terlihat langsung di document root hosting adalah:

```text
public_html/
├── index.html
├── styles.css
├── script.js
├── site.config.js
├── robots.txt
├── .htaccess
└── assets/
    └── nusavaniid-logo.png
```

Jangan upload folder `.next`, `.emergent`, atau file `accordion.jsx`; semuanya tidak diperlukan untuk website final.

## 4. Langkah upload di cPanel / File Manager

1. Masuk ke cPanel hosting.
2. Buka **File Manager**.
3. Buka `public_html` untuk domain utama. Jika domain adalah addon domain, buka document root yang ditunjukkan oleh hosting.
4. Jika ada file website bawaan seperti `index.html`, hapus atau ganti namanya terlebih dahulu agar tidak menimpa halaman Nusavaniid.
5. Dari komputer, pilih isi folder proyek ini, lalu upload ke folder tujuan.
6. Pastikan folder `assets` ikut ter-upload dan `nusavaniid-logo.png` berada di dalamnya.
7. Jika File Manager menyembunyikan `.htaccess`, aktifkan opsi **Show Hidden Files (dotfiles)** sebelum mengecek hasil upload.

Alternatif: kompres isi folder proyek ini menjadi ZIP, upload ZIP ke `public_html`, lalu pilih **Extract**. Setelah extract, periksa kembali agar `index.html` berada langsung di `public_html`, bukan satu folder lebih dalam.

## 5. Hubungkan domain dan aktifkan SSL

1. Hubungkan domain ke nameserver hosting, atau ubah DNS sesuai instruksi provider hosting.
2. Tunggu DNS aktif; biasanya beberapa menit sampai 24 jam.
3. Aktifkan SSL gratis di panel hosting bila belum aktif.
4. Buka `https://domain-anda.com`.

File `.htaccess` akan mengarahkan pengunjung ke HTTPS pada hosting Apache/LiteSpeed. Bila hosting memakai Nginx, tanyakan provider hosting untuk pengalihan HTTP ke HTTPS.

## 6. Checklist setelah website tayang

- Buka website dari laptop dan ponsel.
- Klik tombol bahasa EN/ID.
- Coba tab produk dan FAQ.
- Isi form penawaran, lalu pastikan WhatsApp terbuka dengan data form sudah masuk ke pesan.
- Klik tombol WhatsApp mengambang.
- Periksa logo, Instagram, Facebook, nomor telepon, alamat, dan email.
- Gunakan Ctrl+F5 di Windows atau hapus cache browser jika perubahan belum terlihat.

## Jika ada masalah

| Masalah | Solusi cepat |
| --- | --- |
| Halaman hosting bawaan masih muncul | Pastikan `index.html` berada langsung di `public_html`. |
| Logo/CSS tidak tampil | Pastikan folder `assets` ikut ter-upload dan struktur folder tidak bertingkat dua. |
| WhatsApp membuka nomor salah | Periksa `whatsappNumber` di `site.config.js`, tanpa `+` atau spasi. |
| Perubahan belum muncul | Refresh keras: Ctrl+F5, atau bersihkan cache browser. |
| Error 403/500 | Periksa izin file (umumnya 644) dan folder (umumnya 755), lalu hubungi hosting. |

## Sebelum promosi resmi

- Ganti URL Instagram/Facebook dengan akun bisnis Nusavaniid.
- Tambahkan halaman Privacy Policy dan Terms jika mulai mengumpulkan leads secara rutin.
- Pastikan semua klaim produk, sertifikasi, alamat, dan kontak bisnis sudah valid.
