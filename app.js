console.log("APP JS LOADED");

const app = document.getElementById("app");

let selectedLanguage = "";
let selectedGeo = "";
let selectedCategory = "";

const categories = ["Sports Betting", "Casino", "Crash Games", "Bonuses"];
const geoList = ["Italy", "France", "Netherlands", "Germany"];

const geoLanguageMap = {
  Italy: "it",
  France: "fr",
  Netherlands: "nl",
  Germany: "de"
};

const languages = {
  it: {
    name: "Italiano",
    geo: "Italy",
    ageTitle: "Bet Guide",
    ageText: "Questa applicazione contiene contenuti relativi a scommesse e gioco d'azzardo. Conferma di avere l'età legale nel tuo paese.",
    ageButton: "Ho 18 anni o più",
    changeLanguage: "Cambia lingua",
    smallNote: "Gioca responsabilmente. La disponibilità dipende dalle normative locali.",
    selectGeo: "Scegli GEO",
    selectGeoText: "Scegli il paese per cui vuoi vedere le offerte disponibili.",
    selectCategory: "Scegli categoria",
    geoSelected: "GEO selezionato",
    availableOffers: "Offerte disponibili",
    found: "Trovate",
    offers: "offerte",
    viewDetails: "Vedi dettagli",
    back: "Indietro",
    backToOffers: "Torna alle offerte",
    goToOffer: "Vai all'offerta",
    offerDetails: "Dettagli offerta",
    bonus: "Bonus",
    game: "Gioco / sezione",
    requirements: "Requisiti",
    riskNote: "Nota sul rischio",
    faq: "FAQ / Gioco responsabile",
    directServiceNote: "Questa app non fornisce direttamente servizi di scommesse o gioco d'azzardo. Mostra solo schede informative e link esterni.",
    faqServiceTitle: "Questa app offre servizi di gioco?",
    faqServiceText: "No. Questa PWA non offre scommesse, giochi da casinò, depositi, prelievi o servizi di gioco direttamente.",
    faqBonusTitle: "I bonus possono cambiare?",
    faqBonusText: "Sì. Importi, disponibilità e requisiti dei bonus possono cambiare. Controlla sempre i termini finali sul sito esterno.",
    faqResponsibleTitle: "Gioco responsabile",
    faqResponsibleText: "Scommesse e gioco d'azzardo comportano rischi finanziari. Questa app non garantisce profitti o vincite.",
    faqAgeTitle: "Limite di età",
    faqAgeText: "Questo contenuto è destinato solo agli utenti che hanno l'età legale per il gioco nel proprio paese."
  },

  fr: {
    name: "Français",
    geo: "France",
    ageTitle: "Bet Guide",
    ageText: "Cette application contient du contenu lié aux paris et aux jeux d'argent. Veuillez confirmer que vous avez l'âge légal dans votre pays.",
    ageButton: "J'ai 18 ans ou plus",
    changeLanguage: "Changer la langue",
    smallNote: "Jouez de manière responsable. La disponibilité dépend des règles locales.",
    selectGeo: "Choisir le GEO",
    selectGeoText: "Choisissez le pays pour lequel vous voulez voir les offres disponibles.",
    selectCategory: "Choisir une catégorie",
    geoSelected: "GEO sélectionné",
    availableOffers: "Offres disponibles",
    found: "Trouvé",
    offers: "offres",
    viewDetails: "Voir les détails",
    back: "Retour",
    backToOffers: "Retour aux offres",
    goToOffer: "Aller à l'offre",
    offerDetails: "Détails de l'offre",
    bonus: "Bonus",
    game: "Jeu / section",
    requirements: "Conditions",
    riskNote: "Note de risque",
    faq: "FAQ / Jeu responsable",
    directServiceNote: "Cette application ne fournit pas directement de services de paris ou de jeux d'argent. Elle affiche uniquement des fiches d'information et des liens externes.",
    faqServiceTitle: "Cette application fournit-elle des services de jeu?",
    faqServiceText: "Non. Cette PWA ne propose pas directement de paris, jeux de casino, dépôts, retraits ou services de jeu.",
    faqBonusTitle: "Les bonus peuvent-ils changer?",
    faqBonusText: "Oui. Les montants, la disponibilité et les conditions des bonus peuvent changer. Vérifiez toujours les conditions finales sur le site externe.",
    faqResponsibleTitle: "Jeu responsable",
    faqResponsibleText: "Les paris et jeux d'argent comportent un risque financier. Cette application ne garantit aucun profit ni gain.",
    faqAgeTitle: "Restriction d'âge",
    faqAgeText: "Ce contenu est destiné uniquement aux utilisateurs ayant l'âge légal pour jouer dans leur pays."
  },

  nl: {
    name: "Nederlands",
    geo: "Netherlands",
    ageTitle: "Bet Guide",
    ageText: "Deze applicatie bevat inhoud over weddenschappen en kansspelen. Bevestig dat je de wettelijke leeftijd in jouw land hebt bereikt.",
    ageButton: "Ik ben 18 jaar of ouder",
    changeLanguage: "Taal wijzigen",
    smallNote: "Speel verantwoord. Beschikbaarheid hangt af van lokale regels.",
    selectGeo: "Kies GEO",
    selectGeoText: "Kies het land waarvoor je beschikbare aanbiedingen wilt zien.",
    selectCategory: "Kies categorie",
    geoSelected: "Geselecteerde GEO",
    availableOffers: "Beschikbare aanbiedingen",
    found: "Gevonden",
    offers: "aanbiedingen",
    viewDetails: "Bekijk details",
    back: "Terug",
    backToOffers: "Terug naar aanbiedingen",
    goToOffer: "Ga naar aanbieding",
    offerDetails: "Aanbiedingsdetails",
    bonus: "Bonus",
    game: "Spel / sectie",
    requirements: "Vereisten",
    riskNote: "Risicomelding",
    faq: "FAQ / Verantwoord spelen",
    directServiceNote: "Deze app biedt zelf geen wed- of gokdiensten aan. De app toont alleen informatieve kaarten en externe links.",
    faqServiceTitle: "Biedt deze app gokdiensten aan?",
    faqServiceText: "Nee. Deze PWA biedt geen weddenschappen, casinospellen, stortingen, opnames of gokdiensten direct aan.",
    faqBonusTitle: "Kunnen bonussen veranderen?",
    faqBonusText: "Ja. Bonusbedragen, beschikbaarheid en voorwaarden kunnen veranderen. Controleer altijd de definitieve voorwaarden op de externe website.",
    faqResponsibleTitle: "Verantwoord spelen",
    faqResponsibleText: "Wedden en gokken brengen financieel risico met zich mee. Deze app garandeert geen winst of resultaat.",
    faqAgeTitle: "Leeftijdsbeperking",
    faqAgeText: "Deze inhoud is alleen bedoeld voor gebruikers die de wettelijke gokleeftijd in hun land hebben bereikt."
  },

  de: {
    name: "Deutsch",
    geo: "Germany",
    ageTitle: "Bet Guide",
    ageText: "Diese Anwendung enthält Inhalte zu Wetten und Glücksspiel. Bitte bestätige, dass du in deinem Land volljährig bist.",
    ageButton: "Ich bin 18 Jahre oder älter",
    changeLanguage: "Sprache ändern",
    smallNote: "Spiele verantwortungsvoll. Die Verfügbarkeit hängt von lokalen Regeln ab.",
    selectGeo: "GEO auswählen",
    selectGeoText: "Wähle das Land, für das du verfügbare Angebote sehen möchtest.",
    selectCategory: "Kategorie wählen",
    geoSelected: "Ausgewähltes GEO",
    availableOffers: "Verfügbare Angebote",
    found: "Gefunden",
    offers: "Angebote",
    viewDetails: "Details ansehen",
    back: "Zurück",
    backToOffers: "Zurück zu Angeboten",
    goToOffer: "Zum Angebot",
    offerDetails: "Angebotsdetails",
    bonus: "Bonus",
    game: "Spiel / Bereich",
    requirements: "Bedingungen",
    riskNote: "Risikohinweis",
    faq: "FAQ / Verantwortungsvolles Spielen",
    directServiceNote: "Diese App bietet keine Wett- oder Glücksspieldienste direkt an. Sie zeigt nur Informationskarten und externe Links.",
    faqServiceTitle: "Bietet diese App Glücksspieldienste an?",
    faqServiceText: "Nein. Diese PWA bietet keine Wetten, Casinospiele, Einzahlungen, Auszahlungen oder Glücksspieldienste direkt an.",
    faqBonusTitle: "Können sich Boni ändern?",
    faqBonusText: "Ja. Bonusbeträge, Verfügbarkeit und Bedingungen können sich ändern. Prüfe immer die endgültigen Bedingungen auf der externen Website.",
    faqResponsibleTitle: "Verantwortungsvolles Spielen",
    faqResponsibleText: "Wetten und Glücksspiel sind mit finanziellen Risiken verbunden. Diese App garantiert keinen Gewinn.",
    faqAgeTitle: "Altersbeschränkung",
    faqAgeText: "Dieser Inhalt ist nur für Nutzer bestimmt, die in ihrem Land das gesetzliche Glücksspielalter erreicht haben."
  }
};

const categoryLabels = {
  it: {
    "Sports Betting": "Scommesse sportive",
    Casino: "Casinò",
    "Crash Games": "Crash Games",
    Bonuses: "Bonus"
  },
  fr: {
    "Sports Betting": "Paris sportifs",
    Casino: "Casino",
    "Crash Games": "Crash Games",
    Bonuses: "Bonus"
  },
  nl: {
    "Sports Betting": "Sportweddenschappen",
    Casino: "Casino",
    "Crash Games": "Crash Games",
    Bonuses: "Bonussen"
  },
  de: {
    "Sports Betting": "Sportwetten",
    Casino: "Casino",
    "Crash Games": "Crash Games",
    Bonuses: "Boni"
  }
};

const offers = [
  ["Italy", "Sports Betting", "Sisal", "Serie A Live", "Sisal Calcio Welcome", "Offerta sportiva per Serie A, Champions League e match live.", "Fino a 100€ in bonus scommesse", "https://example.com/?geo=it&brand=sisal"],
  ["Italy", "Sports Betting", "SNAI", "Matchday Live", "SNAI Matchday Boost", "Promo per derby, big match e mercati live.", "Bonus live fino a 75€", "https://example.com/?geo=it&brand=snai"],
  ["Italy", "Casino", "Lottomatica", "Book of Ra Deluxe", "Lottomatica Casino Pack", "Pacchetto casino con slot classiche e giochi live.", "Welcome casino fino a 200€", "https://example.com/?geo=it&brand=lottomatica"],
  ["Italy", "Casino", "Eurobet", "Starburst", "Eurobet Slots Bonus", "Offerta slot con giri promozionali e bonus iniziale.", "100 giri promozionali su slot selezionate", "https://example.com/?geo=it&brand=eurobet"],
  ["Italy", "Crash Games", "Bet365 Italy", "Aviator", "Aviator Starter Deal", "Crash game con aereo, moltiplicatore e cashout rapido.", "Crash bonus fino a 50€", "https://example.com/?geo=it&brand=bet365&game=aviator"],
  ["Italy", "Crash Games", "888 Casino Italy", "Spaceman", "Spaceman Fast Promo", "Crash game a tema spazio con cashout e moltiplicatore.", "Fast game bonus fino a 60€", "https://example.com/?geo=it&brand=888&game=spaceman"],
  ["Italy", "Bonuses", "PokerStars Italy", "Poker Welcome Hub", "PokerStars Welcome Bonus", "Bonus nuovo utente per poker, tornei e giochi selezionati.", "Bonus nuovo utente fino a 150€", "https://example.com/?geo=it&brand=pokerstars"],
  ["Italy", "Bonuses", "GoldBet", "Weekend Boost", "GoldBet Weekend Boost", "Promo weekend per sport, casino e giochi selezionati.", "Boost weekend fino a 80€", "https://example.com/?geo=it&brand=goldbet"],

  ["France", "Sports Betting", "Winamax", "Ligue 1 Live", "Winamax Ligue 1 Boost", "Offre de paris sportifs pour Ligue 1, tennis et événements live.", "Jusqu'à 100€ en bonus paris", "https://example.com/?geo=fr&brand=winamax"],
  ["France", "Sports Betting", "Betclic", "Match Live", "Betclic Match Live Promo", "Promo pour grands matchs, cotes live et marchés pré-match.", "Bonus live jusqu'à 75€", "https://example.com/?geo=fr&brand=betclic"],
  ["France", "Casino", "Unibet France", "Lucky Wheel", "Unibet Casino Style Pack", "Carte de démonstration casino avec roue bonus et jeux instantanés.", "Pack promo jusqu'à 100€", "https://example.com/?geo=fr&brand=unibet"],
  ["France", "Casino", "Bwin France", "Roulette Live", "Bwin Live Casino Preview", "Carte de présentation pour live casino et jeux de table.", "Bonus découverte jusqu'à 80€", "https://example.com/?geo=fr&brand=bwin"],
  ["France", "Crash Games", "Winamax", "Aviator", "Aviator Flight Promo", "Crash game avec avion, multiplicateur et cashout rapide.", "Bonus crash starter", "https://example.com/?geo=fr&brand=winamax&game=aviator"],
  ["France", "Crash Games", "Betclic", "JetX", "JetX Fast Offer", "Crash game rapide avec fusée, multiplicateur et cashout.", "Bonus fast game jusqu'à 60€", "https://example.com/?geo=fr&brand=betclic&game=jetx"],
  ["France", "Bonuses", "PMU", "Horse Racing Bonus", "PMU Starter Bonus", "Bonus de bienvenue pour courses hippiques et paris sportifs.", "Pack nouveau joueur jusqu'à 150€", "https://example.com/?geo=fr&brand=pmu"],
  ["France", "Bonuses", "ParionsSport", "Welcome Sport Pack", "ParionsSport Welcome Deal", "Bonus sport pour nouveaux utilisateurs éligibles.", "Bonus sport jusqu'à 100€", "https://example.com/?geo=fr&brand=parionssport"],

  ["Netherlands", "Sports Betting", "Bet365 Netherlands", "Eredivisie Live", "Bet365 Eredivisie Offer", "Sports offer for Eredivisie matches, live odds and football weekends.", "Up to 100€ sports welcome bonus", "https://example.com/?geo=nl&brand=bet365"],
  ["Netherlands", "Sports Betting", "TOTO Online", "Live Match Boost", "TOTO Matchday Boost", "Live betting offer for football, tennis and evening matches.", "Live match bonus up to 75€", "https://example.com/?geo=nl&brand=toto"],
  ["Netherlands", "Casino", "Holland Casino Online", "Book of Dead", "Holland Casino Slots Pack", "Casino offer with slots, live tables and welcome promo.", "Casino welcome up to 200€", "https://example.com/?geo=nl&brand=hollandcasino"],
  ["Netherlands", "Casino", "Jacks.nl", "Starburst", "Jacks Slots Welcome", "Slots-style promotional offer for eligible users.", "100 welcome spins", "https://example.com/?geo=nl&brand=jacks"],
  ["Netherlands", "Crash Games", "BetCity", "Aviator", "BetCity Aviator Deal", "Crash game with airplane multiplier and fast cashout.", "Aviator bonus up to 50€", "https://example.com/?geo=nl&brand=betcity&game=aviator"],
  ["Netherlands", "Crash Games", "TOTO Casino", "Spaceman", "TOTO Spaceman Promo", "Crash-style game with space theme and multiplier cashout.", "Fast game bonus up to 65€", "https://example.com/?geo=nl&brand=toto&game=spaceman"],
  ["Netherlands", "Bonuses", "Unibet Netherlands", "Welcome Hub", "Unibet Welcome Deal", "General new-player bonus for eligible users.", "New player bonus up to 150€", "https://example.com/?geo=nl&brand=unibet"],
  ["Netherlands", "Bonuses", "Tombola", "Weekend Pack", "Tombola Weekend Pack", "Weekend bonus pack for casino, bingo and selected games.", "Weekend bonus pack up to 90€", "https://example.com/?geo=nl&brand=tombola"],

  ["Germany", "Sports Betting", "Tipico", "Bundesliga Live", "Tipico Bundesliga Bonus", "Sportwetten-Angebot für Bundesliga, Live-Quoten und Topspiele.", "Bis zu 100€ Sportwetten-Bonus", "https://example.com/?geo=de&brand=tipico"],
  ["Germany", "Sports Betting", "Bet365 Germany", "Matchday Live", "Bet365 Matchday Promo", "Live-Angebot für Fußball, Tennis und Matchday-Märkte.", "Matchday Bonus bis 75€", "https://example.com/?geo=de&brand=bet365"],
  ["Germany", "Casino", "Bwin Germany", "Book of Ra", "Bwin Casino Paket", "Casino-Angebot mit Slots, Live-Tischen und Welcome Bonus.", "Casino Bonus bis 200€", "https://example.com/?geo=de&brand=bwin"],
  ["Germany", "Casino", "AdmiralBet", "Starburst", "AdmiralBet Slots Bonus", "Slot-Angebot mit Willkommensbonus und ausgewählten Spielen.", "120 Freispiele auf ausgewählte Slots", "https://example.com/?geo=de&brand=admiralbet"],
  ["Germany", "Crash Games", "Betano Germany", "Aviator", "Betano Aviator Deal", "Crash-Game-Angebot mit Flugzeug, Multiplikator und schnellem Cashout.", "Crash Starter Bonus bis 50€", "https://example.com/?geo=de&brand=betano&game=aviator"],
  ["Germany", "Crash Games", "Novibet Germany", "JetX", "Novibet JetX Fast Promo", "Fast-Game-Promo mit Raketen-Thema und Crash-Mechanik.", "Fast Game Bonus bis 65€", "https://example.com/?geo=de&brand=novibet&game=jetx"],
  ["Germany", "Bonuses", "PokerStars Germany", "Poker Welcome", "PokerStars Starter Deal", "Allgemeines Willkommensangebot für Poker und ausgewählte Spiele.", "Neukundenbonus bis 150€", "https://example.com/?geo=de&brand=pokerstars"],
  ["Germany", "Bonuses", "Interwetten", "Weekend Bonus", "Interwetten Weekend Deal", "Wochenend-Promo für Sport, Casino und ausgewählte Spiele.", "Wochenendbonus bis 90€", "https://example.com/?geo=de&brand=interwetten"]
].map((item, index) => ({
  id: index + 1,
  geo: item[0],
  category: item[1],
  brand: item[2],
  gameName: item[3],
  title: item[4],
  shortDescription: item[5],
  description: `${item[4]} is an offer card for ${item[2]} and the ${item[3]} section. This PWA shows demo information and redirects to an external placeholder link.`,
  bonus: item[6],
  link: item[7],
  requirements: "18+ only. New users only. Terms and conditions apply.",
  riskNote: "Betting and gambling products involve financial risk. This demo does not guarantee winnings or profit."
}));

function t(key) {
  return languages[selectedLanguage]?.[key] || key;
}

function getCategoryLabel(category) {
  return categoryLabels[selectedLanguage]?.[category] || category;
}

function renderLanguageScreen() {
  app.innerHTML = `
    <section class="screen">
      <div class="top-row">
        <div class="badge">18+</div>
        <div class="app-label">PWA</div>
      </div>

      <h1>Bet Guide</h1>
      <p class="text">Choose the language for the application.</p>

      <div class="grid">
        <button class="option-btn" onclick="selectLanguage('it')">
          <span>Italiano</span>
          <small>Italy</small>
        </button>

        <button class="option-btn" onclick="selectLanguage('fr')">
          <span>Français</span>
          <small>France</small>
        </button>

        <button class="option-btn" onclick="selectLanguage('nl')">
          <span>Nederlands</span>
          <small>Netherlands</small>
        </button>

        <button class="option-btn" onclick="selectLanguage('de')">
          <span>Deutsch</span>
          <small>Germany</small>
        </button>
      </div>
    </section>
  `;
}

function selectLanguage(language) {
  selectedLanguage = language;
  selectedGeo = languages[language].geo;
  renderAgeGate();
}

function renderAgeGate() {
  app.innerHTML = `
    <section class="screen">
      <div class="top-row">
        <div class="badge">18+</div>
        <div class="app-label">${languages[selectedLanguage].name}</div>
      </div>

      <h1>${t("ageTitle")}</h1>
      <p class="text">${t("ageText")}</p>

      <button class="primary-btn" onclick="renderGeoScreen()">
        ${t("ageButton")}
      </button>

      <button class="secondary-btn" onclick="renderLanguageScreen()">
        ${t("changeLanguage")}
      </button>

      <p class="small-text">${t("smallNote")}</p>
    </section>
  `;
}

function renderGeoScreen() {
  app.innerHTML = `
    <section class="screen">
      <p class="step">Step 1 of 3</p>
      <h1>${t("selectGeo")}</h1>
      <p class="text">${t("selectGeoText")}</p>

      <div class="grid">
        ${geoList.map(geo => `
          <button class="option-btn" onclick="selectGeo('${geo}')">
            <span>${geo}</span>
            <small>8 offer cards</small>
          </button>
        `).join("")}
      </div>

      <button class="secondary-btn" onclick="renderAgeGate()">
        ${t("back")}
      </button>
    </section>
  `;
}

function selectGeo(geo) {
  selectedGeo = geo;
  selectedLanguage = geoLanguageMap[geo];
  renderCategoryScreen();
}

function renderCategoryScreen() {
  app.innerHTML = `
    <section class="screen">
      <p class="step">Step 2 of 3</p>
      <h1>${t("selectCategory")}</h1>

      <p class="text">${t("geoSelected")}: <strong>${selectedGeo}</strong></p>

      <div class="grid">
        ${categories.map(category => `
          <button class="option-btn" onclick="selectCategory('${category}')">
            <span>${getCategoryLabel(category)}</span>
            <small>2 offer cards</small>
          </button>
        `).join("")}
      </div>

      <button class="secondary-btn" onclick="renderGeoScreen()">
        ${t("back")}
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
    return offer.geo === selectedGeo && offer.category === selectedCategory;
  });

  app.innerHTML = `
    <section class="screen wide-screen">
      <p class="step">Step 3 of 3</p>
      <h1>${t("availableOffers")}</h1>

      <p class="text">
        GEO: <strong>${selectedGeo}</strong><br>
        Category: <strong>${getCategoryLabel(selectedCategory)}</strong><br>
        ${t("found")}: <strong>${filteredOffers.length}</strong> ${t("offers")}
      </p>

      <div class="offers-list">
        ${filteredOffers.map(offer => `
          <article class="offer-card">
            <div class="offer-header">
              <span class="offer-geo">${offer.brand}</span>
              <span class="offer-category">${getCategoryLabel(offer.category)}</span>
            </div>

            <h2>${offer.title}</h2>
            <p><strong>${t("game")}:</strong> ${offer.gameName}</p>
            <p>${offer.shortDescription}</p>
            <p class="bonus">${offer.bonus}</p>

            <button class="primary-btn" onclick="renderOfferDetails(${offer.id})">
              ${t("viewDetails")}
            </button>
          </article>
        `).join("")}
      </div>

      <div class="footer-actions">
        <button class="secondary-btn" onclick="renderCategoryScreen()">
          ${t("back")}
        </button>

        <button class="secondary-btn" onclick="renderResponsibleScreen()">
          ${t("faq")}
        </button>
      </div>
    </section>
  `;
}

function renderOfferDetails(offerId) {
  const offer = offers.find(item => item.id === offerId);

  app.innerHTML = `
    <section class="screen wide-screen">
      <p class="step">${t("offerDetails")}</p>

      <div class="offer-header">
        <span class="offer-geo">${offer.brand}</span>
        <span class="offer-category">${getCategoryLabel(offer.category)}</span>
      </div>

      <h1>${offer.title}</h1>
      <p class="text">${offer.description}</p>

      <div class="info-box">
        <h2>${t("game")}</h2>
        <p>${offer.gameName}</p>
      </div>

      <div class="info-box">
        <h2>${t("bonus")}</h2>
        <p>${offer.bonus}</p>
      </div>

      <div class="info-box">
        <h2>${t("requirements")}</h2>
        <p>${offer.requirements}</p>
      </div>

      <div class="warning-box">
        <h2>${t("riskNote")}</h2>
        <p>${offer.riskNote}</p>
      </div>

      <a class="primary-link" href="${offer.link}" target="_blank" rel="noopener noreferrer">
        ${t("goToOffer")}
      </a>

      <p class="small-text">${t("directServiceNote")}</p>

      <button class="secondary-btn" onclick="renderOffersScreen()">
        ${t("backToOffers")}
      </button>
    </section>
  `;
}

function renderResponsibleScreen() {
  app.innerHTML = `
    <section class="screen wide-screen">
      <div class="badge">18+</div>

      <h1>${t("faq")}</h1>

      <div class="faq-list">
        <div class="info-box">
          <h2>${t("faqServiceTitle")}</h2>
          <p>${t("faqServiceText")}</p>
        </div>

        <div class="info-box">
          <h2>${t("faqBonusTitle")}</h2>
          <p>${t("faqBonusText")}</p>
        </div>

        <div class="warning-box">
          <h2>${t("faqResponsibleTitle")}</h2>
          <p>${t("faqResponsibleText")}</p>
        </div>

        <div class="info-box">
          <h2>${t("faqAgeTitle")}</h2>
          <p>${t("faqAgeText")}</p>
        </div>
      </div>

      <button class="primary-btn" onclick="renderOffersScreen()">
        ${t("backToOffers")}
      </button>
    </section>
  `;
}

renderLanguageScreen();
