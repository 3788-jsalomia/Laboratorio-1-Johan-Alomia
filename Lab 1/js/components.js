// js/components.js
export const createHeader = () => {
    const header = document.createElement('header');
    header.textContent = 'Galería de Imágenes';
    header.style.cssText = 'background: #333; color: white; padding: 1em; text-align: center;';
    return header;
  };
  
  export const createFooter = () => {
    const footer = document.createElement('footer');
    footer.textContent = '© 2025 Galería JS';
    footer.style.cssText = 'background: #333; color: white; padding: 1em; text-align: center;';
    return footer;
  };
  
  export const createSidebar = () => {
    const sidebar = document.createElement('aside');
    sidebar.innerHTML = `<button id="registerBtn">Registrar nueva imagen</button>`;
    sidebar.style.cssText = 'padding: 1em; background: #eee; min-width: 200px;';
    return sidebar;
  };
  
  export const createGalleryItem = ({ url, descripcion }) => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');
    div.style.cssText = 'margin: 1em; border: 1px solid #ccc; padding: 1em;';
    const img = document.createElement('img');
    img.src = url;
    img.alt = descripcion;
    img.style.width = '100px';
    const p = document.createElement('p');
    p.textContent = descripcion;
    div.appendChild(img);
    div.appendChild(p);
    return div;
  };
  