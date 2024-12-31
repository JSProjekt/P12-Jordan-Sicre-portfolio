const projects = [
  {
    id: 1,
    title: "Riding Cities",
    image: "src/assets/images/projets/projet1.webp",
    description: "Un site vitrine pour une entreprise locale.",
    technologies: ["HTML"],
    github: "https://github.com/JSProjekt/Projet_2_Sicre_Jordan"
  },
  {
    id: 2,
    title: "Booki",
    image: "src/assets/images/projets/projet2.webp",
    description: "À partir d'une maquette Figma, j'ai développé une landing page et implémenté les media queries pour la compatibilité avec les versions tablette et mobile.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/JSProjekt/Projet_3_Sicre_Jordan"
  },
  {
    id: 3,
    title: "Ohmyfood",
    image: "src/assets/images/projets/projet3.webp",
    description: "À partir d'une maquette Figma et l'utilisation du concept mobile first, j'ai créé une page d'accueil, plusieurs pages de menus et intégré un élément de chargement.",
    technologies: ["HTML", "CSS", "SASS"],
    github: "https://github.com/JSProjekt/Openclassrooms_P4_ohmyfood"
  },
  {
    id: 4,
    title: "Print it!",
    image: "src/assets/images/projets/projet4.webp",
    description: "Ici j'ai fait l'intégration d'un carrousel sur un site.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/JSProjekt/Openclassrooms_P5_Print_it"
  },
  {
    id: 5,
    title: "Sophie Bluel",
    image: "src/assets/images/projets/projet5.webp",
    description: "En partant d'une maquette conçue sur Figma, j'ai développé une page de connexion et mis en place l'affichage dynamique des travaux dans le portfolio via une API. J'ai intégré une modale permettant à l'administrateur du site d'ajouter ou de supprimer des travaux, conformément aux exigences du projet.",
    technologies: ["HTML", "CSS","SASS", "JavaScript"],
    github: "https://github.com/JSProjekt/Openclassrooms_P6_SophieBluel"
  },
  {
    id: 6,
    title: "Nina Carducci",
    image: "src/assets/images/projets/projet6.webp",
    description: "Ma mission était d'optimiser le site web, d'améliorer son référencement SEO, et de générer un rapport sur les optimisations effectuées.",
    technologies: ["SEO", "Lighthouse", "Minifier"],
    github: "https://github.com/JSProjekt/ninacarducci-P8"
  },
  {
    id: 7,
    title: "Kasa",
    image: "src/assets/images/projets/projet7.webp",
    description: "J'ai effectué la refonte d'un site d'agence immobilière. Avec l'aide d'une maquette Figma et d'un fichier JSON pour intégrer les données sur le site.",
    technologies: ["HTML", "CSS","SASS", "JavaScript","React"],
    github: "https://github.com/JSProjekt/kasa"
  },
  {
    id: 8,
    title: "ArgentBank",
    image: "src/assets/images/projets/projet8.webp",
    description: "J'ai du réaliser l'intégration du système d'authentification avec Redux Toolkit et établir un mécanisme de transaction conforme avec un Swagger.",
    technologies: ["HTML", "CSS", "JavaScript","React","Redux"],
    github: "https://github.com/JSProjekt/P10-argentBank"
  },
  {
    id: 9,
    title: "FakeOS mobile GTA rp",
    image: "src/assets/images/projets/projet9.webp",
    description: "réaliser un faux téléphone mobile pour serveur gta rp",
    technologies: ["HTML", "CSS","SASS","JavaScript","React, NextJS ou VueJS"],
    github: "https://github.com/jordansicre/projet1"
  }
];

let displayedCount = 3; // Nombre initial de projets affichés
const gallery = document.querySelector('.project-gallery');
const showMoreButton = document.createElement('button');
showMoreButton.className = 'show-more';
showMoreButton.textContent = 'Afficher plus';

// Fonction pour afficher les projets
function renderProjects() {
  gallery.innerHTML = '';

  // Affiche les projets visibles
  projects.slice(0, displayedCount).forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.setAttribute('data-id', project.id);
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <h3>${project.title}</h3>
    `;
    gallery.appendChild(projectElement);
  });

  // Ajoute ou met à jour le bouton
  if (!gallery.contains(showMoreButton)) {
    gallery.after(showMoreButton);
  }
  if (displayedCount >= projects.length) {
    showMoreButton.textContent = 'Afficher moins';
  } else {
    showMoreButton.textContent = 'Afficher plus';
  }

  // Réattache les événements pour les modals après le rendu
  attachProjectClickEvents();
}

// Gestion des clics sur le bouton "Afficher plus / moins"
showMoreButton.addEventListener('click', () => {
  if (displayedCount >= projects.length) {
    displayedCount = 3;
  } else {
    displayedCount = projects.length;
  }
  renderProjects();
});

// Fonction réutilisable pour afficher une modale
function showModal(project) {
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="modal-details">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies :</strong> ${project.technologies.join(', ')}</p>
        <a href="${project.github}" target="_blank">Voir sur GitHub</a>
      </div>
      <button class="close">Fermer</button>
    </div>
  `;
  modal.style.display = 'flex';
  modal.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// Fonction pour attacher les événements de clic sur les projets
function attachProjectClickEvents() {
  document.querySelectorAll('.project').forEach(el => {
    el.addEventListener('click', () => {
      const projectId = el.dataset.id;
      const project = projects.find(p => p.id == projectId);
      showModal(project);
    });
  });
}

// Initialisation
renderProjects();

// Modal logic
const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

// Fonction pour animer les barres de compétence
const animateSkills = () => {
  const skillBars = document.querySelectorAll('.skill-fill');
  skillBars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    const percentage = (level / 10) * 100;
    bar.style.width = `${percentage}%`;
  });
};

// Observer si la section Compétences est visible
const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      animateSkills();
      observer.disconnect();
    }
  },
  { threshold: 0.5 }
);

observer.observe(skillsSection);

// Sélectionne le bouton
const backToTopButton = document.getElementById('back-to-top');

// Affiche le bouton uniquement lorsque la page est défilée
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Scroll l'utilisateur en haut de la page lorsqu'il clique sur le bouton
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

