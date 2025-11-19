// aficher le menu
const logo = document.querySelector("#Home");
const menu = document.querySelector("#menuContainer");
let menuOpen = false;

function showMenu() {
  menu.style.visibility = "visible";
  menu.style.opacity = "0.8";
  menuOpen = true;
}

function hideMenu() {
  menu.style.visibility = "hidden";
  menu.style.opacity = "0";
  menuOpen = false;
}

// clic sur logo
logo.addEventListener("click", function (e) {
  if (!menuOpen) {
    e.preventDefault();
    showMenu();
  } else {
    hideMenu();
  }
});

// empêcher fermeture si clic dans le menu
menu.addEventListener("click", function (e) {
  e.stopPropagation();
});

// fermer menu si clic en dehors
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && e.target !== logo) {
    hideMenu();
  }
});

//logo remonte en cas d'inactivité
let inactivityTimer;

function setActive() {
  logo.classList.remove("inactive");
  resetTimer();
}

function setInactive() {
  logo.classList.add("inactive");
}

function resetTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(setInactive, 1500); // 3 secondes d'inactivité
}

// Événements pour détecter l'activité de l'utilisateur
document.addEventListener("mousemove", setActive);
document.addEventListener("keydown", setActive);
document.addEventListener("touchstart", setActive);

// lancer le timer au départ
resetTimer();
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
