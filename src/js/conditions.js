import {
  getParkData,
  getParkAlerts,
  getVisitorCenterData,
} from "./parkService.mjs";

import setHeaderFooter from "./setHeaderFooter.mjs";

import {
  alertTemplate,
  visitorCenterTemplate,
  activityTemplate,
} from "./templates.mjs";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  if (alerts.length === 0) {
    alertsContainer.innerHTML = "<li>No current alerts.</li>";
    return;
  }

  const alertHTML = alerts.map(alertTemplate).join("");
  alertsContainer.insertAdjacentHTML("beforeend", alertHTML);
}

function setVisitorCenters(visitorCenters) {
  const visitorContainer = document.querySelector(".visitor details > ul");
  visitorContainer.innerHTML = "";

  if (visitorCenters.length === 0) {
    visitorContainer.innerHTML = "<li>No visitor centers found.</li>";
    return;
  }

  const visitorHTML = visitorCenters.map(visitorCenterTemplate).join("");
  visitorContainer.insertAdjacentHTML("beforeend", visitorHTML);
}

function setActivities(activities) {
  const activitiesContainer = document.querySelector(
    ".activities details > ul"
  );

  activitiesContainer.innerHTML = "";
  if (!activities || activities.length === 0) {
    activitiesContainer.innerHTML = "<li>No activities found.</li>";
    return;
  }

  const activityHTML = activities.map(activityTemplate).join("");
  activitiesContainer.insertAdjacentHTML("beforeend", activityHTML);
}

async function init() {
  const parkData = await getParkData();
  const alerts = await getParkAlerts(parkData.parkCode);
  const visitorCenters = await getVisitorCenterData(parkData.parkCode);

  setHeaderFooter(parkData);
  setAlerts(alerts);
  setVisitorCenters(visitorCenters);
  setActivities(parkData.activities);
}
init();