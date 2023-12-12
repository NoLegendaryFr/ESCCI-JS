const burger = document.querySelector("header nav #burger");
const navList = document.querySelector("header nav ul");

burger.addEventListener("click", () => {
  navList.classList.add("navMobile");
});
navList.addEventListener("click", () => {
  navList.classList.remove("navMobile");
});

const btn = document.querySelector("#btn_profil");

const changeAvisApi = "";

const createCard = (data) => {
  console.log(data);
  text_avis_client1.textContent = `${data.comments[1].comment}`;

  text_avis_client2.textContent = `${data.comments[2].comment}`;

  text_avis_client3.textContent = `${data.comments[3].comment}`;
};

/**
 * Fontion fetUrl
 * @param {string} url
 * @returns string
 */
// Fonction multiplication
// Si 2eme parametre absent, valeur par défaut 1
// Sortie affichage console

// Async = permet de dire qu'il ne fait pas le code d'apres le temps qu'il a pas la réponse
const fetchUrl = async (url) => {
  // Await = attend
  const data = await fetch(url);
  if (data.status == 200) {
    const reponse = await data.json();
    createCard(reponse);
  } else {
    console.log("Erreur");
  }
};
/**
 * Fonction changeAvis
 * @param {number} randomNumber
 * @returns string
 */
const changeAvis = () => {
  const randomNumber = parseInt(Math.random() * (818 - 812)) + 1;
  const apiUrl =
    "https://www.spreadshirt.fr/shopData/reviews?productTypeId=" +
    randomNumber +
    "&locale=fr_FR";

  fetchUrl(apiUrl);
};

btn.addEventListener("click", changeAvis);
