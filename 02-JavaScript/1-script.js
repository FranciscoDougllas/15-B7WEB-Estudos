const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
const p = document.querySelector('p');

h1.addEventListener('click', () => {
    h1.style.color = 'red';
});

btn.addEventListener('click', () => {
    h1.style.display = 'block';
    p.style.display = 'block';
});

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'green';
    p.style.display = 'flex';
});