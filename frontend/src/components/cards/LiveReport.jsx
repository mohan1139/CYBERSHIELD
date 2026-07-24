import { downloadReport } from "../../utils/pdfGenerator";
function LiveReport({ report }) {
  if (!report) return null;

  return (
   <section
  id="live-report"
  className="py-24 bg-gradient-to-b from-[#F8F5FF] via-[#F5F3FF] to-white flex justify-center"
>
      <div className="container mx-auto px-8 flex flex-col items-center">

        <div className="text-center">

         <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">
  Live Analysis Report
</span>

<div className="mt-6 flex justify-center">
  <button
    onClick={() => downloadReport(report)}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
  >
    ⬇ Download PDF Report
  </button>
</div>

<div className="h-8"></div>
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

  <h2 className="text-4xl font-bold text-center py-6">
    Security Report
  </h2>

  <table className="w-full text-lg">
    <tbody>

      <tr className="border-t">
        <td className="p-4 font-semibold">Website</td>
        <td className="p-4 text-right">{report.website}</td>
      </tr>
      <tr className="border-t">
  <td className="p-4 font-semibold">
    HTTP Status
  </td>

  <td className="p-4 text-right">

    {report.http_status.code === 200
      ? "✅ 200 OK"
      : `❌ ${report.http_status.code} ${report.http_status.message}`}

  </td>
</tr>

      <tr className="border-t">
        <td className="p-4 font-semibold">Security Score</td>
        <td className="p-4 text-right text-green-600 font-bold">
          {report.security_score}/100
        </td>
      </tr>

      <tr className="border-t">
        <td className="p-4 font-semibold">SSL Certificate</td>
        <td className="p-4 text-right">
          {report.ssl.status === "Valid" ? "✅ Valid" : "❌ Invalid"}
        </td>
      </tr>

      <tr className="border-t">
        <td className="p-4 font-semibold">DNS Records</td>
        <td className="p-4 text-right">
          ✅ Healthy
        </td>
      </tr>

      <tr className="border-t">
        <td className="p-4 font-semibold">WHOIS Information</td>
        <td className="p-4 text-right">
          ✅ Available
        </td>
      </tr>

      <tr className="border-t">
        <td className="p-4 font-semibold">Security Headers</td>
        <td className="p-4 text-right text-orange-500">

          ⚠ {
            Object.values(report.headers).filter(v => v === "Missing").length
          } Missing

        </td>
      </tr>

    </tbody>
  </table>

</div>
<div className="h-15"></div>

   <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 h-[220px]">

<h3 className="text-2xl font-bold mb-6">
🌍 HTTP Status
</h3>

<p className="mt-3">
<strong>Status Code:</strong>
{" "}
{report.http_status.code}
</p>

<p className="mt-3">
<strong>Message:</strong>
{" "}
{report.http_status.message}
</p>

<p className="mt-3">
<strong>Reachable:</strong>
{" "}
{report.http_status.code === 200 ? "Yes ✅" : "No ❌"}
</p>

</div>      
<div className="h-10"></div>

        
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 h-[340px] overflow-auto">

<h3 className="text-2xl font-bold mb-6">
🔒 SSL Certificate
</h3>

<p><strong>Status:</strong> {report.ssl.status}</p>

<p className="mt-3">
<strong>Issuer:</strong> {report.ssl.issuer}
</p>

<p className="mt-3">
<strong>Issued To:</strong> {report.ssl.issued_to}
</p>

<p className="mt-3">
<strong>Expires:</strong> {report.ssl.valid_to}
</p>

</div>
<div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 h-[340px] overflow-auto">

<h3 className="text-2xl font-bold mb-6">
🌐 DNS Records
</h3>

<p>
<strong>A Records:</strong>
</p>

<ul className="list-disc ml-6 mt-2">

{report.dns.A.map((ip,index)=>(
<li key={index}>{ip}</li>
))}

</ul>

<p className="mt-4">

<strong>MX:</strong>

{report.dns.MX.join(", ")}

</p>

<p className="mt-4">

<strong>NS:</strong>

{report.dns.NS.join(", ")}

</p>

</div>
<div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 h-[340px] flex flex-col">

<h3 className="text-2xl font-bold mb-6">
📄 WHOIS
</h3>

<p>

<strong>Registrar:</strong>

{report.whois.registrar}

</p>

<p className="mt-3">

<strong>Domain:</strong>

{report.whois.domain}

</p>

<p className="mt-3">

<strong>Created:</strong>

{report.whois.creation_date}

</p>

<p className="mt-3">

<strong>Expires:</strong>

{report.whois.expiration_date}

</p>

</div>
<div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 h-[340px] overflow-auto">

<h3 className="text-2xl font-bold mb-6">
🛡 Security Headers
</h3>

{Object.entries(report.headers).map(([key, value]) => (

  <div
    key={key}
    className="flex justify-between items-center px-6 py-3 border-b border-slate-200 last:border-b-0"
  >
    <span className="font-medium text-slate-700">
      {key}
    </span>

    <span
      className={`font-semibold ${
        value === "Missing"
          ? "text-red-500"
          : "text-green-600"
      }`}
    >
      {value === "Missing" ? "❌ Missing" : "✅ Present"}
    </span>

  </div>

))}

</div>
</div>
        </div>

      </div>
        <div className="h-10"></div>
    </section>
  );
}

export default LiveReport;