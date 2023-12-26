window.onload = function(){loader.style.display="none";document.body.style.overflow="visible";document.body.style.overflowX="hidden";mainsection.classList.add("animationloaded");}

detectDeviceType();

// Fonction pour détecter les différents types d'appareils
function detectDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios'; // Retourne 'ios' si l'appareil est un iPhone, iPad ou iPod
  } else if (/android|webos|blackberry|iemobile|opera mini/.test(userAgent)) {
    return 'android'; // Retourne 'android' si l'appareil est un appareil Android, webOS, BlackBerry, IEMobile ou Opera Mini
  } else {
    return 'desktop'; // Retourne 'desktop' pour les autres appareils (assumés être des ordinateurs de bureau)
  }
}
Device();
// Charger le fichier CSS approprié en fonction du type d'appareil détecté
function Device() {

  const deviceType = detectDeviceType();

  if (deviceType === 'ios') {

document.body.classList.add('ios'); // Charger le fichier CSS spécifique pour iOS (iPhone, iPad, iPod)

  } else if (deviceType === 'android') {

document.body.classList.add('mobile');  // Charger le fichier CSS spécifique pour Android, webOS, BlackBerry, IEMobile, Opera Mini

  } else {

document.body.classList.add(deviceType); // Charger un fichier CSS par défaut pour les ordinateurs de bureau

  }

};




function DeviceOrientation() {
  // Fonction pour détecter l'orientation et ajouter une classe correspondante
  function verifierOrientation() {
    const body = document.body;

    if (window.orientation === 0 || window.orientation === 180) {
      // Orientation portrait
      body.classList.remove('paysage');
      body.classList.add('portrait');
    } else {
      // Orientation paysage
      body.classList.remove('portrait');
      body.classList.add('paysage');
    }
  }

  // Écoute des changements d'orientation
  window.addEventListener('orientationchange', verifierOrientation);

  // Appel initial pour définir la classe au chargement de la page
  verifierOrientation();
}

// Appel de la fonction pour démarrer la détection de l'orientation
DeviceOrientation();



  window.onscroll = function() {
      scrollFunction();
    };

document.getElementById('startbutton').addEventListener('click', function() {
      const sectionPosition = document.getElementById('section2').offsetTop;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    });


    function scrollFunction() {
      var section1 = document.getElementById("mainsection");
      var scrollToTopButton = document.getElementById("scrollToTopBtn");
      var section1Offset = section1.offsetTop;

      if (window.pageYOffset > section1Offset) {
        scrollToTopButton.classList.add('active');
	menu.classList.remove('hide');
	menu.classList.add('slide-animation');


      } else {
        scrollToTopButton.classList.remove('active');
	menu.classList.remove('slide-animation');
	menu.classList.add('hide');


      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

  const section2 = document.getElementById('section2');
    const menu = document.querySelector('menu');

    // Ajouter la classe avec l'animation lorsque la souris entre dans la section
    section2.addEventListener('mouseenter', () => {
      
    });


// Sélection des éléments du menu
const items = document.querySelectorAll('#contenu menu  .item');

// Sélection du conteneur du contenu à changer
const contentElements = document.querySelectorAll('#rightcontainer .content');

// Sélection du span à afficher si aucun élément du menu n'est sélectionné
const selectServiceSpan = document.querySelector('#rightcontainer span');

// Fonction pour gérer l'affichage des éléments avec un délai
function showElementWithDelay(element, delay) {
  setTimeout(() => {
    element.style.display = 'block';
    setTimeout(() => {
      element.classList.add('active');
      element.style.opacity = '1';
    }, 50); // Attendre un court délai avant d'appliquer la transition d'opacité
  }, delay);
}

// Vérifier si aucun élément du menu n'est sélectionné initialement et afficher le span en conséquence
let noItemSelected = true;
items.forEach((item) => {
  if (item.classList.contains('selected')) {
    noItemSelected = false;
  }
});
if (noItemSelected) {
  selectServiceSpan.style.display = 'flex';
}

// Ajout d'un gestionnaire d'événement à chaque élément du menu
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Masquer le span si un élément du menu est sélectionné
    selectServiceSpan.style.display = 'none';

    // Si l'élément est déjà sélectionné, ne rien faire
    if (item.classList.contains('selected')) {
      return;
    }

    // Cacher tous les contenus actifs avec une transition d'opacité et un délai
    contentElements.forEach((content) => {
      if (content.classList.contains('active')) {
        content.classList.remove('active');
        content.style.transition = 'opacity 0.3s ease-out'; // Ajout d'une transition d'opacité
        content.style.opacity = '0';
        setTimeout(() => {
          content.style.display = 'none';
          content.style.transition = ''; // Retrait de la transition après la disparition
        }, 300); // Attendre la fin de la transition pour masquer le contenu
      }
    });

    // Afficher le contenu correspondant à l'élément cliqué avec une transition d'opacité et un délai
    const selectedContent = contentElements[index];
    const delay = 500; // Délai avant l'apparition du nouvel élément
    setTimeout(() => {
      selectedContent.style.display = 'flex';
      setTimeout(() => {
        selectedContent.classList.add('active');
        selectedContent.style.transition = 'opacity 0.3s ease-in'; // Ajout d'une transition d'opacité
        selectedContent.style.opacity = '1';
      }, 50); // Attendre un court délai avant d'appliquer la transition d'opacité
    }, delay);

    // Appliquer le style à l'élément sélectionné
    items.forEach((el) => el.classList.remove('selected')); // Retirer la classe 'selected' de tous les éléments
    item.classList.add('selected'); // Ajouter la classe 'selected' à l'élément cliqué

    // Modifier le chemin de l'image selon l'état de sélection
    const itemImages = document.querySelectorAll('#contenu .item img');
    itemImages.forEach((img, imgIndex) => {
      if (imgIndex === index) {
        img.src = img.src.replace('.png', '-white.png');
      } else {
        img.src = img.src.replace('-white.png', '.png');
      }
    });
  });
});


function alert(statut) {
msgbox.style.display="block";
msgbox.innerHTML = statut ;
 }

