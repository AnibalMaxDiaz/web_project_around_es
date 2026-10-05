# Around Spain

Proyecto de maquetación y desarrollo frontend para la práctica del sprint 6 de Tripleten. La página está inspirada en una landing web para explorar destinos turísticos en España, con un diseño moderno, atractivo visual y estructura clara.

## Descripción breve

Este proyecto consiste en la creación de una interfaz web estática con enfoque en la presentación visual de una experiencia de viaje por distintas ciudades y paisajes de España. Se desarrolló con una estructura modular de bloques, estilos reutilizables y una pequeña capa de interactividad para mejorar la experiencia del usuario.

## Funcionalidad implementada hasta esta etapa

- Estructura principal de la página con encabezado, contenido principal y pie de página.
- Tarjetas de contenido para mostrar destinos, experiencias o atributos del proyecto.
- Interactividad básica en JavaScript para manejar elementos de la interfaz, como popups y acciones de usuario en la página.


## Tecnologías usadas

- HTML5, con elementos semánticos y la etiqueta `<template>` para las tarjetas.
- CSS3, con estilos organizados en bloques BEM, diseño adaptable y hojas de estilo modulares.
- JavaScript vanilla (ES6), para manipular el DOM y gestionar eventos, formularios y ventanas emergentes.
- GitHub Pages, para publicar el proyecto.

## Funcionalidades de la versión final

- Se muestran seis tarjetas iniciales generadas a partir del arreglo `initialCards` y de una plantilla HTML.
- Se pueden agregar tarjetas con un título y un enlace a una imagen. La nueva tarjeta aparece al principio de la lista.
- Cada tarjeta permite activar o desactivar el botón «Me gusta» y eliminarse de la página.
- Al seleccionar la imagen de una tarjeta, se abre una ventana emergente con la imagen ampliada y el título del lugar.
- El formulario «Editar perfil» se abre con los datos actuales y permite actualizar el nombre y la descripción.
- Los formularios evitan la recarga de la página al enviarse; después de agregar una tarjeta, el formulario se reinicia.
- Las ventanas emergentes de edición, creación de tarjetas e imagen ampliada se pueden cerrar desde sus botones de cierre.

## Métodos y funciones de JavaScript

- `openModal(modal)` y `closeModal(modal)`: muestran u ocultan una ventana emergente mediante la clase `popup_is-opened`.
- `fillProfileForm()`: coloca en el formulario los valores actuales del perfil.
- `handleOpenEditModal()` y `handleProfileFormSubmit(event)`: abren el editor de perfil y actualizan el nombre y la descripción cuando se envía el formulario.
- `getCardElement(card)`: clona la plantilla de tarjeta, asigna el título, la imagen y el texto alternativo, y configura los eventos de «Me gusta», eliminar y ampliar imagen.
- `renderCard(card, container)`: crea una tarjeta y la inserta al principio del contenedor.
- `handleCardFormSubmit(event)`: procesa el formulario de nueva tarjeta, agrega la tarjeta, cierra la ventana emergente y reinicia el formulario.
- `addEventListener()`, `classList.toggle()`, `cloneNode()`, `prepend()` y `textContent`: se utilizan para gestionar interacciones, crear tarjetas y actualizar contenido de forma segura.

## Enlaces del proyecto

- [Ver el proyecto publicado en GitHub Pages](https://anibalmaxdiaz.github.io/web_project_around_es/)
- [Ver el repositorio en GitHub](https://github.com/AnibalMaxDiaz/web_project_around_es)

## Estructura general

- `index.html`: archivo principal de la página.
- `index.css`: hoja de estilos global del proyecto.
- `pages/index.css`: hoja de estilos que importa los estilos base y los bloques del proyecto.
- `blocks/`: archivos CSS organizados por componentes y secciones.
- `scripts/index.js`: lógica interactiva de la aplicación.
- `images/`: recursos gráficos y de ilustración.
- `vendor/`: fuentes y estilos base.

## Objetivo del proyecto

Aplicar los conocimientos adquiridos en maquetación web, organización de archivos, estilos avanzados y JavaScript básico para crear una página funcional y visualmente cuidada dentro del bootcamp de Tripleten.
