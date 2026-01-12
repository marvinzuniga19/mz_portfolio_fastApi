from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI(title="Marvin Zúniga - Portfolio", description="Portfolio profesional de Marvin Zúniga, desarrollador Python")

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Estructura de datos de proyectos
projects = [
    {
        "title": "App Image Compressor",
        "description": "Desktop application developed with Python to compress images",
        "technologies": ["Python", "Pillow", "ttkbootstrap"],
        "github_url": "https://github.com/marvinzuniga19/Python_app_Compressor_image",
        "image": None
    },
    {
        "title": "Web Resume",
        "description": "This is a one-page web résumé project for Marvin Zúniga. The site is designed to be simple, clean, and easy to navigate.",
        "technologies": ["HTML", "CSS", "Javascript"],
        "github_url": "https://github.com/marvinzuniga19/Mz-Resume",
        "image": None
    },
    {
        "title": "Python Web Scraper",
        "description": "A robust Python script designed to efficiently extract and parse data from the website. Utilizes libraries like Beautiful Soup and Requests for seamless data retrieval and processing.",
        "technologies": ["Python", "Beautiful Soup", "Requests"],
        "github_url": "https://github.com/marvinzuniga19/flask_webJob_scraper",
        "image": None
    },
    {
        "title": "YES OR NO, Flutter Mobile App",
        "description": "Yes/No App is a simple and interactive application that helps users make quick decisions by providing random Yes or No answers. Ideal for moments of indecision, the app offers an easy-to-use interface for instant responses.",
        "technologies": ["Flutter", "Dart"],
        "github_url": "https://github.com/marvinzuniga19/Yes_no_app",
        "image": None
    },
    {
        "title": "Youtube Music Flet Downloader",
        "description": "🎵 YouTube Music Downloader with Python and Flet. I have developed a cross-platform application using that allows you to download music directly from YouTube easily and quickly.",
        "technologies": ["Python", "Flet"],
        "github_url": "https://github.com/marvinzuniga19/youtube_music_downloader",
        "image": None
    },
    {
        "title": "News Blog with Flask",
        "description": "A simple news blog built with Flask that allows publishing, editing, and displaying articles dynamically. Designed with a clean interface and powered by Python and Jinja templates, it provides a lightweight platform to share the latest updates and stories.",
        "technologies": ["Python", "Flask"],
        "github_url": "https://github.com/marvinzuniga19/news_blog_with_Flask",
        "image": None
    },
    {
        "title": "Invoice Generator Desktop App",
        "description": "A Python desktop application built with Flet and ReportLab that allows you to create custom invoices and save them as PDF files easily and quickly.",
        "technologies": ["Python", "Flet", "ReportLab"],
        "github_url": "https://github.com/marvinzuniga19/invoice_Builder",
        "image": None
    },
    {
        "title": "Task Manager - CRUD App with Flutter",
        "description": "This is a simple task management application (CRUD) developed with Flutter. It allows users to create, read, update and delete tasks, which are persistently stored in a local SQLite database.",
        "technologies": ["Flutter", "Dart"],
        "github_url": "https://github.com/marvinzuniga19/Flutter_Crud_App",
        "image": None
    },
    {
        "title": "Image Compressor app with Flutter",
        "description": "A simple and intuitive Flutter application to compress images quickly and easily.",
        "technologies": ["Flutter", "Dart"],
        "github_url": "https://github.com/marvinzuniga19/image_compressor_app",
        "image": None
    }
]

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {
        "request": request,
        "projects": projects
    })

@app.get("/api/projects")
async def get_projects():
    return {"projects": projects}
