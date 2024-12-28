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
      image: "src/assets/images/project2.jpg",
      description: "Application de gestion des tâches.",
      technologies: ["SCSS", "JavaScript"],
      github: "https://github.com/jordansicre/projet2"
    }
  ];
  
  const gallery = document.querySelector('.project-gallery');
  gallery.innerHTML = projects.map(project => `
    <div class="project" data-id="${project.id}">
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
    </div>
  `).join('');
  
  // Modal logic
  const modal = document.createElement('div');
  modal.className = 'modal';
  document.body.appendChild(modal);
  
  document.querySelectorAll('.project').forEach(el => {
    el.addEventListener('click', () => {
      const project = projects.find(p => p.id == el.dataset.id);
      modal.innerHTML = `
        <div class="modal-content">
          <h3>${project.title}</h3>
          <img src="${project.image}" alt="${project.title}">
          <p>${project.description}</p>
          <p>Technologies : ${project.technologies.join(', ')}</p>
          <a href="${project.github}" target="_blank">Voir sur GitHub</a>
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
