const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
  const abierto = menu.classList.toggle("abierto");
  menuBtn.setAttribute("aria-expanded", abierto ? "true" : "false");
  menuBtn.textContent = abierto ? "Cerrar" : "Menú";
});

menu.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("abierto");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "Menú";
  });
});

const tabs = [...document.querySelectorAll("[role='tab']")];
tabs.forEach((tab) => {
  tab.addEventListener("click", () => seleccionar(tab));
});

function seleccionar(tab) {
  tabs.forEach((otro) => {
    const activo = otro === tab;
    otro.setAttribute("aria-selected", activo ? "true" : "false");
    document.getElementById(otro.getAttribute("aria-controls")).hidden = !activo;
  });
}

const pasos = [
  {
    foto: "img/empleador-candidatos.png",
    alt: "Candidatos en la aplicación del empleador.",
    texto: "El empleador busca por especialidad y localidad. Ve lo que la persona estudió y puede abrir sus capacidades o escribirle."
  },
  {
    foto: "img/empleador-ofertas.png",
    alt: "Oferta publicada y postulación recibida.",
    texto: "Publica una oferta. Cuando alguien se postula, puede mirar el proyecto y el currículum antes de decidir."
  },
  {
    foto: "img/empleador-mensajes.png",
    alt: "Lista de mensajes con Mateo Palacio.",
    texto: "La conversación queda guardada. En el recorrido ya probado, Lionel Gallardo y Mateo Palacio se escribieron por la postulación a Programador junior C#."
  },
  {
    foto: "img/logo.png",
    alt: "Logo de Red de Empleo Joven Formosa.",
    texto: "La institución revisa el trabajo en la web y el administrador ordena cuentas y permisos. Esas pantallas existen. Acá no se muestran correos ni claves. No hay un video todavía: el guion está debajo."
  }
];

let indice = 0;
const foto = document.querySelector("#foto-recorrido");
const texto = document.querySelector("#texto-recorrido");

function mostrarPaso() {
  foto.src = pasos[indice].foto;
  foto.alt = pasos[indice].alt;
  texto.textContent = pasos[indice].texto;
}

document.querySelector("#anterior").addEventListener("click", () => {
  indice = (indice + pasos.length - 1) % pasos.length;
  mostrarPaso();
});
document.querySelector("#siguiente").addEventListener("click", () => {
  indice = (indice + 1) % pasos.length;
  mostrarPaso();
});
mostrarPaso();

document.querySelector("#guion").textContent =
  "En Formosa, muchos egresados técnicos terminan de estudiar y todavía no tienen un empleo formal. El título dice qué carrera cursaron. No siempre muestra qué saben hacer.\n\n" +
  "Red de Empleo Joven Formosa reúne a cuatro personas. El egresado arma su perfil, pide ayuda a Gemini para redactar el CV y muestra un proyecto. Gemini no certifica nada.\n\n" +
  "La institución recibe ese trabajo, mira la evidencia y registra si lo revisó. Instituto Superior Fermosa ya avaló un proyecto real de gestión de stock.\n\n" +
  "El empleador publica una oferta, busca por especialidad y escribe al candidato. Lionel Gallardo publicó un puesto de programador junior y Mateo Palacio se postuló. La conversación quedó guardada.\n\n" +
  "El administrador ordena cuentas y permisos. Nadie entra en el lugar de otro.\n\n" +
  "La plataforma no promete un contrato. Busca que el primer contacto se apoye en capacidades visibles, en la provincia y con un costo bajo para empezar.";
