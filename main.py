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
        "image": "/images/pycompresor.png"

    },
{
        "title": "Web Resume",
        "description": "One-page web resume project for Marvin Zúniga. Simple, clean, and easy to navigate.",
        "technologies": ["HTML", "CSS", "Javascript"],
        "github_url": "https://github.com/marvinzuniga19/Mz-Resume",
        "image": "/images/resume.png"

    },
    {
        "title": "Python Web Scraper",
        "description": "Web scraping tool built with Python, Beautiful Soup, and Requests to extract data from websites.",
        "technologies": ["Python", "Beautiful Soup", "Requests"],
        "github_url": "https://github.com/marvinzuniga19/flask_webJob_scraper",
        "image": "/images/webscraper.png"
    },
    {
        "title": "YES OR NO, Flutter Mobile App",
        "description": "Mobile application developed with Flutter that answers yes or no to your questions",
        "technologies": ["Flutter", "Dart"],
        "github_url": "https://github.com/marvinzuniga19/Yes_no_app",
        "image": "/images/chat.png"
    },
    {
        "title": "Youtube Music Flet Downloader",
        "description": "Desktop application developed with Python to download music from Youtube",
        "technologies": ["Python", "Flet"],
        "github_url": "https://github.com/marvinzuniga19/youtube_music_downloader",
        "image": "/images/youtubedownload.png"
    },
    {
        "title": "News Blog with Flask",
        "description": "Web application developed with Flask that allows users to read and post news articles",
        "technologies": ["Python", "Flask"],
        "github_url": "https://github.com/marvinzuniga19/news_blog_with_Flask",
        "image": "/images/blog.png"
    },
    {
        "title": "Invoice Generator Desktop App",
        "description": "Desktop application developed with Python to generate invoices in PDF format",
        "technologies": ["Python", "Flet", "ReportLab"],
        "github_url": "https://github.com/marvinzuniga19/invoice_Builder",
        "image": "/images/invoice.png"
    },
    {
        "title": "Task Manager - CRUD App with Flutter",
        "description": "Mobile application developed with Flutter to manage tasks with CRUD operations",
        "technologies": ["Flutter", "Dart"],
        "github_url": "https://github.com/marvinzuniga19/Flutter_Crud_App",
        "image": "/images/crud.png"
    },
    {
        "title": "Image Compressor app with Flutter",
        "description": "Mobile application developed with Flutter to compress images",
        "technologies": ["Flutter", "Dart"],
        "github_url": "https://github.com/marvinzuniga19/image_compressor_app",
        "image": "/images/compress.jpg"
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
