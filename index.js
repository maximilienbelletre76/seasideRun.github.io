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

  const weekdays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const events = {
    1: {
      title: "Séance de course",
      description: "Détails sur la séance du 1er novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    3: {
      title: `Séance de course`,
      description: "Détails sur la séance du 1er novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    5: {
      title: `Séance de course`,
      description: "Détails sur la séance du 1er novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    8: {
      title: `Séance de course`,
      description: "Détails sur la séance du 1er novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    9: {
      title: `Séance de course`,
      description: "Détails sur la séance du 1er novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    11: {
      title: `Séance de course`,
      description: "Détails sur la séance du 1er novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    13: {
      title: `Séance de course`,
      description: "Détails sur la séance du 1er novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    15: {
      title: `Séance de course`,
      description: "Détails sur la séance du 1er novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    17: {
      title: `Séance de course`,
      description: "Détails sur la séance du 1er novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    19: {
      title: "Séance d'entraînement",
      description: "Détails sur la séance du 5 novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    23: {
      title: "Séance d'entraînement",
      description: "Détails sur la séance du 5 novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    25: {
      title: "Séance d'entraînement",
      description: "Détails sur la séance du 5 novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    27: {
      title: "Séance d'entraînement",
      description: "Détails sur la séance du 5 novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    30: {
      title: "Séance d'entraînement",
      description: "Détails sur la séance du 5 novembre",
      image: "./ASSETS/IMG/Rond_orange.png",
    },
    // Ajouter d'autres événements ici...
  };
  // Détails des événements pour chaque jour

  // Affichage du mois et de l'année
  document.querySelector(
    "#monthName"
  ).textContent = `${monthName[month]} ${year}`;

  const firstDayOfMonth = new Date(year, month, 1);
  const firstDay = firstDayOfMonth.getDay();
  const dayInMonth = new Date(year, month + 1, 0).getDate();

  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  const dayContainer = document.querySelector(".calendar");
  const header = document.querySelector(".days");

  // Ajouter les jours de la semaine
  weekdays.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("weekdays");
    dayDiv.textContent = day;
    header.appendChild(dayDiv);
  });

  // Ajouter des espaces vides avant le premier jour du mois
  for (let i = 0; i < adjustedFirstDay; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("empty");
    header.appendChild(emptyDiv);
  }

  let currentDay = 1;
  // Ajouter les jours du mois
  for (let i = adjustedFirstDay; currentDay <= dayInMonth; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("date");
    dayDiv.textContent = currentDay;

    // Logique pour ajouter les événements sur certains jours
    if (events[currentDay]) {
      const eventImg = document.createElement("img");
      eventImg.src = events[currentDay].image;
      eventImg.alt = events[currentDay].title;
      eventImg.classList.add("event-img");

      // Log de debug : vérifie la valeur de currentDay
      console.log("Événement cliqué pour le jour :", currentDay);

      // Ajouter un événement au clic
      eventImg.addEventListener("click", function () {
        console.log(currentDay);

        showEventDetail(events[currentDay]);
      });

      dayDiv.appendChild(eventImg);
    }

    header.appendChild(dayDiv);
    currentDay++;
  }
  dayContainer.appendChild(header);
});

// Fonction pour afficher les détails de l'événement

function showEventDetail(event) {
  // Crée un élément modal (popup) pour afficher l'événement
  const modal = document.createElement("div");
  modal.classList.add("modal");

  document.body.appendChild(modal);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  modal.appendChild(modalContent);

  const title = document.createElement("h2");
  title.textContent = event.title;
  modalContent.appendChild(title);
}
