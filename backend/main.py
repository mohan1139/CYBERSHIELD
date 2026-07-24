from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from utils.ssl_checker import check_ssl
from utils.dns_checker import dns_lookup
from utils.whois_checker import whois_lookup
from utils.headers_checker import check_headers
from utils.score_calculator import calculate_score

import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://cybershield-o8qu.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Website(BaseModel):
    url: str


@app.get("/")
def home():
    return {"message": "Welcome to CyberShield API"}


@app.get("/health")
def health():
    return {"status": "Running"}


@app.post("/analyze")
def analyze(data: Website):

    ssl_result = check_ssl(data.url)
    dns_result = dns_lookup(data.url)
    whois_result = whois_lookup(data.url)
    headers_result = check_headers(data.url)

    # HTTP Status Check
    try:
        response = requests.get(
    data.url,
    timeout=5,
    allow_redirects=True,
    headers={"User-Agent": "CyberShield Scanner"}
)

        http_status = {
            "code": response.status_code,
            "message": response.reason
        }

    except Exception:
        http_status = {
            "code": 0,
            "message": "Website Unreachable"
        }

    security_score = calculate_score(
        ssl_result,
        dns_result,
        whois_result,
        headers_result
    )

    return {
        "website": data.url,
        "security_score": security_score,
        "http_status": http_status,
        "ssl": ssl_result,
        "dns": dns_result,
        "whois": whois_result,
        "headers": headers_result
    }