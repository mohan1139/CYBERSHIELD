const API_URL = "https://cybershield-backend-jpqw.onrender.com";

export async function analyzeWebsite(url) {
  const response = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error("Analysis failed");
  }

  return await response.json();
}