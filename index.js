// aficher le menu
const logo = document.querySelector("#Home");
const menu = document.querySelector("#menuContainer");
let menuOpen = false;

window.addEventListener("load", () => {
  document.body.style.opacity = 1;
});

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
    localisation:
      "https://www.google.fr/maps/place/Gymnase+scolaire/@49.9597573,1.1820921,17z/data=!4m15!1m8!3m7!1s0x47e0a6dd1a19fe1b:0xdc96561fab8f1616!2s2+Rue+du+Plain+March%C3%A9,+76370+Petit-Caux!3b1!8m2!3d49.963015!4d1.189613!16s%2Fg%2F11txhzdm8_!3m5!1s0x47e0a7e7b93b9aef:0x985ef0efb458bb3b!8m2!3d49.9595255!4d1.1833977!16s%2Fg%2F11tjs4tn80?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3Drue du plain marché,76370 petit caux",
    lieu: "Local",
    title: "Run Blabla",
    description:
      "40 à 60 minutes de course à allure facile (EF) pour travailler l’endurance et le plaisir de courir.\n10 minutes de renforcement musculaire ciblé pour prévenir les blessures et améliorer la posture.",
    image: "./ASSETS/IMG/Rond_orange.png",
    image2: "./ASSETS/IMG/Howseasiderun.jpg",
  },
  3: {
    rdv: "19H00",
    localisation:
      "https://www.google.fr/maps/place/Gymnase+scolaire/@49.9597573,1.1820921,17z/data=!4m15!1m8!3m7!1s0x47e0a6dd1a19fe1b:0xdc96561fab8f1616!2s2+Rue+du+Plain+March%C3%A9,+76370+Petit-Caux!3b1!8m2!3d49.963015!4d1.189613!16s%2Fg%2F11txhzdm8_!3m5!1s0x47e0a7e7b93b9aef:0x985ef0efb458bb3b!8m2!3d49.9595255!4d1.1833977!16s%2Fg%2F11tjs4tn80?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3Drue du plain marché,76370 petit caux",
    lieu: "Local",
    title: "Run Blabla",
    description:
      "40 à 60 minutes de course à allure facile (EF) pour travailler l’endurance et le plaisir de courir.\n10 minutes de renforcement musculaire ciblé pour prévenir les blessures et améliorer la posture.",
    image: "./ASSETS/IMG/Rond_orange.png",
    image2: "./ASSETS/IMG/Howseasiderun.jpg",
  },
  5: {
    rdv: "19H00",
    localisation:
      "https://www.google.fr/maps/place/Gymnase+scolaire/@49.9597573,1.1820921,17z/data=!4m15!1m8!3m7!1s0x47e0a6dd1a19fe1b:0xdc96561fab8f1616!2s2+Rue+du+Plain+March%C3%A9,+76370+Petit-Caux!3b1!8m2!3d49.963015!4d1.189613!16s%2Fg%2F11txhzdm8_!3m5!1s0x47e0a7e7b93b9aef:0x985ef0efb458bb3b!8m2!3d49.9595255!4d1.1833977!16s%2Fg%2F11tjs4tn80?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3Drue du plain marché,76370 petit caux",
    lieu: "Local",
    title: "Run Blabla",
    description:
      "40 à 60 minutes de course à allure facile (EF) pour travailler l’endurance et le plaisir de courir.\n10 minutes de renforcement musculaire ciblé pour prévenir les blessures et améliorer la posture.",
    image: "./ASSETS/IMG/Rond_orange.png",
    image2: "./ASSETS/IMG/Howseasiderun.jpg",
  },
  5: {
    rdv: "19H00",
    localisation:
      "https://www.google.fr/maps/place/Gymnase+scolaire/@49.9597573,1.1820921,17z/data=!4m15!1m8!3m7!1s0x47e0a6dd1a19fe1b:0xdc96561fab8f1616!2s2+Rue+du+Plain+March%C3%A9,+76370+Petit-Caux!3b1!8m2!3d49.963015!4d1.189613!16s%2Fg%2F11txhzdm8_!3m5!1s0x47e0a7e7b93b9aef:0x985ef0efb458bb3b!8m2!3d49.9595255!4d1.1833977!16s%2Fg%2F11tjs4tn80?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3Drue du plain marché,76370 petit caux",
    lieu: "Local",
    title: "Run Blabla",
    description:
      "40 à 60 minutes de course à allure facile (EF) pour travailler l’endurance et le plaisir de courir.\n10 minutes de renforcement musculaire ciblé pour prévenir les blessures et améliorer la posture.",
    image: "./ASSETS/IMG/Rond_orange.png",
    image2: "./ASSETS/IMG/Howseasiderun.jpg",
  },
  13: {
    rdv: "19H00",
    localisation:
      "https://www.google.fr/maps/place/Gymnase+scolaire/@49.9597573,1.1820921,17z/data=!4m15!1m8!3m7!1s0x47e0a6dd1a19fe1b:0xdc96561fab8f1616!2s2+Rue+du+Plain+March%C3%A9,+76370+Petit-Caux!3b1!8m2!3d49.963015!4d1.189613!16s%2Fg%2F11txhzdm8_!3m5!1s0x47e0a7e7b93b9aef:0x985ef0efb458bb3b!8m2!3d49.9595255!4d1.1833977!16s%2Fg%2F11tjs4tn80?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3Drue du plain marché,76370 petit caux",
    lieu: "Local",
    title: "Run Blabla",
    description:
      "40 à 60 minutes de course à allure facile (EF) pour travailler l’endurance et le plaisir de courir.\n10 minutes de renforcement musculaire ciblé pour prévenir les blessures et améliorer la posture.",
    image: "./ASSETS/IMG/Rond_orange.png",
    image2: "./ASSETS/IMG/Howseasiderun.jpg",
  },
  19: {
    rdv: "19H00",
    localisation:
      "https://www.google.fr/maps/place/Gymnase+scolaire/@49.9597573,1.1820921,17z/data=!4m15!1m8!3m7!1s0x47e0a6dd1a19fe1b:0xdc96561fab8f1616!2s2+Rue+du+Plain+March%C3%A9,+76370+Petit-Caux!3b1!8m2!3d49.963015!4d1.189613!16s%2Fg%2F11txhzdm8_!3m5!1s0x47e0a7e7b93b9aef:0x985ef0efb458bb3b!8m2!3d49.9595255!4d1.1833977!16s%2Fg%2F11tjs4tn80?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3Drue du plain marché,76370 petit caux",
    lieu: "Local",
    title: "Run Blabla",
    description:
      "40 à 60 minutes de course à allure facile (EF) pour travailler l’endurance et le plaisir de courir.\n10 minutes de renforcement musculaire ciblé pour prévenir les blessures et améliorer la posture.",
    image: "./ASSETS/IMG/Rond_orange.png",
    image2: "./ASSETS/IMG/Howseasiderun.jpg",
  },
  28: {
    rdv: "19H00",
    localisation:
      "https://www.google.fr/maps/place/Gymnase+scolaire/@49.9597573,1.1820921,17z/data=!4m15!1m8!3m7!1s0x47e0a6dd1a19fe1b:0xdc96561fab8f1616!2s2+Rue+du+Plain+March%C3%A9,+76370+Petit-Caux!3b1!8m2!3d49.963015!4d1.189613!16s%2Fg%2F11txhzdm8_!3m5!1s0x47e0a7e7b93b9aef:0x985ef0efb458bb3b!8m2!3d49.9595255!4d1.1833977!16s%2Fg%2F11tjs4tn80?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3Drue du plain marché,76370 petit caux",
    lieu: "Local",
    title: "Run Blabla",
    description:
      "40 à 60 minutes de course à allure facile (EF) pour travailler l’endurance et le plaisir de courir.\n10 minutes de renforcement musculaire ciblé pour prévenir les blessures et améliorer la posture.",
    image: "./ASSETS/IMG/Rond_orange.png",
    image2: "./ASSETS/IMG/Howseasiderun.jpg",
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

console.log(currentDay);

for (let day = 1; day <= dayInMonth; day++) {
  const dayNumber = document.createElement("div");
  dayNumber.classList.add("Number");
  dayNumber.textContent = day;

  if (day === currentDay.getDate()) {
    dayNumber.classList.add("currentDay");
  }
  containerNomberDay.appendChild(dayNumber);

  if (events[day]) {
    const event = events[day];
    const imgEvents = document.createElement("img");
    imgEvents.src = event.image;
    imgEvents.alt = event.title;
    imgEvents.classList.add("imgEvent");

    dayNumber.appendChild(imgEvents);

    imgEvents.addEventListener("click", () => {
      ShowEventsDetail(events[day]);
    });
  }
}

function ShowEventsDetail(event) {
  const modalContainer = document.querySelector(".modalContainer");
  const modalContent = document.querySelector("#modalContent");
  const body = document.querySelector("main");

  modalContainer.style.opacity = "1";
  modalContainer.style.zIndex = "10";
  modalContent.innerHTML = "";
  body.style.opacity = "0.4";

  const modalButton = document.querySelector("#modalButton");
  modalButton.addEventListener("click", () => {
    modalContainer.style.opacity = "0";
    modalContainer.style.zIndex = "-2";
    body.style.opacity = "1";
  });

  const rdv = document.createElement("h2");
  rdv.textContent = event.rdv;

  const modalLoca = document.createElement("a");
  modalLoca.href = event.localisation;
  modalLoca.textContent = event.lieu;
  modalLoca.target = "_blank";
  modalLoca.rel = "noopener noreferrer";

  const title = document.createElement("h2");
  title.textContent = event.title;

  const desc = document.createElement("p");
  desc.textContent = event.description;

  const img2 = document.createElement("img");
  img2.src = event.image2;
  img2.alt = event.description;

  modalContent.appendChild(rdv);
  modalContent.appendChild(title);
  modalContent.appendChild(modalLoca);
  modalContent.appendChild(desc);
  modalContent.appendChild(img2);
}
