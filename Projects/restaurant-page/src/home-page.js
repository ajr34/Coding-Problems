import HeroImage from "./images/hero-img.jpg";

export default function homePage() {
  const contentArea = document.querySelector("#content");
  contentArea.textContent = "";

  const newSection = document.createElement("section");
  newSection.setAttribute("data-page", "home");
  newSection.classList.add("container", "flex");

  const pageTitle = document.createElement("h1");
  pageTitle.className = "page__title";
  pageTitle.innerText = "Best Breakfast In Town";

  const heroContainer = document.createElement("div");
  heroContainer.classList.add("container--hero", "flex");

  const heroText = document.createElement("p");
  heroText.className = "hero__text";
  heroText.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi eveniet quidem, ex quaerat nulla hic atque sequi repudiandae. Facilis, sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nisi id rerum nam soluta alias velit ipsam non placeat ipsum.`;

  const heroImg = document.createElement("img");
  heroImg.className = "hero__img";
  heroImg.src = HeroImage;
  heroImg.alt = "Hero Image - Food";

  heroContainer.appendChild(heroText);
  heroContainer.appendChild(heroImg);
  newSection.appendChild(pageTitle);
  newSection.appendChild(heroContainer);

  contentArea.appendChild(newSection);
}
