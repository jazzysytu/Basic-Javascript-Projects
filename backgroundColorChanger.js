// const pencet = document.querySelector('#pencet');

// pencet.addEventListener('click', function () {
//     const body = document.querySelector('body');
//     const p = document.createElement('p');
//     const teks = document.createTextNode('Oye oye');

//     body.appendChild(p);
//     p.appendChild(teks);
// });

const pencet = document.querySelector('#pencet');

pencet.addEventListener('click', function () {
    const body = document.querySelector('body');

    body.classList.toggle('badan');
});