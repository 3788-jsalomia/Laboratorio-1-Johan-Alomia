const imagenes = JSON.parse(localStorage.getItem("imagenes")) || [];


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
        form > div {
            margin-bottom: 10px;
            width: 300px;
        }
        button {
            padding: 8px 16px;
            cursor: pointer;
        }

        h1{
            color:black;
            size:16px; 
        }
        .nav{
            background-color: yelow;
            border:2px solid;

        }
    `;
    document.head.appendChild(style);
};


const createHeader = () => {
    const header = document.createElement("header");
    header.className = 'header';  

    const titulo = document.createElement("h1");
    titulo.textContent="Registrar nueva imagen";

    const link  = document.createElement("a");
    link.href="index.html";
    link.textContent="Regresar";


    header.appendChild(titulo);
    header.appendChild(link);
    document.body.appendChild(header);


};

const createRegistro = () => {
    const container = document.createElement("div");
    container.className='container';

    const form = document.createElement("form");

    const campos= [
        {label: 'URL', type:'text',name:'url'},
        {label: 'Descripción', type:'text',name:'desc'}
    ];

    campos.forEach(({label,type,name})=>{
        const fieldWrapper=document.createElement("div");

        const lbl=document.createElement("label");
        lbl.textContent=label;
        lbl.htmlFor=name;

        const inpt=document.createElement("input");
        inpt.type=type;
        inpt.id=name;
        inpt.name=name;
        inpt.required=true;

        fieldWrapper.appendChild(lbl);
        fieldWrapper.appendChild(inpt);

        form.appendChild(fieldWrapper);
    });

    //Crear el boton para hacer el envio
    const submitBtn=document.createElement("button");
    submitBtn.type='submit';
    submitBtn.textContent='Agregar imagen';
    form.appendChild(submitBtn);

    //Con este evento agregamos y validamos
    form.addEventListener("submit",(event)=>{
        event.preventDefault(); // <- Evita el envío real del formulario

        const nuevaImagen={};
        campos.forEach(({name})=>{
            nuevaImagen[name]=form[name].value.trim();
        });

        //validamos si cumple las condiciones
        if(nuevaImagen.url.length === 0 || nuevaImagen.desc.length<3 ){
            alert("Por favor, completa todos los campos corectamente");
            return;
        }

        //Añadimos las imagenes al array
        imagenes.push({
            url:nuevaImagen.url,
            descripcion:nuevaImagen.desc
        });

        // Guardar en localStorage
        localStorage.setItem("imagenes", JSON.stringify(imagenes));

        alert("Imagen agregada exitosamente");
        form.reset();
        //Redirige hacia index una ves enviada cargada la imagen corectamente
        window.location.href = 'index.html';
    });



    container.appendChild(form);


    document.body.appendChild(container);
};

const createFooter = () => {
    const footer = document.createElement("footer");
    footer.className = 'footer';

    const titulo = document.createElement("p");
    titulo.textContent = "© Johan Alomia";

    footer.appendChild(titulo);
    document.body.appendChild(footer);
};


// Esperar que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    createStyles();
    createHeader();
    createRegistro();
    createFooter();
});
