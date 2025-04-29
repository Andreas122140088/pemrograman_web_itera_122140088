import math_operations as mo

print("=== Program Matematika & Konversi Suhu ===\n")

# GEOMETRI
print("--- Geometri ---")
sisi = float(input("Masukkan panjang sisi persegi (cm): "))
print(f"Luas persegi (cm²): {mo.luas_persegi(sisi)}")
print(f"Keliling persegi (cm): {mo.keliling_persegi(sisi)}")

panjang = float(input("\nMasukkan panjang persegi panjang: "))
lebar = float(input("Masukkan lebar persegi panjang (cm): "))
print(f"Luas persegi panjang (cm²): {mo.luas_persegi_panjang(panjang, lebar)}")
print(f"Keliling persegi panjang (cm): {mo.keliling_persegi_panjang(panjang, lebar)}")

jari_jari = float(input("\nMasukkan jari-jari lingkaran (cm): "))
print(f"Luas lingkaran (cm²): {mo.luas_lingkaran(jari_jari)}")
print(f"Keliling lingkaran (cm²): {mo.keliling_lingkaran(jari_jari)}")

# KONVERSI SUHU
print("\n--- Konversi Suhu ---")

while True:
    print("Pilih satuan suhu input:")
    print("1. Celsius")
    print("2. Fahrenheit")
    print("3. Kelvin")
    pilihan = input("Masukkan pilihan (1/2/3): ")

    if pilihan in ("1", "2", "3"):
        suhu = float(input("Masukkan nilai suhu: "))
        
        if pilihan == "1":
            print(f"\nInput: {suhu:.2f} °C")
            print(f"Fahrenheit: {mo.celsius_to_fahrenheit(suhu):.2f} °F")
            print(f"Kelvin: {mo.celsius_to_kelvin(suhu):.2f} K")
        
        elif pilihan == "2":
            print(f"\nInput: {suhu:.2f} °F")
            print(f"Celsius: {mo.fahrenheit_to_celsius(suhu):.2f} °C")
            print(f"Kelvin: {mo.fahrenheit_to_kelvin(suhu):.2f} K")
        
        elif pilihan == "3":
            print(f"\nInput: {suhu:.2f} K")
            print(f"Celsius: {mo.kelvin_to_celsius(suhu):.2f} °C")
            print(f"Fahrenheit: {mo.kelvin_to_fahrenheit(suhu):.2f} °F")
        
        break  # Keluar dari perulangan setelah input valid dan konversi dilakukan

    else:
        print("Pilihan tidak valid. Silakan coba lagi.\n")

print(f"\nKonstanta PI dari modul: {mo.PI}")
