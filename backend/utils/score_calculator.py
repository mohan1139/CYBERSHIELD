def calculate_score(ssl_result, dns_result, whois_result, headers_result):

    score = 0

    # --------------------------
    # HTTPS & SSL (50 Points)
    # --------------------------

    if ssl_result.get("status") == "Valid":
        score += 30

        # Bonus if certificate is valid for more than 30 days
        if ssl_result.get("days_left", 0) > 30:
            score += 10

    # --------------------------
    # DNS (15 Points)
    # --------------------------

    if dns_result.get("A"):
        score += 10

    if dns_result.get("MX"):
        score += 3

    if dns_result.get("NS"):
        score += 2

    # --------------------------
    # WHOIS (10 Points)
    # --------------------------

    if whois_result.get("registrar"):
        score += 5

    if whois_result.get("domain"):
        score += 5

    # --------------------------
    # Security Headers (25 Points)
    # --------------------------

    header_points = {
        "Strict-Transport-Security": 8,
        "Content-Security-Policy": 6,
        "X-Frame-Options": 4,
        "X-Content-Type-Options": 3,
        "Referrer-Policy": 2,
        "Permissions-Policy": 2,
    }

    for header, points in header_points.items():
        value = headers_result.get(header)

        if value and value != "Missing":
            score += points

    # Ensure score stays within 0-100
    score = max(0, min(100, round(score)))

    return score