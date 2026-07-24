function ScanPreview({ report }) {
  return (
    <section
      id="preview"
      className="py-32 bg-gradient-to-b from-[#F8F5FF] via-[#F3F0FF] to-[#EEF2FF]"
    >
      <div className="container mx-auto px-8 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="rounded-full bg-blue-100 px-5 py-2">
          <span className="text-blue-700 text-sm font-semibold tracking-[0.25em] uppercase">
            Live Scan Preview
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-4xl md:text-5xl font-bold text-slate-900">
          Security Analysis
          <span className="block text-blue-600">
            Dashboard
          </span>
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          See how CyberShield presents website security information through a
          professional dashboard.
        </p>

        {/* Report Card */}
        <div className="mt-20 flex justify-center items-center w-full">

 <div className="mx-auto w-[900px] max-w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-12">

    <h3 className="text-3xl font-bold text-center mb-10">
      Security Report
    </h3>

    <div className="space-y-6 px-6">

      <div className="flex justify-between items-center border-b pb-3">
        <span className="font-medium text-slate-600">Website</span>
        <span className="font-semibold">https://google.com</span>
      </div>

      <div className="flex justify-between items-center border-b pb-3">
        <span className="font-medium text-slate-600">Security Score</span>
        <span className="font-bold text-green-600">92 / 100</span>
      </div>

      <div className="flex justify-between items-center border-b pb-3">
        <span className="font-medium text-slate-600">SSL Certificate</span>
        <span className="font-semibold text-green-600">✅ Valid</span>
      </div>

      <div className="flex justify-between items-center border-b pb-3">
        <span className="font-medium text-slate-600">DNS Records</span>
        <span className="font-semibold text-green-600">✅ Healthy</span>
      </div>

      <div className="flex justify-between items-center border-b pb-3">
        <span className="font-medium text-slate-600">WHOIS Information</span>
        <span className="font-semibold text-green-600">✅ Available</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-medium text-slate-600">Security Headers</span>
        <span className="font-semibold text-amber-500">⚠ 2 Missing</span>
      </div>

    </div>

  </div>

</div>
        

      </div>

      {/* Bottom Space */}
      <div className="h-25"></div>

    </section>
  );
}

export default ScanPreview;