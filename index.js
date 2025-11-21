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
const month = [
  "janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "Mai",
  "juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];

const weekDay = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

const events = {
  1: {
    rdv: "19H00",
    localistion: "rue du plain marché,76370 petit caux",
    description: "Run Blabla",
    image: "./ASSETS/IMG/Rond_orange.png",
  },
  5: {
    rdv: "19H00",
    localistion: "rue du plain marché,76370 petit caux",
    description: "Run Blabla",
    image: "./ASSETS/IMG/Rond_orange.png",
  },
  13: {
    rdv: "19H00",
    localistion: "rue du plain marché,76370 petit caux",
    description: "Run Blabla",
    image: "./ASSETS/IMG/Rond_orange.png",
  },
  19: {
    rdv: "19H00",
    localistion: "rue du plain marché,76370 petit caux",
    description: "Run Blabla",
    image: "./ASSETS/IMG/Rond_orange.png",
  },
  28: {
    rdv: "19H00",
    localistion: "rue du plain marché,76370 petit caux",
    description: "Run Blabla",
    image: "./ASSETS/IMG/Rond_orange.png",
  },
};

const currentDay = new Date();
const monthIndex = currentDay.getMonth();
const monthNumber = monthIndex;
const currentYear = currentDay.getFullYear();
const dayInWeek = currentDay.getUTCDay() - 1;
const dayInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
const firstDayOfMonth =
  new Date(currentDay.getFullYear(), currentDay.getMonth(), 1).getDay() - 1;

const containerMonth = document.querySelector("#monthName");
const monthName = document.createElement("h2");
monthName.textContent = month[monthIndex] + " " + currentYear;
containerMonth.appendChild(monthName);

const containerDays = document.querySelector(".days");
for (let i = 0; i < 7; i++) {
  let dayOfWeek = weekDay[i];
  const days = document.createElement("h2");
  days.textContent = dayOfWeek;
  containerDays.appendChild(days);
}

const containerNomberDay = document.querySelector(".dayNumber");
for (let i = 0; i < firstDayOfMonth; i++) {
  const empty = document.createElement("div");
  empty.classList.add("empty");
  empty.textContent = "  ";
  containerNomberDay.appendChild(empty);
}

for (let day = 1; day <= dayInMonth; day++) {
  const dayNumber = document.createElement("div");
  dayNumber.classList.add("Number");
  dayNumber.textContent = day;
  containerNomberDay.appendChild(dayNumber);

  if (events[day]) {
    const event = events[day];
    const imgEvents = document.createElement("img");
    imgEvents.classList.add("imgEvent");
    imgEvents.src = events[day].image;
    imgEvents.alt = events[day].description;
    dayNumber.appendChild(imgEvents);

    imgEvents.addEventListener("click", () => {
      ShowEventsDetail(events[day]);
    });
  }
}

function ShowEventsDetail(event) {
  const modalContainer = document.querySelector(".modal");
  modalContainer.style.opacity = "1";
}
