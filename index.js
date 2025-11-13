//opacite barre de navigation

const barreNav = document.querySelector("nav");
let scrollTimer;

document.addEventListener("scroll", () => {
  barreNav.style.opacity = "0.5";
  clearTimeout(scrollTimer);

  scrollTimer = setTimeout(() => {
    barreNav.style.opacity = "1";
  }, 0);
});

//aficher le menu

const logo = document.querySelector("#Home");
const menu = document.querySelector("#menuContainer");

function showMenu() {
  menu.style.visibility = "visible";
  menu.style.opacity = "0.8";
}

function hideMenu() {
  menu.style.visibility = "hidden";
  menu.style.opacity = "0";
}

logo.addEventListener("mouseenter", showMenu);
logo.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!menu.matches(":hover")) hideMenu();
  }, 100);
});

menu.addEventListener("mouseleave", hideMenu);

// animation image box

const imgBox = document.querySelector("#imgbox");
//generer les images
for (let i = 1; i <= 20; i++) {
  const img = document.createElement("img");
  img.src = `./ASSET/BoxNews/imgbox${i}.jpg`;
  img.alt = `image numero ${i}`;
  imgBox.appendChild(img);
  img.style.borderRadius = "50px";
}
let speed = 1;
let isPaused = false;

imgBox.addEventListener("mouseenter", () => (isPaused = true));
imgBox.addEventListener("mouseleave", () => (isPaused = false));

function autoScroll() {
  if (!isPaused) {
    imgBox.scrollLeft += speed;

    if (imgBox.scrollLeft >= imgBox.scrollWidth - imgBox.clientWidth) {
      imgBox.scrollLeft = 0;
    }
  }
  requestAnimationFrame(autoScroll);
}

autoScroll();
