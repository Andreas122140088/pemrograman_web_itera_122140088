# Humanized versi pengelolaan nilai mahasiswa
print("=== Pengelolaan Nilai Mahasiswa ===\n")

mahasiswa = [
    {"nama": "Andi", "nim": "A001", "nilai_uts": 78, "nilai_uas": 85, "nilai_tugas": 80},
    {"nama": "Budi", "nim": "A002", "nilai_uts": 65, "nilai_uas": 70, "nilai_tugas": 75},
    {"nama": "Cici", "nim": "A003", "nilai_uts": 90, "nilai_uas": 92, "nilai_tugas": 88},
    {"nama": "Dina", "nim": "A004", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 58},
    {"nama": "Eko", "nim": "A005", "nilai_uts": 40, "nilai_uas": 50, "nilai_tugas": 45},
]

for m in mahasiswa:
    nilai_akhir = 0.3 * m["nilai_uts"] + 0.4 * m["nilai_uas"] + 0.3 * m["nilai_tugas"]
    m["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        m["grade"] = "A"
        komentar = "Luar biasa! Terus pertahankan prestasimu."
    elif nilai_akhir >= 70:
        m["grade"] = "B"
        komentar = "Bagus! Masih bisa lebih baik lagi."
    elif nilai_akhir >= 60:
        m["grade"] = "C"
        komentar = "Cukup, tapi perlu peningkatan."
    elif nilai_akhir >= 50:
        m["grade"] = "D"
        komentar = "Hati-hati! Perlu belajar lebih giat."
    else:
        m["grade"] = "E"
        komentar = "Perlu perhatian serius terhadap pelajaran."

    m["komentar"] = komentar

# Tampilkan tabel hasil
print(f"{'Nama':<10} {'NIM':<8} {'Akhir':<7} {'Grade':<6} {'Komentar'}")
print("-" * 60)
for m in mahasiswa:
    print(f"{m['nama']:<10} {m['nim']:<8} {m['nilai_akhir']:<7.2f} {m['grade']:<6} {m['komentar']}")

# Tampilkan siswa terbaik dan terendah
tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print(f"\n🎓 Mahasiswa terbaik: {tertinggi['nama']} ({tertinggi['nilai_akhir']:.2f}) - Grade {tertinggi['grade']}")
print(f"📉 Mahasiswa dengan nilai terendah: {terendah['nama']} ({terendah['nilai_akhir']:.2f}) - Grade {terendah['grade']}")
