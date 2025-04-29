# Inisialisasi penghitung perulangan
jumlah_perulangan = 1

while True:
    print(f"______ Kalkulator Body Mass Index _____")
    print(f"\nPerhitungan ke-{jumlah_perulangan}\n")
    berat = float(input("Masukkan berat badan Anda (kg): "))
    tinggi = float(input("Masukkan tinggi badan Anda (cm): "))

    bmi = berat / ((tinggi * 0.01) ** 2)
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

    # Validasi input y/n
    while True:
        ulang = input("\nApakah Anda ingin menghitung BMI lagi? (y/n): ").strip().lower()
        if ulang in ['y', 'n']:
            break
        print("Input tidak valid. Harap masukkan hanya 'y' atau 'n'.")

    if ulang == 'n':
        print(f"\nAnda telah melakukan {jumlah_perulangan} perhitungan. Terima kasih telah menggunakan Kalkulator BMI!")
        break

    jumlah_perulangan += 1
