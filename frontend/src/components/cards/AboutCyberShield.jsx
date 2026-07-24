function AboutCyberShield() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-slate-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-8 flex flex-col items-center">

        {/* Badge */}

        <div className="rounded-full bg-blue-100 px-4 py-2">

          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-700">

            ABOUT CYBERSHIELD

          </span>

        </div>

        {/* Heading */}

        <h2 className="mt-8 text-center text-3xl md:text-4xl font-bold leading-tight text-slate-900">

          Built for Modern

          <span className="block text-blue-600">

            Website Security

          </span>

        </h2>

        {/* Description */}

        <p className="mt-8 max-w-4xl text-center text-lg leading-9 text-slate-600">

          CyberShield is a modern Website Security Assessment Platform
          designed to help developers, students and security professionals
          evaluate the security posture of any website through a clean,
          intuitive and user-friendly interface.

          <br /><br />

          It combines SSL Certificate validation, DNS Lookup,
          WHOIS analysis, HTTPS verification and Security Header
          inspection into one professional dashboard, allowing users
          to identify potential security issues quickly and efficiently.

        </p>
        <div className="h-15"></div>

        {/* Statistics */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full max-w-5xl">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition">

            <div className="text-5xl">
              🔒
            </div>

            <h3 className="mt-5 text-3xl font-bold text-blue-600">
              6+
            </h3>

            <p className="mt-2 text-slate-600">
              Security Checks
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition">

            <div className="text-5xl">
              ⚡
            </div>

            <h3 className="mt-5 text-3xl font-bold text-blue-600">
              Fast
            </h3>

            <p className="mt-2 text-slate-600">
              Website Analysis
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition">

            <div className="text-5xl">
              📊
            </div>

            <h3 className="mt-5 text-3xl font-bold text-blue-600">
              Smart
            </h3>

            <p className="mt-2 text-slate-600">
              Security Reports
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition">

            <div className="text-5xl">
              🛡
            </div>

            <h3 className="mt-5 text-3xl font-bold text-blue-600">
              Secure
            </h3>

            <p className="mt-2 text-slate-600">
              Modern Dashboard
            </p>

          </div>

        </div>

      </div>
      <div className="h-15"></div>

    </section>
  );
}

export default AboutCyberShield;