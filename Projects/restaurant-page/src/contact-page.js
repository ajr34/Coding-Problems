import HeroImage from "./images/hero-img.jpg";

export default function contactPage() {
  const contentArea = document.querySelector("#content");
  contentArea.textContent = "";

  const newSection = document.createElement("section");
  newSection.setAttribute("data-page", "home");
  newSection.classList.add("container", "flex");

  const pageTitle = document.createElement("h1");
  pageTitle.className = "page__title";
  pageTitle.innerText = "Get In Touch";

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

  // const newSection = document.createElement("section");
  // newSection.setAttribute("data-page", "contact");

  // newSection.classList.add("container", "flex");

  // newSection.innerHTML = `
  //     <h1 class="page__title">Get In Touch</h1>
  //     <div class="container--hero flex">
  //       <p class="hero__text">
  //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
  //         eveniet quidem, ex quaerat nulla hic atque sequi repudiandae.
  //         Facilis, sequi. Lorem ipsum dolor sit amet consectetur adipisicing
  //         elit. Earum nisi id rerum nam soluta alias velit ipsam non placeat
  //         ipsum.
  //       </p>
  //       <img class="hero__img" src="../src/images/hero-img.jpg" alt="" />
  //     </div>`;
  // return newSection;
}
