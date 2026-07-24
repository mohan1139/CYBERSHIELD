import whois
from urllib.parse import urlparse
from datetime import datetime


def whois_lookup(url):
    try:
        hostname = urlparse(url).netloc

        if hostname == "":
            hostname = url

        hostname = hostname.replace("www.", "")

        data = whois.whois(hostname)

        creation = data.creation_date
        expiration = data.expiration_date

        # Sometimes WHOIS returns a list
        if isinstance(creation, list):
            creation = creation[0]

        if isinstance(expiration, list):
            expiration = expiration[0]

        # Convert datetime to YYYY-MM-DD
        if isinstance(creation, datetime):
            creation = creation.strftime("%Y-%m-%d")

        if isinstance(expiration, datetime):
            expiration = expiration.strftime("%Y-%m-%d")

        return {
            "domain": data.domain_name,
            "registrar": data.registrar,
            "creation_date": creation,
            "expiration_date": expiration,
            "name_servers": data.name_servers,
        }

    except Exception as e:
        return {
            "error": str(e)
        }