// js/register.js
import { createHeader, createFooter } from './components.js';

const app = document.getElementById('app');

const setupRegisterPage = () => {
  const form = document.createElement('form');
  form.innerHTML = `
    <label>URL de la imagen: <input type="text" id="url"></label><br/>
    <label>Descripción: <input type="text" id="desc"></label><br/>
    <button type="submit">Registrar</button>
  `;
  form.style.padding = '2em';

  form.addEventListener('submit', e => {
    e.preventDefault();
    const url = document.getElementById('url').value.trim();
    const desc = document.getElementById('desc').value.trim();

    if (!url || desc.length < 3) {
      alert('Por favor ingrese una URL válida y una descripción de al menos 3 caracteres.');
      return;
    }

    const images = JSON.parse(localStorage.getItem('galleryImages')) || [];
    images.push({ url, descripcion: desc });
    localStorage.setItem('galleryImages', JSON.stringify(images));
    window.location.href = 'index.html';
  });

  app.appendChild(form);
};

app.appendChild(createHeader());
setupRegisterPage();
app.appendChild(createFooter());
