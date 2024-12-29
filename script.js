let maintenance = true;
window.onload = () => {
  if (maintenance) {
    loader.innerText = "OOps on dirait que quelque chose ne s'est pas passé pas correctement !";
    setTimeout ( () => {
    loader.innerText = "";
    logo = document.createElement('img');
    errormsg = document.createElement('span');
    logo.id = "icon";
    logo.src = "./assets/logos/Amt repair signature medium.svg";
    loader.appendChild(logo);
    errormsg.innerText = "maintenance en cours";
    loader.appendChild(errormsg);
   // setTimeout( () => { document.location = ""; },30000)
  }, 3000);
  } else {
  loader.setAttribute("minimize","");
  setTimeout( () => {loader.style.display = "none";},1500)
  document.body.style.overflow = "visible";
  document.body.style.overflowX = "hidden";
  mainsection.classList.add("animationloaded");
  getSavedThemePreference();
  animationManager();
  }
}
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
      const sectionPosition = document.getElementById('section1').offsetTop;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    });


    function scrollFunction() {
      var section1 = document.querySelector('header');
      var scrollToTopButton = document.getElementById("scrollToTopBtn");
      var section1Offset = section1.offsetTop;

      if (window.pageYOffset > section1Offset) {
        scrollToTopButton.classList.remove('hide');
        scrollToTopButton.classList.add('active');
	menu.classList.remove('hide');
	menu.classList.add('slide-animation');


      } else {
        scrollToTopButton.classList.remove('active');
	menu.classList.remove('slide-animation');
	menu.classList.add('hide');
        scrollToTopButton.classList.add('hide');


      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

  const section1 = document.getElementById('section1');
    const menu = document.querySelector('menu');

    // Ajouter la classe avec l'animation lorsque la souris entre dans la section
    section1.addEventListener('mouseenter', () => {
      
    });



// Sélection des éléments du menu
const items = document.querySelectorAll('#section1 menu .item');

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
    const itemImages = document.querySelectorAll('#contenu menu .item img');
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
msgbox.classList.remove('hide');
msgbox.classList.add('show');
msgbox.innerHTML = statut ;
alertIS();
 }
function alertIS() {
var msgBox = document.getElementById('msgbox');
if (msgBox.classList.contains('show')) {
document.body.style.overflow="hidden";
} else {
document.body.style.overflow="visible";
}
}
function closealert() {
msgbox.classList.remove('show');
msgbox.classList.add('hide');
alertIS();
}

// Sélection des éléments du menu
const menuItems = document.querySelectorAll('#contenu menu .item');
const backButton = document.querySelector('.backbutton');

// Sélection des éléments de la liste des services
const serviceItems = document.querySelectorAll('#services .item');

// Fonction pour gérer le clic sur un élément de la liste des services
function handleServiceItemClick(event) {
    // Retirer la classe 'selected' de tous les éléments de la liste des services
    serviceItems.forEach(item => {
        item.classList.remove('selected');
        backButton.style.display = 'flex';
const servicesContainer = document.getElementById('services');
setTimeout ( function(){ servicesContainer.style.justifyContent = 'center';},400);
    });

    // Ajouter la classe 'selected' à l'élément cliqué
    event.currentTarget.classList.add('selected');

    // Masquer les éléments du menu
    menuItems.forEach(item => {
        item.style.display = 'none';
    });
}

// Fonction pour gérer le clic sur le bouton de retour (.backbutton)
function handleBackButtonClick() {
    // Retirer la classe 'selected' de #services
    serviceItems.forEach(item => {
        item.classList.remove('selected');
const servicesContainer = document.getElementById('services');
setTimeout ( function(){ servicesContainer.style.justifyContent = 'normal';},400);
    });

    // Masquer le bouton de retour
    backButton.style.display = 'none';

    // Afficher les éléments du menu
    menuItems.forEach(item => {
        item.style.display = 'flex';
    });
}

// Ajouter un gestionnaire d'événement à chaque élément de la liste des services
serviceItems.forEach(item => {
    item.addEventListener('click', handleServiceItemClick);
});

// Ajouter un gestionnaire d'événement au bouton de retour (.backbutton)
backButton.addEventListener('click', handleBackButtonClick);




document.querySelector('#contact-item top').addEventListener('click', function() {
document.querySelector('#button-contactitem img').classList.toggle('rotated');
document.querySelector('#contact-item bottom').classList.toggle('active');
    });


document.querySelector('#contact-item bottom button').addEventListener('click', function() {
const deviceType = detectDeviceType();
if ( deviceType === 'desktop' ) {
alert('scannez le code qr <alinea></alinea><img src="./assets/images/QRphone.png" style="height: 50%;"></img> ou appelez au 07.50.04.89.92 <p></p><button onclick="closealert();"><img src="./assets/images/close-blue.png"></button>');
} else {
document.location.href = "tel:" + "33750048992";
}
    });

//<a href="sms:0602010304">Message SMS</a>

function debugmode() {
alert('cc');
}
