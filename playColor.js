const tomUbahWarna = document.getElementById('tomUbahWarna');
// const body = document.querySelector('body');

// tomUbahWarna.addEventListener('click', function () {
//     const pilih = prompt("Ketikkan warna yang ingin dipilih! 1. Merah, 2. Hitam");

//     if (pilih == "Merah") {
//         body.style.backgroundColor = "red";
//     } else if (pilih == "Hitam") {
//         body.style.backgroundColor = "black";
//     } else {
//         alert("Maaf, tidak ada warna " + pilih);
//     }
// });

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tomUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

// ? Versi Efektif
const warna = document.querySelectorAll("input[type='range']");

warna.forEach(function (slider) {
    slider.addEventListener("input", function () {
        const r = document.querySelector('input[name=sMerah]').value;
        const g = document.querySelector('input[name=sHijau]').value;
        const b = document.querySelector('input[name=sBiru]').value;
        const kode = document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

        const css = document.getElementById('css');
        css.innerText = "rgba: " + kode;
    });
});

document.body.addEventListener('mousemove', function (e) {
    // posisi mouse
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 100)'
});

// ! Versi Manual
// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]');

// sMerah.addEventListener('input', function () {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
// });

// sHijau.addEventListener('input', function () {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
// });

// sBiru.addEventListener('input', function () {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
// });