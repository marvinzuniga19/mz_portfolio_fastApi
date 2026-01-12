# Portfolio Web - Marvin Zúniga

Portafolio web personal desarrollado con FastAPI que muestra información profesional, proyectos y datos de contacto de Marvin Zúniga.

## 📋 Descripción

Este proyecto es un portafolio web moderno y responsivo que presenta:
- Información personal y profesional
- Galería de proyectos desarrollados
- Enlaces a repositorios de GitHub
- Descarga del CV en formato PDF
- Información de contacto y redes sociales

## ✨ Características

- **Diseño moderno y responsivo**: Interfaz adaptada para diferentes dispositivos
- **Navegación intuitiva**: Menú de navegación con secciones About Me, Projects y Contact
- **Galería de proyectos**: Muestra 9 proyectos con descripciones y tecnologías utilizadas
- **Descarga de CV**: Botón para descargar el currículum en formato PDF
- **Enlaces a redes sociales**: LinkedIn y GitHub
- **Tema oscuro**: Diseño con fondo oscuro y colores modernos

## 🛠️ Tecnologías Utilizadas

- **Backend**: FastAPI
- **Templates**: Jinja2
- **Frontend**: HTML5, CSS3, Bootstrap 5
- **Servidor**: Uvicorn
- **Iconos**: Bootstrap Icons

## 📦 Requisitos

- Python 3.7 o superior
- pip (gestor de paquetes de Python)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/marvinzuniga19/mz_portfolio_fastApi.git
cd mz_portfolio_fastApi
```

2. Crea un entorno virtual (recomendado):
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

3. Instala las dependencias:
```bash
pip install -r requirements.txt
```

## 💻 Uso

Para ejecutar la aplicación, utiliza uno de los siguientes métodos:

### Opción 1: Usando uvicorn directamente
```bash
uvicorn main:app --reload
```

### Opción 2: Usando app.py
```bash
python app.py
```

Una vez iniciado el servidor, abre tu navegador y visita:
```
http://localhost:8000
```

## 📁 Estructura del Proyecto

```
mz_portfolio_fastApi/
│
├── main.py                 # Aplicación principal FastAPI
├── app.py                  # Punto de entrada alternativo
├── requirements.txt        # Dependencias del proyecto
├── README.md              # Este archivo
│
├── templates/
│   └── index.html         # Template principal del portafolio
│
└── static/
    ├── css/
    │   └── styles.css     # Estilos personalizados
    ├── images/
    │   ├── yo.png         # Logo/imagen personal
    │   └── yo.ico         # Favicon
    └── mzcv.pdf           # Currículum en PDF
```

## 🎨 Secciones del Portafolio

1. **Hero Section**: Presentación principal con nombre y descripción
2. **About Me**: Información personal y profesional
3. **Projects**: Galería de proyectos con:
   - App Image Compressor (Python, Pillow, ttkbootstrap)
   - Web Resume (HTML, CSS, Javascript)
   - Python Web Scraper (Python, Beautiful Soup, Requests)
   - YES OR NO Flutter Mobile App (Flutter, Dart)
   - Youtube Music Flet Downloader (Python, Flet)
   - News Blog with Flask (Python, Flask)
   - Invoice Generator Desktop App (Python, Flet, ReportLab)
   - Task Manager - CRUD App with Flutter (Flutter, Dart)
   - Image Compressor app with Flutter (Flutter, Dart)
4. **Contact**: Enlaces a email, LinkedIn y GitHub

## 🔧 Configuración

El proyecto está configurado para servir archivos estáticos desde la carpeta `static/` y templates desde `templates/`. No se requiere configuración adicional para ejecutar la aplicación en modo desarrollo.

## 📝 Notas

- El servidor se ejecuta en modo desarrollo con recarga automática (`--reload`)
- Los archivos estáticos se sirven desde `/static`
- El template principal se encuentra en `templates/index.html`

## 👤 Autor

**Marvin Zúniga Alvarado**

- Email: marvin_zuniga19@outlook.com
- LinkedIn: [marvin-zúniga-alvarado](https://www.linkedin.com/in/marvin-z%C3%BAniga-alvarado-06b3361b0/)
- GitHub: [marvinzuniga19](https://github.com/marvinzuniga19)

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados © 2025 Marvin Zuniga.
