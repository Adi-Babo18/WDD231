import spritePath from "../images/sprite.symbol.svg";

export function parkInfoTemplate(info) {
  return `
    <a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>
  `;
}

export function mediaCardTemplate(info) {
  return `
    <div class="media-card">
      <a href="${info.link}">
        <img
          src="${info.image}"
          alt="${info.name}"
          class="media-card__img"
        />
        <h3 class="media-card__title">${info.name}</h3>
      </a>

      <p>${info.description}</p>
    </div>
  `;
}

function getMailingAddress(addresses) {
  return addresses.find((address) => address.type === "Mailing");
}

function getVoicePhone(numbers) {
  const voicePhone = numbers.find((number) => number.type === "Voice");

  return voicePhone ? voicePhone.phoneNumber : "Phone number unavailable";
}

export function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `
    <section class="contact">
      <h3>Contact Info</h3>
      <h4>Mailing Address:</h4>
      <div>
        <p>${mailing.line1}</p>
        <p>
          ${mailing.city}, ${mailing.stateCode}
          ${mailing.postalCode}
        </p>
      </div>
      <h4>Phone:</h4>
      <p>${voice}</p>
    </section>
  `;
}

export function alertTemplate(alert) {
  let alertType = alert.category.toLowerCase();

  if (alert.category === "Park Closure") {
    alertType = "closure";
  }

  return `
    <li class="alert">
      <svg class="icon" aria-hidden="true">
        <use href="${spritePath}#alert-${alertType}"></use>
      </svg>
      <div>
        <h3 class="alert-${alertType}">
          ${alert.title}
        </h3>
        <p>${alert.description}</p>
      </div>
    </li>
  `;
}

export function visitorCenterTemplate(visitorCenter) {
  const hours =
    visitorCenter.operatingHours?.[0]?.description ||
    "Hours are not currently available.";

  const status =
    visitorCenter.isOpen === true
      ? "Currently Open"
      : visitorCenter.isOpen === false
      ? "Currently Closed"
      : "Check current hours";

  return `
    <li class="visitor-center">
      <h3>${visitorCenter.name}</h3>
      <p>${visitorCenter.description}</p>
      <p>
        <strong>Directions:</strong>
        ${visitorCenter.directionsInfo || "Directions unavailable."}
      </p>
      <p>
        <strong>Status:</strong>
        ${status}
      </p>
      <p>
        <strong>Hours:</strong>
        ${hours}
      </p>
    </li>
  `;
}

export function activityTemplate(activity) {
  return `
    <li class="activity">
      ${activity.name}
    </li>
  `;
}