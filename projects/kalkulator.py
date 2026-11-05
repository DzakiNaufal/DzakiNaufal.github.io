import math

def tambah(a, b):
    return a + b

def kurang(a, b):
    return a - b

def kali(a, b):
    return a * b

def bagi(a, b):
    return a / b

def akar(a):
    return math.sqrt(a)

print("==== Kalkulator Sederhana ====")
a = float(input("Masukkan nilai a = "))
b = float(input("Masukkan nilai b = "))
print("1. Tambah")
print("2. Kurang")
print("3. Kali")
print("4. Bagi")
print("5. Akar (hanya nilai a)")
pilihan = int(input("Masukkan Pilihan = "))

if pilihan == 1:
    print("Hasil dari {} + {} = {}".format(a, b, tambah(a, b)))
elif pilihan == 2:
    print("Hasil dari {} - {} = {}".format(a, b, kurang(a, b)))
elif pilihan == 3:
    print("Hasil dari {} * {} = {}".format(a, b, kali(a, b)))
elif pilihan == 4:
    print("Hasil dari {} / {} = {}".format(a, b, bagi(a, b)))
elif pilihan == 5:
    print("Akar kuadrat dari {} = {}".format(a, akar(a)))
else:
    print("Pilihan tidak valid!")