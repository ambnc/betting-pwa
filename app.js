console.log("APP JS LOADED");

const app = document.getElementById("app");

let selectedLanguage = "";
let selectedGeo = "";
let selectedCategory = "";

const languages = {
  it: {
    name: "Italiano",
    geo: "Italy",
    ageTitle: "Bet Guide",
    ageText:
      "Questa applicazione contiene contenuti relativi a scommesse e gioco d'azzardo. Conferma di avere l'età legale nel tuo paese.",
    ageButton: "Ho 18 anni o più",
    smallNote: "Gioca responsabilmente. La disponibilità dipende dalle normative locali.",
    changeLanguage: "Cambia lingua",
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
    directServiceNote:
      "Questa app non fornisce direttamente servizi di scommesse o gioco d'azzardo. Mostra solo schede informative e link esterni.",
    faqServiceTitle: "Questa app offre servizi di gioco?",
    faqServiceText:
      "No. Questa PWA non offre scommesse, giochi da casinò, depositi, prelievi o servizi di gioco direttamente.",
    faqBonusTitle: "I bonus possono cambiare?",
    faqBonusText:
      "Sì. Importi, disponibilità e requisiti dei bonus possono cambiare. Controlla sempre i termini finali sul sito esterno.",
    faqResponsibleTitle: "Gioco responsabile",
    faqResponsibleText:
      "Scommesse e gioco d'azzardo comportano rischi finanziari. Questa app non garantisce profitti o vincite.",
    faqAgeTitle: "Limite di età",
    faqAgeText:
      "Questo contenuto è destinato solo agli utenti che hanno l'età legale per il gioco nel proprio paese.",
    noOffers: "Nessuna offerta",
    noOffersText: "Non ci sono ancora offerte per questo GEO e questa categoria."
  },

  fr: {
    name: "Français",
    geo: "France",
    ageTitle: "Bet Guide",
    ageText:
      "Cette application contient du contenu lié aux paris et aux jeux d'argent. Veuillez confirmer que vous avez l'âge légal dans votre pays.",
    ageButton: "J'ai 18 ans ou plus",
    smallNote: "Jouez de manière responsable. La disponibilité dépend des règles locales.",
    changeLanguage: "Changer la langue",
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
    directServiceNote:
      "Cette application ne fournit pas directement de services de paris ou de jeux d'argent. Elle affiche uniquement des fiches d'information et des liens externes.",
    faqServiceTitle: "Cette application fournit-elle des services de jeu?",
    faqServiceText:
      "Non. Cette PWA ne propose pas directement de paris, jeux de casino, dépôts, retraits ou services de jeu.",
    faqBonusTitle: "Les bonus peuvent-ils changer?",
    faqBonusText:
      "Oui. Les montants, la disponibilité et les conditions des bonus peuvent changer. Vérifiez toujours les conditions finales sur le site externe.",
    faqResponsibleTitle: "Jeu responsable",
    faqResponsibleText:
      "Les paris et jeux d'argent comportent un risque financier. Cette application ne garantit aucun profit ni gain.",
    faqAgeTitle: "Restriction d'âge",
    faqAgeText:
      "Ce contenu est destiné uniquement aux utilisateurs ayant l'âge légal pour jouer dans leur pays.",
    noOffers: "Aucune offre",
    noOffersText: "Il n'y a pas encore d'offres pour ce GEO et cette catégorie."
  },

  nl: {
    name: "Nederlands",
    geo: "Netherlands",
    ageTitle: "Bet Guide",
    ageText:
      "Deze applicatie bevat inhoud over weddenschappen en kansspelen. Bevestig dat je de wettelijke leeftijd in jouw land hebt bereikt.",
    ageButton: "Ik ben 18 jaar of ouder",
    smallNote: "Speel verantwoord. Beschikbaarheid hangt af van lokale regels.",
    changeLanguage: "Taal wijzigen",
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
    directServiceNote:
      "Deze app biedt zelf geen wed- of gokdiensten aan. De app toont alleen informatieve kaarten en externe links.",
    faqServiceTitle: "Biedt deze app gokdiensten aan?",
    faqServiceText:
      "Nee. Deze PWA biedt geen weddenschappen, casinospellen, stortingen, opnames of gokdiensten direct aan.",
    faqBonusTitle: "Kunnen bonussen veranderen?",
    faqBonusText:
      "Ja. Bonusbedragen, beschikbaarheid en voorwaarden kunnen veranderen. Controleer altijd de definitieve voorwaarden op de externe website.",
    faqResponsibleTitle: "Verantwoord spelen",
    faqResponsibleText:
      "Wedden en gokken brengen financieel risico met zich mee. Deze app garandeert geen winst of resultaat.",
    faqAgeTitle: "Leeftijdsbeperking",
    faqAgeText:
      "Deze inhoud is alleen bedoeld voor gebruikers die de wettelijke gokleeftijd in hun land hebben bereikt.",
    noOffers: "Geen aanbiedingen",
    noOffersText: "Er zijn nog geen aanbiedingen voor deze GEO en categorie."
  },

  de: {
    name: "Deutsch",
    geo: "Germany",
    ageTitle: "Bet Guide",
    ageText:
      "Diese Anwendung enthält Inhalte zu Wetten und Glücksspiel. Bitte bestätige, dass du in deinem Land volljährig bist.",
    ageButton: "Ich bin 18 Jahre oder älter",
    smallNote: "Spiele verantwortungsvoll. Die Verfügbarkeit hängt von lokalen Regeln ab.",
    changeLanguage: "Sprache ändern",
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
    directServiceNote:
      "Diese App bietet keine Wett- oder Glücksspieldienste direkt an. Sie zeigt nur Informationskarten und externe Links.",
    faqServiceTitle: "Bietet diese App Glücksspieldienste an?",
    faqServiceText:
      "Nein. Diese PWA bietet keine Wetten, Casinospiele, Einzahlungen, Auszahlungen oder Glücksspieldienste direkt an.",
    faqBonusTitle: "Können sich Boni ändern?",
    faqBonusText:
      "Ja. Bonusbeträge, Verfügbarkeit und Bedingungen können sich ändern. Prüfe immer die endgültigen Bedingungen auf der externen Website.",
    faqResponsibleTitle: "Verantwortungsvolles Spielen",
    faqResponsibleText:
      "Wetten und Glücksspiel sind mit finanziellen Risiken verbunden. Diese App garantiert keinen Gewinn.",
    faqAgeTitle: "Altersbeschränkung",
    faqAgeText:
      "Dieser Inhalt ist nur für Nutzer bestimmt, die in ihrem Land das gesetzliche Glücksspielalter erreicht haben.",
    noOffers: "Keine Angebote",
    noOffersText: "Für dieses GEO und diese Kategorie gibt es noch keine Angebote."
  }
};

const categories = ["Sports Betting", "Casino", "Crash Games", "Bonuses"];

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

const geoList = ["Italy", "France", "Netherlands", "Germany"];

const geoLanguageMap = {
  Italy: "it",
  France: "fr",
  Netherlands: "nl",
  Germany: "de"
};

const geoLabels = {
  Italy: "Italy",
  France: "France",
  Netherlands: "Netherlands",
  Germany: "Germany"
};

const offers = [
  // ITALY
  {
    id: 1,
    geo: "Italy",
    category: "Sports Betting",
    brand: "CalcioMax",
    gameName: "Serie A Live",
    title: "Bonus Benvenuto CalcioMax",
    shortDescription: "Offerta per scommesse su Serie A, Champions League e partite live.",
    description:
      "CalcioMax propone una scheda dedicata agli utenti interessati al calcio italiano, alle quote live e alle partite del weekend. L'offerta rimanda a una piattaforma esterna, dove sono disponibili condizioni finali e limiti del bonus.",
    bonus: "Fino a 100€ in bonus scommesse",
    requirements: "18+ only. New users only. Terms and conditions apply.",
    riskNote: "Le scommesse sportive comportano rischio finanziario.",
    link: "https://example.com?geo=it&cat=sports&offer=calciomax"
  },
  {
    id: 2,
    geo: "Italy",
    category: "Sports Betting",
    brand: "GoalRush Italia",
    gameName: "Derby Night Live",
    title: "Promo Derby Night",
    shortDescription: "Promo live per derby, big match e mercati pre-partita.",
    description:
      "GoalRush Italia è pensato come offerta sportiva per chi segue partite ad alta intensità: derby, finali e match serali. La scheda mostra solo informazioni e link esterno.",
    bonus: "Bonus live match fino a 75€",
    requirements: "18+ only. Availability depends on operator rules.",
    riskNote: "Le quote live cambiano rapidamente e possono aumentare il rischio.",
    link: "https://example.com?geo=it&cat=sports&offer=goalrush"
  },
  {
    id: 3,
    geo: "Italy",
    category: "Casino",
    brand: "DolceSpin",
    gameName: "Roma Treasures",
    title: "Pacchetto DolceSpin Casino",
    shortDescription: "Offerta casino con slot a tema Roma e giri promozionali.",
    description:
      "DolceSpin presenta una scheda casino con focus su slot, giochi casual e promozioni per nuovi utenti. Le condizioni effettive sono disponibili solo sul sito dell'operatore esterno.",
    bonus: "100 giri promozionali su Roma Treasures",
    requirements: "18+ only. Wagering requirements may apply.",
    riskNote: "I giochi casino sono basati sul caso e non garantiscono vincite.",
    link: "https://example.com?geo=it&cat=casino&offer=dolcespin"
  },
  {
    id: 4,
    geo: "Italy",
    category: "Casino",
    brand: "Vesuvio Club",
    gameName: "Napoli Gold",
    title: "Vesuvio Club Welcome Pack",
    shortDescription: "Welcome pack per slot, tavoli live e giochi istantanei.",
    description:
      "Vesuvio Club è una scheda casino pensata per una vetrina di offerte con bonus iniziale e giochi a tema italiano. L'app non ospita giochi e non gestisce pagamenti.",
    bonus: "Pacchetto benvenuto fino a 200€",
    requirements: "18+ only. New users only.",
    riskNote: "Il bonus può includere requisiti di puntata.",
    link: "https://example.com?geo=it&cat=casino&offer=vesuvio"
  },
  {
    id: 5,
    geo: "Italy",
    category: "Crash Games",
    brand: "JetX Italia",
    gameName: "Sky Rocket",
    title: "Sky Rocket Starter Bonus",
    shortDescription: "Offerta crash game con round veloci e moltiplicatore dinamico.",
    description:
      "Sky Rocket è una scheda per offerte crash-style, pensata per utenti interessati a giochi rapidi con moltiplicatore. Il rischio è alto e le condizioni dipendono dalla piattaforma esterna.",
    bonus: "Starter bonus per Sky Rocket",
    requirements: "18+ only. Check operator rules.",
    riskNote: "I crash games sono prodotti ad alto rischio.",
    link: "https://example.com?geo=it&cat=crash&offer=skyrocket"
  },
  {
    id: 6,
    geo: "Italy",
    category: "Crash Games",
    brand: "TurboPlay",
    gameName: "Volcano Rush",
    title: "Volcano Rush Fast Promo",
    shortDescription: "Promo per gioco veloce con tema vulcano e cashout rapido.",
    description:
      "Volcano Rush è una scheda fast game con meccanica crash. L'app mostra solo informazioni e non permette di giocare direttamente.",
    bonus: "Bonus fast game fino a 50€",
    requirements: "18+ only. Terms may vary.",
    riskNote: "I giochi veloci possono portare a perdite rapide.",
    link: "https://example.com?geo=it&cat=crash&offer=volcanorush"
  },
  {
    id: 7,
    geo: "Italy",
    category: "Bonuses",
    brand: "BonusCasa",
    gameName: "Welcome Hub",
    title: "BonusCasa New Player Deal",
    shortDescription: "Bonus generale per nuovi utenti con condizioni promozionali.",
    description:
      "BonusCasa raccoglie una promo iniziale per nuovi utenti. Prima di registrarsi è necessario controllare limiti, durata e requisiti sul sito esterno.",
    bonus: "Bonus nuovo utente fino a 150€",
    requirements: "18+ only. New users only.",
    riskNote: "I bonus non garantiscono vincite.",
    link: "https://example.com?geo=it&cat=bonus&offer=bonuscasa"
  },
  {
    id: 8,
    geo: "Italy",
    category: "Bonuses",
    brand: "PromoVerde",
    gameName: "Weekend Boost",
    title: "Weekend Boost Promo",
    shortDescription: "Promo weekend per casino, sport e giochi rapidi.",
    description:
      "Weekend Boost è una promo flessibile pensata come scheda di raccolta bonus. Le condizioni possono cambiare in base alla piattaforma.",
    bonus: "Boost weekend fino a 80€",
    requirements: "18+ only. Availability may change.",
    riskNote: "Leggi sempre le condizioni complete.",
    link: "https://example.com?geo=it&cat=bonus&offer=promoverde"
  },

  // FRANCE
  {
    id: 9,
    geo: "France",
    category: "Sports Betting",
    brand: "PariBleu",
    gameName: "Ligue 1 Live",
    title: "Offre Ligue 1 PariBleu",
    shortDescription: "Offre de paris sportifs pour Ligue 1, tennis et matchs en direct.",
    description:
      "PariBleu présente une offre orientée football français et événements sportifs en direct. Les conditions finales sont disponibles uniquement sur le site externe de l'opérateur.",
    bonus: "Jusqu'à 100€ en bonus paris",
    requirements: "18+ only. Local restrictions may apply.",
    riskNote: "Les paris sportifs comportent un risque financier.",
    link: "https://example.com?geo=fr&cat=sports&offer=paribleu"
  },
  {
    id: 10,
    geo: "France",
    category: "Sports Betting",
    brand: "MatchHexa",
    gameName: "Soirée Match",
    title: "Promo Soirée Match",
    shortDescription: "Promo pour les grands matchs, les cotes live et les événements du soir.",
    description:
      "MatchHexa est une carte d'offre pour les utilisateurs intéressés par les grands matchs et les marchés live. L'application ne fait que rediriger vers une plateforme externe.",
    bonus: "Bonus live jusqu'à 70€",
    requirements: "18+ only. Terms and conditions apply.",
    riskNote: "Les résultats sportifs sont incertains.",
    link: "https://example.com?geo=fr&cat=sports&offer=matchhexa"
  },
  {
    id: 11,
    geo: "France",
    category: "Casino",
    brand: "HexaSpin",
    gameName: "Paris Lights",
    title: "Pack Casino HexaSpin",
    shortDescription: "Offre casino avec machine à sous Paris Lights et tours promotionnels.",
    description:
      "HexaSpin propose une carte casino centrée sur les machines à sous et les offres de bienvenue. Vérifiez toujours les conditions de mise avant inscription.",
    bonus: "120 tours promotionnels sur Paris Lights",
    requirements: "18+ only. Final terms are provided by the external operator.",
    riskNote: "Les jeux de casino sont basés sur le hasard.",
    link: "https://example.com?geo=fr&cat=casino&offer=hexaspin"
  },
  {
    id: 12,
    geo: "France",
    category: "Casino",
    brand: "Rouge Casino",
    gameName: "Riviera Fruits",
    title: "Rouge Casino Welcome",
    shortDescription: "Offre casino pour slots, live tables et jeux instantanés.",
    description:
      "Rouge Casino est une fiche d'offre avec un bonus de bienvenue et une sélection de jeux casino. Cette PWA ne traite aucun paiement.",
    bonus: "Bonus casino jusqu'à 180€",
    requirements: "18+ only. Bonus terms may change.",
    riskNote: "Les bonus peuvent inclure des exigences de mise.",
    link: "https://example.com?geo=fr&cat=casino&offer=rougecasino"
  },
  {
    id: 13,
    geo: "France",
    category: "Crash Games",
    brand: "AviateurX",
    gameName: "Avion Rouge",
    title: "Avion Rouge Crash Promo",
    shortDescription: "Offre crash game avec multiplicateur et cashout rapide.",
    description:
      "Avion Rouge est une carte d'offre pour un format crash-style. Le jeu est rapide et risqué; l'application ne fournit pas le jeu directement.",
    bonus: "Bonus crash starter",
    requirements: "18+ only. Check platform rules.",
    riskNote: "Les crash games sont volatils et à haut risque.",
    link: "https://example.com?geo=fr&cat=crash&offer=avionrouge"
  },
  {
    id: 14,
    geo: "France",
    category: "Crash Games",
    brand: "TurboHexa",
    gameName: "Rocket Seine",
    title: "Rocket Seine Fast Offer",
    shortDescription: "Offre fast game avec thème fusée et multiplicateur dynamique.",
    description:
      "Rocket Seine est une fiche promotionnelle pour un jeu rapide de type crash. Les règles finales dépendent de l'opérateur externe.",
    bonus: "Bonus fast game jusqu'à 60€",
    requirements: "18+ only. Operator terms apply.",
    riskNote: "Les jeux rapides peuvent augmenter le risque de perte.",
    link: "https://example.com?geo=fr&cat=crash&offer=rocketseine"
  },
  {
    id: 15,
    geo: "France",
    category: "Bonuses",
    brand: "BonusHexa",
    gameName: "Pack Nouveau Joueur",
    title: "BonusHexa Starter Pack",
    shortDescription: "Pack de bienvenue pour nouveaux utilisateurs éligibles.",
    description:
      "BonusHexa regroupe une offre de bienvenue avec conditions promotionnelles. Vérifiez toujours la validité et les limites avant inscription.",
    bonus: "Pack nouveau joueur jusqu'à 150€",
    requirements: "18+ only. New users only.",
    riskNote: "Les promotions ne garantissent pas de gains.",
    link: "https://example.com?geo=fr&cat=bonus&offer=bonushexa"
  },
  {
    id: 16,
    geo: "France",
    category: "Bonuses",
    brand: "PromoBleu",
    gameName: "Boost Week-end",
    title: "Boost Week-end Promo",
    shortDescription: "Offre bonus week-end pour sport, casino et jeux rapides.",
    description:
      "Boost Week-end est une carte promo générale. Les montants et conditions peuvent changer selon l'opérateur.",
    bonus: "Boost jusqu'à 90€",
    requirements: "18+ only. Terms and conditions apply.",
    riskNote: "Lisez les conditions complètes avant utilisation.",
    link: "https://example.com?geo=fr&cat=bonus&offer=promobleu"
  },

  // NETHERLANDS
  {
    id: 17,
    geo: "Netherlands",
    category: "Sports Betting",
    brand: "OranjeBet",
    gameName: "Eredivisie Live",
    title: "OranjeBet Eredivisie Deal",
    shortDescription: "Sports offer for Eredivisie matches, live odds and football weekends.",
    description:
      "OranjeBet is a sports betting offer card focused on Dutch football, live matches and weekend events. Final conditions are shown by the external operator.",
    bonus: "Up to 100€ sports welcome bonus",
    requirements: "18+ only. Local rules may apply.",
    riskNote: "Betting involves financial risk.",
    link: "https://example.com?geo=nl&cat=sports&offer=oranjebet"
  },
  {
    id: 18,
    geo: "Netherlands",
    category: "Sports Betting",
    brand: "MatchMolen",
    gameName: "Live Match Boost",
    title: "MatchMolen Live Boost",
    shortDescription: "Live betting offer for football, tennis and evening matches.",
    description:
      "MatchMolen is a sports promo card for users interested in live betting markets and match-based offers. The app only redirects users to an external platform.",
    bonus: "Live match bonus up to 75€",
    requirements: "18+ only. Terms and conditions apply.",
    riskNote: "Live odds can change quickly.",
    link: "https://example.com?geo=nl&cat=sports&offer=matchmolen"
  },
  {
    id: 19,
    geo: "Netherlands",
    category: "Casino",
    brand: "TulipSpin",
    gameName: "Amsterdam Reels",
    title: "TulipSpin Casino Pack",
    shortDescription: "Casino offer with Amsterdam Reels and welcome spins.",
    description:
      "TulipSpin is a casino offer card with a slots-focused welcome pack. The app does not host games or process deposits.",
    bonus: "100 welcome spins on Amsterdam Reels",
    requirements: "18+ only. Operator terms apply.",
    riskNote: "Slots are chance-based and do not guarantee winnings.",
    link: "https://example.com?geo=nl&cat=casino&offer=tulipspin"
  },
  {
    id: 20,
    geo: "Netherlands",
    category: "Casino",
    brand: "Canal Club",
    gameName: "Golden Windmill",
    title: "Canal Club Welcome",
    shortDescription: "Casino welcome offer for slots, live tables and instant games.",
    description:
      "Canal Club is a casino-style offer card with a welcome bonus and themed game section. Final rules are provided externally.",
    bonus: "Casino bonus up to 200€",
    requirements: "18+ only. Terms may vary.",
    riskNote: "Casino products involve financial risk.",
    link: "https://example.com?geo=nl&cat=casino&offer=canalclub"
  },
  {
    id: 21,
    geo: "Netherlands",
    category: "Crash Games",
    brand: "FlyHigh NL",
    gameName: "Jet Ladder",
    title: "Jet Ladder Crash Bonus",
    shortDescription: "Crash-style offer with fast rounds and multiplier gameplay.",
    description:
      "Jet Ladder is a crash-game offer card built around fast rounds and dynamic multiplier mechanics. This app only displays the offer.",
    bonus: "Crash starter bonus up to 50€",
    requirements: "18+ only. Check operator rules.",
    riskNote: "Crash games are high-risk entertainment products.",
    link: "https://example.com?geo=nl&cat=crash&offer=jetladder"
  },
  {
    id: 22,
    geo: "Netherlands",
    category: "Crash Games",
    brand: "RocketDam",
    gameName: "Canal Rocket",
    title: "Canal Rocket Fast Promo",
    shortDescription: "Fast game promo with crash-style mechanics and quick cashout.",
    description:
      "Canal Rocket is a fast game offer card for users interested in crash-style mechanics. Losses can happen quickly.",
    bonus: "Fast game bonus up to 65€",
    requirements: "18+ only. Operator terms apply.",
    riskNote: "Instant game mechanics can lead to fast losses.",
    link: "https://example.com?geo=nl&cat=crash&offer=canalrocket"
  },
  {
    id: 23,
    geo: "Netherlands",
    category: "Bonuses",
    brand: "BonusMolen",
    gameName: "Starter Hub",
    title: "BonusMolen Starter Deal",
    shortDescription: "General new-player bonus for eligible users.",
    description:
      "BonusMolen is a general welcome bonus card. Bonus value, limits and validity may change depending on the external operator.",
    bonus: "New player bonus up to 150€",
    requirements: "18+ only. New users only.",
    riskNote: "Promotional offers do not guarantee profit.",
    link: "https://example.com?geo=nl&cat=bonus&offer=bonusmolen"
  },
  {
    id: 24,
    geo: "Netherlands",
    category: "Bonuses",
    brand: "PromoTulip",
    gameName: "Weekend Pack",
    title: "PromoTulip Weekend Pack",
    shortDescription: "Weekend bonus pack for casino, sports and fast games.",
    description:
      "PromoTulip is a flexible bonus pack card. Always check the final terms before using the offer.",
    bonus: "Weekend bonus pack up to 90€",
    requirements: "18+ only. Terms and conditions apply.",
    riskNote: "Bonus terms can include limits and wagering requirements.",
    link: "https://example.com?geo=nl&cat=bonus&offer=promotulip"
  },

  // GERMANY
  {
    id: 25,
    geo: "Germany",
    category: "Sports Betting",
    brand: "BundesBet",
    gameName: "Bundesliga Live",
    title: "BundesBet Bundesliga Bonus",
    shortDescription: "Sportwetten-Angebot für Bundesliga, Live-Quoten und Topspiele.",
    description:
      "BundesBet ist eine Sportwetten-Karte für Nutzer, die sich für Bundesliga-Spiele, Live-Märkte und Topspiele interessieren. Die endgültigen Bedingungen liegen beim externen Anbieter.",
    bonus: "Bis zu 100€ Sportwetten-Bonus",
    requirements: "18+ only. Local rules may apply.",
    riskNote: "Sportwetten sind mit finanziellen Risiken verbunden.",
    link: "https://example.com?geo=de&cat=sports&offer=bundesbet"
  },
  {
    id: 26,
    geo: "Germany",
    category: "Sports Betting",
    brand: "TorKönig",
    gameName: "Matchday Boost",
    title: "TorKönig Matchday Promo",
    shortDescription: "Live-Angebot für Fußball, Tennis und Matchday-Märkte.",
    description:
      "TorKönig ist eine Sport-Promo-Karte für Live-Events und Matchday-Angebote. Die App zeigt nur Informationen und externe Links.",
    bonus: "Matchday Bonus bis 75€",
    requirements: "18+ only. Terms and conditions apply.",
    riskNote: "Live-Wetten können besonders riskant sein.",
    link: "https://example.com?geo=de&cat=sports&offer=torkoenig"
  },
  {
    id: 27,
    geo: "Germany",
    category: "Casino",
    brand: "RheinSpin",
    gameName: "Berlin Nights",
    title: "RheinSpin Casino Paket",
    shortDescription: "Casino-Angebot mit Berlin Nights und Willkommens-Spins.",
    description:
      "RheinSpin ist eine Casino-Karte mit Slot-Fokus und Willkommensaktion. Die App betreibt keine Spiele und verarbeitet keine Zahlungen.",
    bonus: "120 Freispiele für Berlin Nights",
    requirements: "18+ only. Operator terms apply.",
    riskNote: "Casino-Spiele basieren auf Zufall.",
    link: "https://example.com?geo=de&cat=casino&offer=rheinspin"
  },
  {
    id: 28,
    geo: "Germany",
    category: "Casino",
    brand: "Alpen Club",
    gameName: "Bavaria Gold",
    title: "Alpen Club Welcome Bonus",
    shortDescription: "Casino-Welcome-Angebot für Slots, Live-Tische und Instant Games.",
    description:
      "Alpen Club ist eine Casino-Angebotskarte mit thematischem Spielbereich und Bonusstruktur. Vollständige Bedingungen stehen auf der externen Plattform.",
    bonus: "Casino Bonus bis 200€",
    requirements: "18+ only. Bonus terms may change.",
    riskNote: "Bonusangebote können Umsatzbedingungen enthalten.",
    link: "https://example.com?geo=de&cat=casino&offer=alpenclub"
  },
  {
    id: 29,
    geo: "Germany",
    category: "Crash Games",
    brand: "TurboFlug",
    gameName: "Rocket Autobahn",
    title: "Rocket Autobahn Crash Deal",
    shortDescription: "Crash-Game-Angebot mit schnellen Runden und dynamischem Multiplikator.",
    description:
      "Rocket Autobahn ist eine Crash-Game-Karte für schnelle Spielmechaniken und Cashout-Logik. Das Risiko ist hoch und die App bietet kein Spiel direkt an.",
    bonus: "Crash Starter Bonus bis 50€",
    requirements: "18+ only. Check operator rules.",
    riskNote: "Crash Games sind Hochrisiko-Produkte.",
    link: "https://example.com?geo=de&cat=crash&offer=rocketautobahn"
  },
  {
    id: 30,
    geo: "Germany",
    category: "Crash Games",
    brand: "JetBerlin",
    gameName: "Sky Multiplier",
    title: "Sky Multiplier Fast Promo",
    shortDescription: "Fast-Game-Promo mit Crash-Mechanik und schnellem Cashout.",
    description:
      "Sky Multiplier ist eine schnelle Crash-Style-Angebotskarte. Die endgültigen Regeln und Limits werden vom externen Anbieter festgelegt.",
    bonus: "Fast Game Bonus bis 65€",
    requirements: "18+ only. Terms and conditions apply.",
    riskNote: "Schnelle Spiele können zu schnellen Verlusten führen.",
    link: "https://example.com?geo=de&cat=crash&offer=skymultiplier"
  },
  {
    id: 31,
    geo: "Germany",
    category: "Bonuses",
    brand: "BonusHaus",
    gameName: "Starter Paket",
    title: "BonusHaus Starter Deal",
    shortDescription: "Allgemeines Willkommensangebot für neue berechtigte Nutzer.",
    description:
      "BonusHaus ist eine allgemeine Bonuskarte für neue Nutzer. Bonuswert, Dauer und Bedingungen können sich ändern.",
    bonus: "Neukundenbonus bis 150€",
    requirements: "18+ only. New users only.",
    riskNote: "Boni garantieren keine Gewinne.",
    link: "https://example.com?geo=de&cat=bonus&offer=bonushaus"
  },
  {
    id: 32,
    geo: "Germany",
    category: "Bonuses",
    brand: "PromoKarte",
    gameName: "Wochenend Paket",
    title: "PromoKarte Wochenend Bonus",
    shortDescription: "Wochenend-Promo für Sport, Casino und schnelle Spiele.",
    description:
      "PromoKarte ist eine flexible Wochenend-Bonuskarte. Vor Nutzung sollten alle Bedingungen geprüft werden.",
    bonus: "Wochenendbonus bis 90€",
    requirements: "18+ only. Terms may change.",
    riskNote: "Lies alle Bonusbedingungen vor der Registrierung.",
    link: "https://example.com?geo=de&cat=bonus&offer=promokarte"
  }
];

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

      <p class="text">
        Choose the language for the application.
      </p>

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

      <p class="small-text">
        You can change the language by returning to this screen.
      </p>
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

      <p class="text">
        ${t("ageText")}
      </p>

      <button class="primary-btn" onclick="renderGeoScreen()">
        ${t("ageButton")}
      </button>

      <button class="secondary-btn" onclick="renderLanguageScreen()">
        ${t("changeLanguage")}
      </button>

      <p class="small-text">
        ${t("smallNote")}
      </p>
    </section>
  `;
}

function renderGeoScreen() {
  app.innerHTML = `
    <section class="screen">
      <p class="step">Step 1 of 3</p>

      <h1>${t("selectGeo")}</h1>

      <p class="text">
        ${t("selectGeoText")}
      </p>

      <div class="grid">
        ${geoList
          .map(
            geo => `
              <button class="option-btn" onclick="selectGeo('${geo}')">
                <span>${geoLabels[geo]}</span>
                <small>8 offer cards</small>
              </button>
            `
          )
          .join("")}
      </div>

      <button class="secondary-btn" onclick="renderAgeGate()">
        ${t("back")}
      </button>
    </section>
  `;
}

function selectGeo(geo) {
  selectedGeo = geo;

  const geoLanguage = geoLanguageMap[geo];

  if (geoLanguage && geoLanguage !== selectedLanguage) {
    selectedLanguage = geoLanguage;
  }

  renderCategoryScreen();
}

function renderCategoryScreen() {
  app.innerHTML = `
    <section class="screen">
      <p class="step">Step 2 of 3</p>

      <h1>${t("selectCategory")}</h1>

      <p class="text">
        ${t("geoSelected")}: <strong>${selectedGeo}</strong>
      </p>

      <div class="grid">
        ${categories
          .map(
            category => `
              <button class="option-btn" onclick="selectCategory('${category}')">
                <span>${getCategoryLabel(category)}</span>
                <small>2 offer cards</small>
              </button>
            `
          )
          .join("")}
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
        ${
          filteredOffers.length > 0
            ? filteredOffers
                .map(
                  offer => `
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
                  `
                )
                .join("")
            : `
              <div class="empty-card">
                <h2>${t("noOffers")}</h2>
                <p>${t("noOffersText")}</p>
              </div>
            `
        }
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

  if (!offer) {
    renderOffersScreen();
    return;
  }

  app.innerHTML = `
    <section class="screen wide-screen">
      <p class="step">${t("offerDetails")}</p>

      <div class="offer-header">
        <span class="offer-geo">${offer.brand}</span>
        <span class="offer-category">${getCategoryLabel(offer.category)}</span>
      </div>

      <h1>${offer.title}</h1>

      <p class="text">
        ${offer.description}
      </p>

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

      <p class="small-text">
        ${t("directServiceNote")}
      </p>

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
