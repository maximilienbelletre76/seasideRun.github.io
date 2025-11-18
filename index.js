// aficher le menu

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
  img.src = `./ASSETS/BoxNews/imgbox${i}.jpg`;
  img.alt = `image numero ${i}`;
  img.style.borderRadius = "50px";
  img.onload = () => {
    imgBox.appendChild(img);
  };
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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// On observe tous les éléments avec la classe "hidden"
document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
