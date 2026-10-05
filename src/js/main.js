import { getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");

  introEl.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>
  `;
}

function setParkInfo(images) {
  const infoEl = document.querySelector(".info");

  const cards = [
    {
      name: "Current Conditions",
      image: images[0].url,
      description:
        "See what conditions to expect in the park before leaving on your trip.",
      link: "#",
    },
    {
      name: "Fees and Passes",
      image: images[1].url,
      description: "Learn about the fees and passes that are available.",
      link: "#",
    },
    {
      name: "Visitor Centers",
      image: images[2].url,
      description: "Learn about the visitor centers in the park.",
      link: "#",
    },
  ];

  infoEl.innerHTML = cards.map(mediaCardTemplate).join("");
}

async function init() {
  const parkData = await getParkData();

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfo(parkData.images);
}

init();