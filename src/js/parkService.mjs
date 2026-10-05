const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };

  const response = await fetch(baseUrl + url, options);

  if (!response.ok) {
    throw new Error("The API request was not successful.");
  }

  return await response.json();
}

export async function getParkData() {
  const parkData = await getJson("parks?parkCode=glac");

  return parkData.data[0];
}