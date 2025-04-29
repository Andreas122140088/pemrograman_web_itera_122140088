# Penghitung BMI dengan output ramah
print("=== Kalkulator BMI ===")
berat = float(input("Masukkan berat badan Anda (kg): "))
tinggi = float(input("Masukkan tinggi badan Anda (m): "))

bmi = berat / (tinggi ** 2)
print(f"\nBMI Anda adalah: {bmi:.2f}")

if bmi < 18.5:
    kategori = "Berat badan kurang"
    saran = "Anda perlu menambah asupan gizi agar mencapai berat badan ideal."
elif bmi < 25:
    kategori = "Berat badan normal"
    saran = "Bagus! Pertahankan gaya hidup sehat Anda."
elif bmi < 30:
    kategori = "Berat badan berlebih"
    saran = "Coba kurangi makanan berlemak dan tambah aktivitas fisik."
else:
    kategori = "Obesitas"
    saran = "Sebaiknya konsultasikan dengan ahli gizi untuk penanganan lebih lanjut."

print(f"Kategori: {kategori}")
print(f"Saran: {saran}")
