﻿#  Browser-Extension-Manager

Una herramienta web para gestionar extensiones del navegador con una interfaz intuitiva y gestión de estados en tiempo real.

## Características

- Activar/desactivar extensiones con retroalimentación visual
- Filtrar extensiones por estado (Todas/Activas/Inactivas)
- Soporte para tema claro/oscuro
- Cambio de idioma (Inglés/Español)
- Configuración persistente usando almacenamiento local
- Actualizaciones de datos JSON en tiempo real

## Tecnologías Utilizadas

- HTML5
- CSS3 (con Variables CSS para temas)
- JavaScript (Módulos ES6+)
- PHP (para gestión de datos JSON)
- API de Almacenamiento Local

## Instalación

1. Coloca el proyecto en el directorio de tu servidor web
2. Asegúrate de que PHP esté habilitado en tu servidor
3. Verifica que el directorio `data` tenga permisos de escritura
4. Accede a través de tu servidor web (ej: http://localhost/Browser%20manager)

## Estructura del Proyecto


```text
├── css/
│   ├── styles.css
│   ├── reset.css
│   └── themes.css
├── js/
│   ├── app.js
│   ├── extensionManager.js
│   ├── themeManager.js
│   └── utils.js
├── assets/
│   ├── font/
│   └── images/
├── data/
│   └── data.json
├── .gitignore
└── index.html
```



## Uso

- Haz clic en el icono de luna/sol para cambiar entre temas oscuro y claro
- Usa el icono del globo para cambiar entre inglés y español
- Filtra las extensiones usando los botones Todas/Activas/Inactivas
- Activa/desactiva las extensiones usando los botones de interruptor

## Requisitos

- Servidor web con soporte PHP (ej: XAMPP, WAMP)
- Navegador web moderno con JavaScript habilitado
- Permisos de escritura para el directorio de datos
