import ssl
import socket
from urllib.parse import urlparse
from datetime import datetime


def check_ssl(url):
    try:
        hostname = urlparse(url).netloc

        if hostname == "":
            hostname = url

        context = ssl.create_default_context()

        with socket.create_connection((hostname, 443), timeout=5) as sock:
            with context.wrap_socket(sock, server_hostname=hostname) as secure_sock:

                cert = secure_sock.getpeercert()

                issuer = dict(x[0] for x in cert["issuer"])
                issued_to = dict(x[0] for x in cert["subject"])

                valid_from = datetime.strptime(
                    cert["notBefore"], "%b %d %H:%M:%S %Y %Z"
                )

                valid_to = datetime.strptime(
                    cert["notAfter"], "%b %d %H:%M:%S %Y %Z"
                )

                days_left = (valid_to - datetime.now()).days

                return {
                    "status": "Valid",
                    "issuer": issuer.get("organizationName", "Unknown"),
                    "issued_to": issued_to.get("commonName", hostname),
                    "valid_from": valid_from.strftime("%Y-%m-%d"),
                    "valid_to": valid_to.strftime("%Y-%m-%d"),
                    "days_left": days_left,
                }

    except Exception as e:
        return {
            "status": "Invalid",
            "error": str(e),
        }