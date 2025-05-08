from abc import ABC, abstractmethod

# Abstract Class
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id  # Protected attribute
        self._title = title      # Protected attribute

    @abstractmethod
    def display_info(self):
        pass

    @property
    def title(self):  # Property getter
        return self._title


# Subclass 1
class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author  # Private attribute

    def display_info(self):
        print(f"[Buku] ID: {self._item_id}, Judul: {self._title}, Penulis: {self.__author}")


# Subclass 2
class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        super().__init__(item_id, title)
        self.__issue_number = issue_number  # Private attribute

    def display_info(self):
        print(f"[Majalah] ID: {self._item_id}, Judul: {self._title}, Edisi: {self.__issue_number}")


# Kelas Library untuk mengelola koleksi
class Library:
    def __init__(self):
        self.__items = []  # Private attribute: daftar koleksi item

    def add_item(self, item: LibraryItem):
        self.__items.append(item)
        print(f"Item '{item.title}' berhasil ditambahkan ke perpustakaan.")

    def show_all_items(self):
        print("\nDaftar Koleksi:")
        for item in self.__items:
            item.display_info()  # Polymorphism

    def search_item(self, keyword):
        print(f"\nHasil pencarian untuk '{keyword}':")
        found = False
        for item in self.__items:
            if keyword.lower() in item.title.lower() or keyword == getattr(item, "_item_id", ""):
                item.display_info()
                found = True
        if not found:
            print("Item tidak ditemukan.")


# Contoh penggunaan
if __name__ == "__main__":
    perpustakaan = Library()

    # Tambah item
    buku1 = Book("B001", "Belajar Python", "Andi")
    majalah1 = Magazine("M001", "Teknologi Hari Ini", "April 2025")

    perpustakaan.add_item(buku1)
    perpustakaan.add_item(majalah1)

    # Tampilkan semua item
    perpustakaan.show_all_items()

    # Cari item
    perpustakaan.search_item("Python")
    perpustakaan.search_item("M001")
    perpustakaan.search_item("Tidak Ada")
