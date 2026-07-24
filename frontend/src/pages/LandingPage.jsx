import { useState } from "react";
import { analyzeWebsite } from "../services/api";
import logo from "../assets/logo.png";
import ScanPreview from "../components/cards/ScanPreview";
import HowItWorks from "../components/cards/HowItWorks.jsx";
import AboutCyberShield from "../components/cards/AboutCyberShield.jsx";
import CallToAction from "../components/cards/CallToAction.jsx";
import Footer from "../components/cards/Footer.jsx";
import LiveReport from "../components/cards/LiveReport";
import LoadingCard from "../components/cards/LoadingCard.jsx";
import Recommendations from "../components/cards/Recommendations.jsx";
function LandingPage() {

  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);

  const handleAnalyze = async () => {
    if (!website) {
      alert("Please enter a website URL.");
      return;
    }
let url = website.trim();

if (!url.startsWith("http://") && !url.startsWith("https://")) {
  url = "https://" + url;
}

try {
  const parsed = new URL(url);

  // Domain must contain a dot (.)
  if (!parsed.hostname.includes(".")) {
    alert("Please enter a valid website (Example: google.com)");
    return;
  }

} catch {
  alert("Please enter a valid website URL.");
  return;
}

  try {
  setReport(null);      // Clear previous report
  setLoading(true);

  const result = await analyzeWebsite(url);

      console.log(result);

     setReport(result);

setTimeout(() => {
  document
    .getElementById("live-report")
    ?.scrollIntoView({ behavior: "smooth" });
}, 200);
      

    } catch (error) {
      console.error(error);
      alert("Analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-[#F8FBFF] text-slate-900">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 shadow-lg">

        <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="CyberShield Logo"
              className="w-12 h-12 object-contain"
            />

            <div>

              <h1 className="text-2xl font-bold text-white">
                CyberShield
              </h1>

              <p className="text-sm text-slate-300">
                Website Security Scanner
              </p>

            </div>

          </div>

          {/* Navigation */}

          <nav className="flex items-center gap-8 text-slate-300 font-medium">

            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#features" className="hover:text-cyan-400 transition">
              Features
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a
              href="https://github.com/charansaibalaji/CyberShield"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-cyan-500 px-5 py-2 text-slate-900 font-semibold hover:bg-cyan-400 transition"
            >
              GitHub
            </a>

          </nav>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section
        id="home"
     className="relative overflow-hidden min-h-[75vh] flex items-center justify-center px-6 bg-gradient-to-b from-[#F8FBFF] via-[#EEF6FF] to-[#E6F0FF]">

        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full bg-white border border-pink-200 px-6 py-3 shadow-sm">

            <img
              src={logo}
              alt="CyberShield"
              className="w-8 h-8"
            />

            <span className="font-semibold text-blue-700 tracking-wide">
              PROFESSIONAL WEBSITE SECURITY PLATFORM
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl md:text-5xl font-bold leading-tight text-slate-900">

            Website Security

            <span className="block text-cyan-600">
              Assessment Platform
            </span>

          </h2>

          {/* Description */}

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-600">

            Analyze SSL Certificates, DNS Records,
            WHOIS Information and HTTP Security Headers
            using one powerful dashboard.

          </p>

          {/* Input */}

          <div className="mt-12">

           <input
  type="text"
  placeholder="https://example.com"
  value={website}
  onChange={(e) => setWebsite(e.target.value)}
  className="block mx-auto w-full max-w-2xl h-16 rounded-2xl border border-blue-100 bg-white px-6 text-lg shadow-xl outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
/>

          </div>
          <div className="h-10"></div>

          {/* Button */}

         <div className="mt-6 mb-6">
<button
  onClick={handleAnalyze}
  disabled={loading}
  className="rounded-xl bg-blue-600 px-10 py-3 text-white font-semibold shadow-lg hover:bg-cyan-600 transition disabled:opacity-60"
>
  {loading ? "Analyzing..." : "Analyze Website"}
</button>

          </div>

        </div>

      </section>
      {loading && <LoadingCard />}

{report && !loading && (
  <>
    <LiveReport report={report} />
    <Recommendations report={report} />
  </>
)}
{/* ================= FEATURES ================= */}


<section
  id="features"
  className="pt-32 pb-58 bg-gradient-to-b from-slate-50 via-sky-50 to-white flex justify-center"
>

  <div className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center">

  <div className="mb-6">

  <span className="block text-center text-slate-400 text-sm tracking-[0.3em] mb-6">
  .
</span>

</div>
<h2 className="mt-20 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">

  Core Features of <span className="text-blue-600">CyberShield</span>

</h2>

<p className="mt-20 max-w-xl mx-auto text-center text-lg leading-9 text-slate-600">

  Perform SSL validation, DNS lookup,
  WHOIS analysis, and HTTP Security Header
  inspection through a single modern dashboard.

</p>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 mb-32 max-w-5xl mx-auto">   
     {/* Card 1 */}

      <div className="bg-green-100 rounded-3xl p-6 min-h-[220px]border border-slate-200 shadow-md hover:shadow-xl transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto text-3xl">

          🔒

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          SSL Certificate
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          Verify certificate validity,
          issuer, expiry date and HTTPS configuration.
        </p>

      </div>

      {/* Card 2 */}

      <div className="bg-sky-100 rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center mx-auto text-3xl">

          🌐

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          DNS Lookup
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          Retrieve A, MX, NS,
          TXT and CNAME records instantly.
        </p>

      </div>

      {/* Card 3 */}

      <div className="bg-violet-100 rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto text-3xl">

          📄

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          WHOIS Information
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          Discover domain ownership,
          registrar and registration details.
        </p>

      </div>

      {/* Card 4 */}

      <div className="bg-orange-100 rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto text-3xl">

          🛡

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Security Headers
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          Inspect HTTP security headers
          and identify missing protections.
        </p>

      </div>

    </div>

  </div>
</section>

<div className="h-24"></div>
<ScanPreview report={report} />
<HowItWorks />
<AboutCyberShield />
<CallToAction />



<Footer />

    </div>
  );
}

export default LandingPage;