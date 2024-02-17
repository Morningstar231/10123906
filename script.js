var menuToggle = document.getElementById('menuToggle');
var sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function() {
  sidebar.classList.toggle('open');
  menuToggle.classList.toggle('open'); // Menambahkan kelas 'open' pada gambar menu
  
  // Menggeser posisi gambar menu saat menu muncul
  if (sidebar.classList.contains('open')) {
    menuToggle.style.right = '320px'; // Menyesuaikan dengan lebar menu
  } else {
    menuToggle.style.right = '20px'; // Mengembalikan ke posisi awal
  }
});

