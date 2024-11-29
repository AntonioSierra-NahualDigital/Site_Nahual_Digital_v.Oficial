document.addEventListener('DOMContentLoaded', function() {
    activarMenuPrincipal(); // Activa el menú hamburguesa
    gestionarNavegacion();  // Puedes expandir esta función para gestionar la navegación
    iniciarCarrusel();
    iniciarCarrusel2();
    iniciarCarrusel3();
    gestionarPlanes();
    manejarReduccionHeader();
    iniciarPantallaDeCarga();
 });
 // Función para activar y desactivar el menú hamburguesa
 function activarMenuPrincipal() {
     // Selecciona el ícono de la hamburguesa y el menú de navegación principal
     const hamburguesa = document.getElementById('hamburguesa-principal');
     const navegacion = document.querySelector('.navegacion-principal');
     const enlaces = document.querySelectorAll('.navegacion-principal a'); // Selecciona todos los enlaces del menú
 
     // Evento al hacer clic en el ícono de la hamburguesa
     hamburguesa.addEventListener('click', function() {
         // Alterna la clase 'activo' tanto en la hamburguesa como en la navegación
         hamburguesa.classList.toggle('activo');
         navegacion.classList.toggle('activo');
     });
 
     // Evento para cerrar el menú al hacer clic en un enlace
     enlaces.forEach(enlace => {
         enlace.addEventListener('click', function() {
             // Elimina la clase 'activo' de la hamburguesa y de la navegación cuando se hace clic en un enlace
             hamburguesa.classList.remove('activo');
             navegacion.classList.remove('activo');
         });
     });
 
     // Evento para cerrar el menú cuando se hace clic fuera de la hamburguesa o el menú
     document.addEventListener('click', function(e) {
         // Comprueba si el clic NO fue en la hamburguesa o dentro del menú
         if (!navegacion.contains(e.target) && !hamburguesa.contains(e.target)) {
             // Si el menú está abierto (es decir, tiene la clase 'activo'), se cierra
             if (hamburguesa.classList.contains('activo')) {
                 // Elimina la clase 'activo' tanto de la hamburguesa como de la navegación
                 hamburguesa.classList.remove('activo');
                 navegacion.classList.remove('activo');
             }
         }
     });
 } 
 // Función para gestionar la navegación (puedes expandirla en el futuro si es necesario)
 function gestionarNavegacion() {
     console.log("Navegación gestionada"); // Placeholder para otras funcionalidades de la navegación
 }
// Función para iniciar el carrusel
function iniciarCarrusel() {
    let indiceActual = 0;  // Variable local para el índice de la diapositiva actual
    const diapositivas = document.querySelectorAll('.diapositiva');
    const botonPrev = document.querySelector('.prev');
    const botonNext = document.querySelector('.next');
    let intervalo;
    // Función para mostrar la diapositiva actual
    function mostrarDiapositiva(indice) {
        diapositivas.forEach((diapositiva, i) => {
            diapositiva.classList.remove('activa', 'entrante', 'salida');            
            if (i === indice) {
                diapositiva.classList.add('activa');  // Muestra la diapositiva activa
            } else if (i === (indice - 1 + diapositivas.length) % diapositivas.length) {
                diapositiva.classList.add('salida');  // La diapositiva que sale
            } else if (i === (indice + 1) % diapositivas.length) {
                diapositiva.classList.add('entrante');  // La siguiente que entra
            }
        });
    }
    // Función para cambiar a la siguiente o anterior diapositiva
    function cambiarDiapositiva(direccion) {
        indiceActual = (indiceActual + direccion + diapositivas.length) % diapositivas.length;
        mostrarDiapositiva(indiceActual);
    }
    // Función para reiniciar el autoplay
    function reiniciarIntervalo() {
        clearInterval(intervalo);  // Detiene el intervalo actual
        intervalo = setInterval(() => {
            cambiarDiapositiva(1);  // Avanza automáticamente después de reiniciar el intervalo
        }, 5000);
    }  
    // Autoplay: cambiar la diapositiva cada 8 segundos
    intervalo = setInterval(() => {
        cambiarDiapositiva(1);  // Cambia a la siguiente diapositiva
    }, 8000);
    // Mostrar la primera diapositiva
    mostrarDiapositiva(indiceActual);
}
// Función para iniciar el carrusel
function iniciarCarrusel2() {
    let indiceActual = 0;  // Variable local para el índice de la diapositiva actual
    const diapositivas = document.querySelectorAll('.diapositiva2');
    const botonPrev = document.querySelector('.prev');
    const botonNext = document.querySelector('.next');
    let intervalo;
        // Verifica si los elementos del carrusel 2 existen en el DOM
        if (!diapositivas.length || !botonPrev || !botonNext) {
            console.warn('Carrusel 2 no encontrado en esta página.');
            return;
        }
    // Función para mostrar la diapositiva actual
    function mostrarDiapositiva(indice) {
        diapositivas.forEach((diapositiva, i) => {
            diapositiva.classList.remove('activa2', 'entrante2', 'salida2');            
            if (i === indice) {
                diapositiva.classList.add('activa2');  // Muestra la diapositiva activa
            } else if (i === (indice - 1 + diapositivas.length) % diapositivas.length) {
                diapositiva.classList.add('salida2');  // La diapositiva que sale
            } else if (i === (indice + 1) % diapositivas.length) {
                diapositiva.classList.add('entrante2');  // La siguiente que entra
            }
        });
    }
    // Función para cambiar a la siguiente o anterior diapositiva
    function cambiarDiapositiva(direccion) {
        indiceActual = (indiceActual + direccion + diapositivas.length) % diapositivas.length;
        mostrarDiapositiva(indiceActual);
    }
    // Función para reiniciar el autoplay
    function reiniciarIntervalo() {
        clearInterval(intervalo);  // Detiene el intervalo actual
        intervalo = setInterval(() => {
            cambiarDiapositiva(1);  // Avanza automáticamente después de reiniciar el intervalo
        }, 5000);
    }
      // Evento para el botón "Anterior"
      botonPrev.addEventListener('click', () => {
        cambiarDiapositiva(-1);  // Retrocede una diapositiva
        reiniciarIntervalo();  // Reinicia el autoplay al hacer clic manualmente
    });
    // Evento para el botón "Siguiente"
    botonNext.addEventListener('click', () => {
        cambiarDiapositiva(1);  // Avanza una diapositiva
        reiniciarIntervalo();  // Reinicia el autoplay al hacer clic manualmente
    });
    // Autoplay: cambiar la diapositiva cada 8 segundos
    intervalo = setInterval(() => {
        cambiarDiapositiva(1);  // Cambia a la siguiente diapositiva
    }, 8000);
    // Mostrar la primera diapositiva
    mostrarDiapositiva(indiceActual);
}
// Funcion que inicia el carrusel 3
function iniciarCarrusel3() {
    (function () {
        let indiceActual = 0; // Índice de la diapositiva actual
        const diapositivas = document.querySelectorAll('.diapositiva3');
        const botonPrev3 = document.querySelector('.prev3');
        const botonNext3 = document.querySelector('.next3');
        let intervalo;

        if (!diapositivas.length || !botonPrev3 || !botonNext3) {
            console.error('Error: Elementos del carrusel 3 no encontrados.');
            return;
        }

        function mostrarDiapositiva3(indice) {
            diapositivas.forEach((diapositiva, i) => {
                diapositiva.classList.remove('activa3', 'entrante3', 'salida3');
                if (i === indice) {
                    diapositiva.classList.add('activa3');
                } else if (i === (indice - 1 + diapositivas.length) % diapositivas.length) {
                    diapositiva.classList.add('salida3');
                } else if (i === (indice + 1) % diapositivas.length) {
                    diapositiva.classList.add('entrante3');
                }
                console.log(`Diapositiva ${i} clases:`, diapositiva.className);
            });
        }

        function cambiarDiapositiva3(direccion) {
            indiceActual = (indiceActual + direccion + diapositivas.length) % diapositivas.length;
            mostrarDiapositiva3(indiceActual);
        }

        function reiniciarIntervalo3() {
            clearInterval(intervalo);
            intervalo = setInterval(() => cambiarDiapositiva3(1), 8000);
        }

        botonPrev3.addEventListener('click', () => {
            console.log('Botón anterior presionado');
            cambiarDiapositiva3(-1);
            reiniciarIntervalo3();
        });

        botonNext3.addEventListener('click', () => {
            console.log('Botón siguiente presionado');
            cambiarDiapositiva3(1);
            reiniciarIntervalo3();
        });

        intervalo = setInterval(() => cambiarDiapositiva3(1), 8000);
        mostrarDiapositiva3(indiceActual);
    })();
}
//Funciones para mostrar los planes
function gestionarPlanes() {
    const botonesMostrarPlanes = document.querySelectorAll('.boton-mostrar-planes');

    botonesMostrarPlanes.forEach((boton) => {
        boton.addEventListener('click', (event) => {
            const seccion = event.target.closest('.contenedor-planes');
            const planes = seccion.querySelector('.planes');

            const estaVisible = planes.classList.contains('mostrar-planes');
            planes.classList.toggle('mostrar-planes', !estaVisible);

            // Cambiar texto del botón
            const spanTexto = boton.querySelector('span');
            if (spanTexto) {
                spanTexto.textContent = estaVisible ? 'Mostrar planes' : 'Ocultar planes';
            }

            // Cambiar el atributo aria-expanded
            boton.setAttribute('aria-expanded', !estaVisible);

            // Desplazar al div solo si ahora es visible
            if (!estaVisible) {
                planes.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
}
function manejarReduccionHeader() {
    const header = document.querySelector('.header');

    // Verificamos que exista el header antes de proceder
    if (!header) return;

    // Agregar evento de scroll para detectar desplazamiento
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // Detectar si el scroll supera un umbral
        if (scrollPosition > 1) {
            header.classList.add('reducido'); // Agrega la clase
        } else {
            header.classList.remove('reducido'); // Elimina la clase
        }
    });
}
// Función para inicializar la pantalla de carga con el nuevo spinner
function iniciarPantallaDeCarga() {
    // Crear la pantalla de carga dinámicamente
    const pantallaCarga = document.createElement("div");
    pantallaCarga.classList.add("pantalla-carga");
    pantallaCarga.innerHTML = `
      <div class="loader"></div>
    `;
  
    // Aplicar los estilos CSS directamente
    const styles = `
      .pantalla-carga {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.7); /* Fondo oscuro translúcido */
        backdrop-filter: blur(10px); /* Fondo con desenfoque */
        z-index: 9998; /* Nivel inferior para el fondo */
      }
      .loader {
        width: 50px;
        aspect-ratio: 1;
        box-shadow: 0 0 0 3px #04C4DA inset; /* Color principal del círculo */
        border-radius: 50%;
        position: relative;
        animation: l11 7s infinite;
      }
      .loader:before,
      .loader:after {
        content: "";
        position: absolute;
        top: calc(100% + 3px);
        left: calc(50% - 12.5px);
        width: 25px;
        aspect-ratio: 1;
        border-radius: 50%;
        transform-origin: 50% -28px;
        animation: l11 1.5s infinite;
      }
      .loader:before {
        box-shadow: 0 0 0 3px #F26AC5 inset; /* Segundo color */
      }
      .loader:after {
        box-shadow: 0 0 0 3px #7514F3 inset; /* Tercer color */
        animation-delay: -0.75s; /* Retraso para la animación */
      }
      .logo-carga {
        position: absolute;
        z-index: 9999; /* Nivel superior para el logotipo */
        top: calc(45% - 5px);
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30%;
        height: auto;
      }
      @keyframes l11 {
        100% {
          transform: rotate(360deg);
        }
      }
    `;
  
    // Agregar estilos al documento
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
  
    // Agregar la pantalla de carga al documento
    document.body.appendChild(pantallaCarga);
  
    // Ocultar la pantalla de carga cuando la página termine de cargar
    window.addEventListener("load", () => {
      setTimeout(() => {
        pantallaCarga.style.opacity = "0"; // Transición para ocultar
        pantallaCarga.style.pointerEvents = "none"; // Evitar interacciones
        setTimeout(() => pantallaCarga.remove(), 500); // Eliminar del DOM después de la transición
      }, 500); // Tiempo mínimo visible
    });
  }
  
  
  
  