import dns.resolver
from urllib.parse import urlparse


def dns_lookup(url):
    try:
        hostname = urlparse(url).netloc

        if hostname == "":
            hostname = url

        result = {}

        record_types = ["A", "MX", "NS"]

        for record in record_types:
            try:
                answers = dns.resolver.resolve(hostname, record)
                result[record] = [str(r) for r in answers]
            except:
                result[record] = []

        return result

    except Exception as e:
        return {
            "error": str(e)
        }