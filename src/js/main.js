const projects = [
  {
    id: 1,
    title: "Projet 1",
    image: "src/assets/images/project1.jpg",
    description: "Un site vitrine pour une entreprise locale.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jordansicre/projet1"
  },
  {
    id: 2,
    title: "Projet 2",
    image: "src/assets/images/project1.jpg",
    description: "Un site vitrine pour une entreprise locale.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jordansicre/projet1"
  },
  {
    id: 3,
    title: "Projet 3",
    image: "src/assets/images/project1.jpg",
    description: "Un site vitrine pour une entreprise locale.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jordansicre/projet1"
  },
  {
    id: 4,
    title: "Projet 4",
    image: "src/assets/images/project1.jpg",
    description: "Un site vitrine pour une entreprise locale.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jordansicre/projet1"
  },
  {
    id: 5,
    title: "Projet 5",
    image: "src/assets/images/project1.jpg",
    description: "Un site vitrine pour une entreprise locale.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jordansicre/projet1"
  },
  {
    id: 6,
    title: "Projet 6",
    image: "src/assets/images/project1.jpg",
    description: "Un site vitrine pour une entreprise locale.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jordansicre/projet1"
  },
  {
    id: 7,
    title: "Projet 7",
    image: "src/assets/images/project1.jpg",
    description: "Un site vitrine pour une entreprise locale.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jordansicre/projet1"
  },
  {
    id: 8,
    title: "Projet 8",
    image: "src/assets/images/project1.jpg",
    description: "Un site vitrine pour une entreprise locale.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jordansicre/projet1"
  },
  {
    id: 9,
    title: "Projet 9",
    image: "src/assets/images/project1.jpg",
    description: "Un site vitrine pour une entreprise locale.",
    technologies: ["HTML", "CSS", "JavaScript"],
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
  gallery.innerHTML = ''; // Réinitialise la galerie

  // Affiche les projets visibles
  projects.slice(0, displayedCount).forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.setAttribute('data-id', project.id);
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
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
    displayedCount = 3; // Réduit à 3 projets
  } else {
    displayedCount = projects.length; // Affiche tous les projets
  }
  renderProjects();
});

// Fonction pour attacher les événements de clic sur les projets
function attachProjectClickEvents() {
  document.querySelectorAll('.project').forEach(el => {
    el.addEventListener('click', () => {
      const projectId = el.dataset.id;
      const project = projects.find(p => p.id == projectId);

      // Affiche la modal
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
    });
  });
}

// Initialisation
renderProjects();

// Modal logic
const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

document.querySelectorAll('.project').forEach(el => {
  el.addEventListener('click', () => {
    const project = projects.find(p => p.id == el.dataset.id);
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
  });
});

// Fonction pour animer les barres de compétence
const animateSkills = () => {
  const skillBars = document.querySelectorAll('.skill-fill');
  skillBars.forEach(bar => {
    const level = bar.getAttribute('data-level'); // Niveau de compétence (0 à 10)
    const percentage = (level / 10) * 100; // Convertir en pourcentage
    bar.style.width = `${percentage}%`; // Définir la largeur
  });
};

// Observer si la section Compétences est visible
const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      animateSkills();
      observer.disconnect(); // Stopper l'observation une fois l'animation déclenchée
    }
  },
  { threshold: 0.5 } // Déclencher lorsque 50% de la section est visible
);

observer.observe(skillsSection);
