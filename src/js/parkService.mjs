const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
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
export async function getParkAlerts(parkCode) {
  const allAlerts = [];
  const limit = 50;
  let start = 0;
  let total = 0;

  do {
    const alertData = await getJson(
      `alerts?parkCode=${parkCode}&limit=${limit}&start=${start}`
    );

    allAlerts.push(...alertData.data);
    total = Number(alertData.total);
    start += limit;
  } while (allAlerts.length < total);
  return allAlerts;
}
export async function getVisitorCenterData(parkCode) {
  const visitorData = await getJson(
    `visitorcenters?parkCode=${parkCode}`
  );

  return visitorData.data;
}