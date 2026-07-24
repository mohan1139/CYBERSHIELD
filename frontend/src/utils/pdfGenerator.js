import { jsPDF } from "jspdf";

export function downloadReport(report) {
  const doc = new jsPDF();

  let y = 20;
  function checkPage() {
  if (y > 270) {
    doc.addPage();
    y = 20;
  }
}

  doc.setFontSize(22);
  doc.text("CyberShield Security Report", 20, y);

  y += 12;

  doc.setFontSize(11);
  doc.text(`Generated: ${new Date().toLocaleString()}`, 20, y);

  y += 12;

  doc.setFontSize(16);
  doc.text("Summary", 20, y);

  y += 10;

  doc.setFontSize(12);
 doc.text(`Website: ${report.website}`, 20, y);

y += 8;
checkPage();

doc.text(
  `HTTP Status: ${report.http_status.code} ${report.http_status.message}`,
  20,
  y
);

y += 8;
checkPage();

doc.text(`Security Score: ${report.security_score}/100`,20,y);

y += 15;
checkPage();

// HTTP Status
doc.setFontSize(16);
doc.text("HTTP Status", 20, y);

y += 10;

doc.setFontSize(12);
doc.text(`Status Code: ${report.http_status.code}`, 25, y);

y += 8;

doc.text(`Message: ${report.http_status.message}`, 25, y);

y += 8;

doc.text(
  `Reachable: ${report.http_status.code === 200 ? "Yes" : "No"}`,
  25,
  y
);

y += 15;

doc.setFontSize(16);
doc.text("SSL Certificate", 20, y);

  y += 10;

  doc.setFontSize(12);
  doc.text(`Status: ${report.ssl.status}`,25,y);

y += 8;
checkPage();

doc.text(`Issuer: ${report.ssl.issuer}`,25,y);

y += 8;
checkPage();

doc.text(`Issued To: ${report.ssl.issued_to}`,25,y);

y += 8;
checkPage();

doc.text(`Valid Until: ${report.ssl.valid_to}`,25,y);

y += 15;
checkPage();

  doc.setFontSize(16);
  doc.text("DNS Records", 20, y);

  y += 10;

  doc.setFontSize(12);

  doc.text("A Records:", 25, y);

  y += 8;

 report.dns.A.forEach(ip => {
    checkPage();
    doc.text(ip,35,y);
    y += 7;
});
doc.text(`MX: ${report.dns.MX.join(", ")}`,25,y);

y += 8;
checkPage();

doc.text(`NS: ${report.dns.NS.join(", ")}`,25,y);

y += 15;
checkPage();

  doc.setFontSize(16);
  doc.text("WHOIS Information", 20, y);

  y += 10;

  doc.setFontSize(12);

 doc.text(`Registrar: ${report.whois.registrar}`,25,y);

y += 8;
checkPage();

doc.text(`Domain: ${report.whois.domain}`,25,y);

y += 8;
checkPage();

doc.text(`Created: ${report.whois.creation_date}`,25,y);

y += 8;
checkPage();

doc.text(`Expires: ${report.whois.expiration_date}`,25,y);

y += 15;
checkPage();

  doc.setFontSize(16);
  doc.text("Security Headers", 20, y);

  y += 10;

  doc.setFontSize(12);

 Object.entries(report.headers).forEach(([key, value]) => {
  checkPage();
  doc.text(`${key}: ${value}`,25,y);
  y += 8;
});

  y += 10;

  doc.setFontSize(16);
  doc.text("Recommendations", 20, y);

  y += 10;

 Object.entries(report.headers).forEach(([key,value])=>{
    if(value==="Missing"){
        checkPage();
        doc.text(`• Add ${key}`,25,y);
        y += 8;
    }
});

  doc.save("CyberShield_Report.pdf");
}