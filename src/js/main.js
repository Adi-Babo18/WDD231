import { getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

const parkData = getParkData();

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");

  introEl.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>
  `;
}

setHeaderFooter(parkData);
setParkIntro(parkData);