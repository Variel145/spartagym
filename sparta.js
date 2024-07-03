// Ambil form dan button submit
const form = document.querySelector('.contact-me-section form');
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const pesanInput = document.getElementById('pesan');

// Tambahkan event listener untuk form saat submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan default behavior form

    // Ambil nilai dari inputan
    const nama = namaInput.value;
    const email = emailInput.value;
    const pesan = pesanInput.value;

    // Validasi jika input tidak kosong
    if (nama.trim() === '' || email.trim() === '' || pesan.trim() === '') {
        alert('Harap lengkapi semua kolom!');
        return; // Menghentikan eksekusi jika ada input yang kosong
    }

    // Simulasi pengiriman data
    // Menampilkan alert sebagai contoh
    alert(`Terima kasih ${nama}! Pesan Anda telah terkirim:\nEmail: ${email}\nPertanyaan: ${pesan}`);

    // Reset form setelah submit
    form.reset();
});