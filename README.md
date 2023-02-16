# <img src="icon.png" width="25"> UI Enhancements Extension

Esta es una extensión de navegador para navegadores basados en Chromium que mejora la interfaz de usuario de Github. Ofrece las siguientes características:

- Muestra los atajos de teclado al menú de navegación de Github.
- Permite al usuario desactivar la inyección de CSS personalizado en las páginas de Github.

*Captura de pantalla (15/02/2023):*

<img src="https://i.imgur.com/7XAFr5y.png" height="115">

La extensión está implementada en JavaScript, utilizando la API de extensiones de Chrome. Consta de los siguientes archivos

- `manifest.json`: El archivo de configuración que define la extensión y sus permisos.
- `content.js`: El código JavaScript que inyecta el CSS personalizado en las páginas de Github y Reddit, y escucha los mensajes del popup.
- `popup.html`: El código HTML y CSS para la ventana emergente que aparece cuando el usuario hace clic en el icono de la extensión.
- `popup.js`: El código JavaScript que gestiona la interacción con la interfaz de usuario de la ventana emergente.

## Instalación

Para instalar la extensión, siga estos pasos:

1. Clona o descarga el repositorio en tu ordenador local

    `git clone https://github.com/totallynotdavid/UI-Enhancements-Extension`

2. Ve a `chrome://extensions` si usas Google Chrome o `edge://extensions` si usas Edge.
3. Activa el "Modo desarrollador" en la esquina superior derecha.
4. Haz clic en "Cargar desempaquetada" y selecciona la carpeta en la que descargaste la extensión.
5. La extensión debería aparecer ahora en la lista de extensiones instaladas.

## Uso

Para utilizar la extensión, siga estos pasos:

1. Dirígete a Github.
2. Haga clic en el icono de la extensión en la esquina superior derecha del navegador.
3. Haga clic en la casilla de verificación para desactivar la inyección de CSS personalizado, si lo desea.
