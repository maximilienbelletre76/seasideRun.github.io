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
const totalImages = 10;
//generer les images
if (imgBox) {
  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img");
    img.src = `./ASSETS/BoxNews/imgbox${i}.jpg`;
    img.alt = `image numero ${i}`;
    img.style.borderRadius = "50px";
    img.onload = () => {
      imgBox.appendChild(img);
    };
  }
}
let speed = 1;
let isPaused = false;
if (imgBox) {
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
}
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

// ----------------------page calendar-------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();

  const monthName = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const weekdays = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  document.querySelector(
    "#monthName"
  ).textContent = `${monthName[month]} ${year}`;

  const firstDayOfMonth = new Date(year, month, 1);
  const firstDay = firstDayOfMonth.getDay();
  const dayInMonth = new Date(year, month + 1, 0).getDate();

  const dayContainer = document.querySelector(".calendar");

  const header = document.querySelector(".calendar");
  header.classList.add(weekdays);
  weekdays.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("weekdays");
    dayDiv.textContent = day;
    header.appendChild(dayDiv);
  });
  dayContainer.appendChild(header);
});
