function Recommendations({ report }) {
  if (!report) return null;

  const recommendations = [];

  if (report.ssl.status !== "Valid") {
    recommendations.push("Install a valid SSL certificate.");
  }

  Object.entries(report.headers).forEach(([key, value]) => {
    if (value === "Missing") {
      recommendations.push(`Add the ${key} HTTP Security Header.`);
    }
  });

  return (
   <section className="mt-20 py-20 bg-white flex justify-center">
  <div className="w-full max-w-6xl mx-auto px-8 flex justify-center">
         <div className="h-15"></div>

       <div className="w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-lg p-10">

          <h2 className="text-3xl font-bold text-center mb-10">
            Security Recommendations
          </h2>

          {recommendations.length === 0 ? (

            <div className="text-center text-green-600 font-semibold text-xl">
              ✅ Great! No critical security recommendations.
            </div>

          ) : (

            <ul className="space-y-4">

              {recommendations.map((item, index) => (

                <li
                  key={index}
                  className="bg-red-50 border border-red-200 rounded-xl p-4"
                >
                  🔹 {item}
                </li>

              ))}

            </ul>

          )}

        </div>

      </div>
    </section>
  );
}

export default Recommendations;