export function inicializarGoogleTranslate() {
    // Crear e insertar dinámicamente el script de Google Translate
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;

    // Definir la función de inicialización de Google Translate
    window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'es', // Idioma predeterminado del sitio
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE // Diseño simple del widget
            },
            'google_translate_element' // ID del contenedor donde se añadirá el widget
        );
    };

    // Añadir el script al <head>
    document.head.appendChild(script);
}
