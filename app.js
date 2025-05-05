const imagenesGuardadas = JSON.parse(localStorage.getItem("imagenes")) || [];

const body = document.createElement("body");
const container = document.createElement("div");


// Crear estilos dinámicamente
const createStyles = () => {
    const style = document.createElement("style");
    style.textContent = `
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 20px;
            background-color:powderblue;
        }
        .header{
            margin-button:10px;
            background-color: aliceblue;
            border: 2px solid;
            padding:10px;
            text-aling:center;
        }
        .footer{
            color:black;
            margin-top:10px;
            background-color: aliceblue;
            border: 2px solid black;
            text-align:center;        
        }
        .container {
            margin-top:10px;
            border: 2px solid maroon;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align:center;
            padding:10px;
            background-color:snow;
            width:100%;
            height:100%;
        }
        label {
            font-weight: bold;
        }
        input {
            padding: 6px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 10px;
            width: 100%;
        }
        h1{
            color:black;
            size:16px;
            
        }
        .nav{
            background-color: seashell;
            border:2px solid;
            text-align:center;
            padding:10px;
            width:180px;
            align-items: right;

        }
        .gallery{
            border: 1px solid maroon;
            padding:10px;
            display:flex;
        }
        .gallery-item{
            padding:5px;
            border:1px solid black;
            margin-top:10px;
        }
    `;
    document.head.appendChild(style);
};


const createHeader = () => {
    const header = document.createElement("header");
    header.className = 'header';  

    const titulo = document.createElement("h1");
    titulo.textContent="Laboratorio 1";


    const navBar = document.createElement("nav");
    navBar.className="nav";

    const link  = document.createElement("a");
    link.href="registro.html";
    link.textContent="Registrar nueva img";

    navBar.appendChild(link);
    header.appendChild(titulo);
    header.appendChild(navBar);
    document.body.appendChild(header);


};

const createImages = () => {
    const container = document.createElement("div");
    container.className='container';

    const titulo = document.createElement("h1");
    titulo.textContent="Imagenes";

    const gallery = document.createElement("div");
    gallery.className = "gallery";

    imagenesGuardadas.forEach(({url,descripcion})=>{
        const item = document.createElement("div");
        item.className="gallery-item";

        const img = document.createElement("img");
        img.src=url;
        img.alt=descripcion;
        img.style.width = "200px";
        img.style.margin = "10px";

        const desc= document.createElement("p");
        desc.textContent=descripcion;

        item.appendChild(img);
        item.appendChild(desc);
        gallery.appendChild(item);
    });

    container.appendChild(titulo);
    container.appendChild(gallery);
    document.body.appendChild(container);

};

const createFooter = () => {
    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.textContent = "© Johan Alomia";
    document.body.appendChild(footer);
};


// Esperar que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    createStyles();
    createHeader();
    createImages();
    createFooter();
});
