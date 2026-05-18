console.log("APP JS LOADED");

const app = document.getElementById("app");

let selectedGeo = "";
let selectedCategory = "";

const offers = [
  {
    id: 1,
    geo: "Italy",
    category: "Sports Betting",
    title: "Football Betting Bonus",
    shortDescription: "Sports betting offer for new eligible users.",
    description:
      "This offer is suitable for users interested in football betting and live sports events. Availability depends on local rules and the operator's terms.",
    bonus: "Welcome bonus for new users",
    requirements: "18+ only. New users only. Terms and conditions apply.",
    link: "https://example.com"
  },
  {
    id: 2,
    geo: "France",
    category: "Casino",
    title: "Casino Games Offer",
    shortDescription: "Casino-related offer with bonus conditions.",
    description:
      "This offer includes access to casino games and promotional conditions for eligible users. Always check the final terms before registration.",
    bonus: "Free spins offer",
    requirements: "18+ only. Availability may depend on region and local regulation.",
    link: "https://example.com"
  },
  {
    id: 3,
    geo: "Netherlands",
    category: "Crash Games",
    title: "Crash Games Platform",
    shortDescription: "Crash games offer for eligible users.",
    description:
      "This offer is related to crash game mechanics. The app does not provide gambling services directly and only redirects users to external platforms.",
    bonus: "Starter promo",
    requirements: "18+ only. Check operator rules before using the offer.",
    link: "https://example.com"
  },
  {
    id: 4,
    geo: "Germany",
    category: "Sports Betting",
    title: "Live Betting Offer",
    shortDescription: "Live sports betting promo for new users.",
    description:
      "This offer may be suitable for users interested in live betting and sports events. Final conditions are provided by the operator.",
    bonus: "Welcome promo",
    requirements: "18+ only. Gambling involves financial risk.",
    link: "https://example.com"
  }
];

function renderAgeGate() {
  app.innerHTML = `
    <section class="screen">
      <div class="badge">18+</div>

      <h1>Bet Guide</h1>

      <p class="text">
        This application contains betting and gambling-related content.
        Please confirm that you are of legal age in your country.
      </p>

      <button class="primary-btn" onclick="renderGeoScreen()">
        I am 18 or older
      </button>

      <p class="small-text">
        Gamble responsibly. Availability depends on local regulations.
      </p>
    </section>
  `;
}

function renderGeoScreen() {
  app.innerHTML = `
    <section class="screen">
      <p class="step">Step 1 of 3</p>

      <h1>Select your GEO</h1>

      <p class="text">
        Choose the country for which you want to see available offers.
      </p>

      <div class="grid">
        <button class="option-btn" onclick="selectGeo('Italy')">
          Italy
        </button>

        <button class="option-btn" onclick="selectGeo('France')">
          France
        </button>

        <button class="option-btn" onclick="selectGeo('Netherlands')">
          Netherlands
        </button>

        <button class="option-btn" onclick="selectGeo('Germany')">
          Germany
        </button>
      </div>

      <button class="secondary-btn" onclick="renderAgeGate()">
        Back
      </button>
    </section>
  `;
}

function selectGeo(geo) {
  selectedGeo = geo;
  renderCategoryScreen();
}

function renderCategoryScreen() {
  app.innerHTML = `
    <section class="screen">
      <p class="step">Step 2 of 3</p>

      <h1>Select category</h1>

      <p class="text">
        GEO selected: <strong>${selectedGeo}</strong>
      </p>

      <div class="grid">
        <button class="option-btn" onclick="selectCategory('Sports Betting')">
          Sports Betting
        </button>

        <button class="option-btn" onclick="selectCategory('Casino')">
          Casino
        </button>

        <button class="option-btn" onclick="selectCategory('Crash Games')">
          Crash Games
        </button>

        <button class="option-btn" onclick="selectCategory('Bonuses')">
          Bonuses
        </button>
      </div>

      <button class="secondary-btn" onclick="renderGeoScreen()">
        Back
      </button>
    </section>
  `;
}

function selectCategory(category) {
  selectedCategory = category;
  renderOffersScreen();
}

function renderOffersScreen() {
  const filteredOffers = offers.filter(offer => {
    if (selectedCategory === "Bonuses") {
      return offer.geo === selectedGeo;
    }

    return offer.geo === selectedGeo && offer.category === selectedCategory;
  });

  app.innerHTML = `
    <section class="screen">
      <p class="step">Step 3 of 3</p>

      <h1>Available offers</h1>

      <p class="text">
        GEO: <strong>${selectedGeo}</strong><br>
        Category: <strong>${selectedCategory}</strong>
      </p>

      <div class="offers-list">
        ${
          filteredOffers.length > 0
            ? filteredOffers
                .map(
                  offer => `
                    <article class="offer-card">
                      <span class="offer-geo">${offer.geo}</span>

                      <h2>${offer.title}</h2>

                      <p>${offer.shortDescription}</p>

                      <p class="bonus">${offer.bonus}</p>

                      <button class="primary-btn" onclick="renderOfferDetails(${offer.id})">
                        Подробнее
                      </button>
                    </article>
                  `
                )
                .join("")
            : `
              <div class="empty-card">
                <h2>No offers yet</h2>

                <p>
                  There are no offers for this GEO and category yet.
                  You can add them later in app.js.
                </p>
              </div>
            `
        }
      </div>

      <div class="footer-actions">
        <button class="secondary-btn" onclick="renderCategoryScreen()">
          Back
        </button>

        <button class="secondary-btn" onclick="renderResponsibleScreen()">
          Responsible Gambling
        </button>
      </div>
    </section>
  `;
}

function renderOfferDetails(offerId) {
  const offer = offers.find(item => item.id === offerId);

  if (!offer) {
    renderOffersScreen();
    return;
  }

  app.innerHTML = `
    <section class="screen">
      <p class="step">Offer details</p>

      <span class="offer-geo">${offer.geo}</span>

      <h1>${offer.title}</h1>

      <p class="text">
        Category: <strong>${offer.category}</strong>
      </p>

      <p class="text">
        ${offer.description}
      </p>

      <div class="offer-card">
        <h2>Bonus</h2>
        <p class="bonus">${offer.bonus}</p>
      </div>

      <div class="offer-card">
        <h2>Requirements</h2>
        <p>${offer.requirements}</p>
      </div>

      <a class="primary-link" href="${offer.link}" target="_blank" rel="noopener noreferrer">
        Перейти к офферу
      </a>

      <p class="small-text">
        This app does not provide betting or gambling services directly.
        It only displays informational offer cards and external links.
      </p>

      <button class="secondary-btn" onclick="renderOffersScreen()">
        Назад к офферам
      </button>
    </section>
  `;
}

function renderResponsibleScreen() {
  app.innerHTML = `
    <section class="screen">
      <div class="badge">18+</div>

      <h1>Responsible Gambling</h1>

      <p class="text">
        Betting and gambling involve financial risk. This app does not guarantee profit,
        winnings, or financial results.
      </p>

      <p class="text">
        Always check local laws, platform rules, and offer terms before using any betting
        or gambling-related service.
      </p>

      <button class="primary-btn" onclick="renderOffersScreen()">
        Back to offers
      </button>
    </section>
  `;
}

renderAgeGate();
