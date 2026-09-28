import { getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = getParkData();

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");

  introEl.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>
  `;
}

function setParkInfo() {
  const infoEl = document.querySelector(".info");

  const cards = [
    {
      name: "Current Conditions",
      image: "./images/creek.jpg",
      description:
        "See what conditions to expect in the park before leaving on your trip.",
      link: "#",
    },
    {
      name: "Fees and Passes",
      image: "./images/exploring.jpg",
      description: "Learn about the fees and passes that are available.",
      link: "#",
    },
    {
      name: "Visitor Centers",
      image: "./images/hiking-man.jpg",
      description: "Learn about the visitor centers in the park.",
      link: "#",
    },
  ];

  infoEl.innerHTML = cards.map(mediaCardTemplate).join("");
}

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfo();