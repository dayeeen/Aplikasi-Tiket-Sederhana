// Ambil elemen yang dibutuhkan
const hargaInput = document.getElementById('Harga');
const jumlahInput = document.getElementById('JumlahTiket');
const diskonInput = document.getElementById('DiskonMember'); // Ganti ID Diskon
const totalInput = document.getElementById('Total');
const memberInput = document.getElementById('Member');

// Tambahkan event listener untuk setiap perubahan pada harga dan jumlah
hargaInput.addEventListener('input', hitungTotal);
jumlahInput.addEventListener('input', hitungTotal);

// Fungsi untuk menghitung total
function hitungTotal() {
    // Ambil nilai dari input harga dan jumlah
    const harga = parseFloat(hargaInput.value) || 0;
    const jumlah = parseInt(jumlahInput.value) || 0;

    // Hitung total
    const total = harga * jumlah;

    // Update input total
    totalInput.value = total;

    //Nilai default diskon
    diskonInput.value = 0;

    // Lakukan hal lain seperti menghitung diskon jika diperlukan
    memberInput.addEventListener('click', function () {
        if (memberInput.checked == false) {
            diskonInput.value = 0;
        } else {
            diskonInput.value = total * 0.1; // Ubah diskon menjadi 10%
            totalInput.value = total - diskonInput.value;
        }
    });
    
}

// Panggil fungsi hitungTotal pada saat halaman dimuat
hitungTotal();

// Ketika tombol submit ditekan, maka akan menampilkan pop up berhasil
const submit = document.getElementById('Submit');
submit.addEventListener('click', function () {
    alert('Pembelian berhasil');
});
