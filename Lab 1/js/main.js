// js/main.js
import { createHeader, createFooter, createSidebar, createGalleryItem } from './components.js';

const app = document.getElementById('app');

const renderGallery = (images) => {
  const main = document.createElement('main');
  main.style.cssText = 'display: flex;';
  const sidebar = createSidebar();
  const content = document.createElement('div');
  content.style.cssText = 'display: flex; flex-wrap: wrap; padding: 1em;';

  images.forEach(img => {
    const item = createGalleryItem(img);
    content.appendChild(item);
  });

  main.appendChild(sidebar);
  main.appendChild(content);

  sidebar.querySelector('#registerBtn').addEventListener('click', () => {
    window.location.href = 'register.html';
  });

  return main;
};

// Carga inicial
const images = JSON.parse(localStorage.getItem('galleryImages')) || [];
app.appendChild(createHeader());
app.appendChild(renderGallery(images));
app.appendChild(createFooter());
