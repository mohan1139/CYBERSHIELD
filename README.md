# 🛡 CyberShield

A Full Stack Website Security Assessment Platform that analyzes the security posture of a website by performing SSL certificate validation, DNS lookup, WHOIS lookup, HTTP security header analysis, and generating an overall security score.

---

## 📌 Project Overview

CyberShield is a cybersecurity-focused web application developed using **React** and **FastAPI**. It helps users evaluate the security configuration of websites by providing real-time analysis of important security parameters.

---

## ✨ Features

- 🔒 SSL Certificate Analysis
- 🌐 DNS Record Lookup
- 📋 WHOIS Information
- 🛡 HTTP Security Headers Analysis
- 📊 Security Score Generation
- ⚡ FastAPI REST API
- 💻 React Frontend
- 🔗 Real-time API Communication using Axios

---

## 🛠 Tech Stack

### Frontend
- React
- JavaScript
- Axios
- HTML5
- CSS3
- Vite

### Backend
- Python
- FastAPI
- Uvicorn
- Requests
- dnspython
- python-whois
- SSL
- Socket

---

## 📂 Project Structure

```
CyberShield
│
├── backend
│   ├── main.py
│   ├── utils
│   │   ├── ssl_checker.py
│   │   ├── dns_checker.py
│   │   ├── whois_checker.py
│   │   ├── headers_checker.py
│   │   └── score_calculator.py
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── services
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/charansaibalaji/CyberShield.git
```

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 📊 Current Features

- SSL Certificate Validation
- DNS Lookup
- WHOIS Lookup
- Security Headers Analysis
- Security Score Calculation

---

## 🔮 Future Improvements

- PDF Report Export
- Dashboard UI
- Scan History
- AI Security Recommendations
- User Authentication
- Deployment on Vercel & Render

---

## 👨‍💻 Developed By

**Charan Sai Balaji**

B.Tech CSE (Cybersecurity)

GitHub: https://github.com/charansaibalaji

LinkedIn:
https://www.linkedin.com/in/charan-sai-balaji-3076aa296

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!