function LoadingCard() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8F5FF] to-white">
      <div className="container mx-auto px-8 flex justify-center">

        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-slate-200 p-10">

          <h2 className="text-3xl font-bold text-center text-blue-700">
            Analyzing Website...
          </h2>

          <p className="text-center text-slate-500 mt-3">
            Please wait while CyberShield scans the website.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <div className="animate-spin w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              <span>Checking SSL Certificate...</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="animate-spin w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              <span>Fetching DNS Records...</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="animate-spin w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              <span>Looking up WHOIS Information...</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="animate-spin w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              <span>Inspecting Security Headers...</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LoadingCard;