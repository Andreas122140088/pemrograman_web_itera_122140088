# Sistem Manajemen Perpustakaan Sederhana

Repositori ini berisi implementasi sistem manajemen perpustakaan sederhana menggunakan Object-Oriented Programming (OOP) dalam bahasa Python. Program ini dibuat sebagai tugas praktikum pada mata kuliah Pemrograman Berorientasi Objek.

## Deskripsi Program

Program ini memungkinkan pengguna untuk:
- Menambahkan item (buku dan majalah) ke dalam koleksi perpustakaan
- Menampilkan daftar semua item yang tersedia
- Mencari item berdasarkan judul atau ID

## Konsep OOP yang Digunakan

- Abstract Class: `LibraryItem` digunakan sebagai dasar untuk semua jenis item perpustakaan.
- Inheritance: `Book` dan `Magazine` mewarisi `LibraryItem`.
- Encapsulation: Atribut-atribut penting dilindungi menggunakan protected dan private modifiers (`_item_id`, `__author`, `__items`, dll).
- Polymorphism: Method `display_info()` di-override oleh masing-masing subclass, dan dipanggil secara dinamis.
- Property: Atribut `title` pada class `LibraryItem` menggunakan property getter.


## Author

Nama: Andreas Alfin Yoga Utama  
NIM: 122140088
Pertemuan: 5 - OOP Python
