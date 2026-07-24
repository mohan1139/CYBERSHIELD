function HowItWorks() {
  const steps = [
    {
      icon: "🌐",
      title: "Enter Website",
      description:
        "Provide the URL of the website you want to analyze.",
    },
    {
      icon: "🔍",
      title: "Analyze",
      description:
        "CyberShield performs SSL, DNS, WHOIS and Header checks.",
    },
    {
      icon: "📊",
      title: "Generate Report",
      description:
        "The system creates a professional security report instantly.",
    },
    {
      icon: "🛡️",
      title: "Improve Security",
      description:
        "Review the findings and strengthen your website security.",
    },
  ];

  return (
    <section
      id="how-it-works"
     className="py-32 bg-gradient-to-b from-sky-50 via-blue"
    >
      <div className="container mx-auto px-8 flex flex-col items-center text-center">
        <div className="flex flex-col items-center text-center"></div>

        <div className="flex justify-center">
         <div className="rounded-full bg-blue-100 px-3 py-1">
            <span className="text-blue-700 text-xs font-semibold tracking-[0.3em] uppercase">
  HOW IT WORKS
</span>
          </div>
        </div>

       <h2 className="mt-8 text-center text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
  How CyberShield
  <span className="block mt-2 text-blue-600">
    Works
  </span>
</h2>

        <p className="mt-8 max-w-3xl mx-auto text-center text-lg leading-8 text-slate-600">
          CyberShield simplifies website security analysis by combining
          multiple security checks into one fast and easy workflow.
        </p>

        <div className="mt-20 grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">

          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >

              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl mx-auto">
                {step.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-center">
                {step.title}
              </h3>

              <p className="mt-5 text-center text-slate-600 leading-7">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
      <div className="h-25"></div>
    </section>
  );
}

export default HowItWorks;