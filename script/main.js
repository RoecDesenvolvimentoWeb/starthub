window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});
document.addEventListener("DOMContentLoaded", function () {
  var logoAnimation = document.querySelector(".logo_animation");
  var logoBubble = document.querySelector(".logo_bubble");
  var nameLogo = document.querySelector(".name_logo");
  var loading = document.querySelector(".loading");

  // Defina o deslocamento inicial e a opacidade
  logoAnimation.style.transform = "translate(-50%, -50%) translateY(20px)";
  logoAnimation.style.opacity = 0;

  // Animação da logo_animation
  setTimeout(function () {
    logoAnimation.style.transition = "transform 1s ease, opacity 1s ease";
    logoAnimation.style.transform = "translate(-50%, -50%)";
    logoAnimation.style.opacity = 1;

    // Animação da logo_bubble após um intervalo
    setTimeout(function () {
      logoBubble.style.transition = "transform 1s ease, left 1s ease"; // Adicione a transição para a propriedade left
      logoBubble.style.transform = "rotate(360deg)";

      // Desaparecimento do name_logo
      nameLogo.style.transition = "opacity 1s ease";
      nameLogo.style.opacity = 0;

      // Mover logoBubble para a esquerda 100px com translate
      setTimeout(function () {
        logoBubble.style.transform += " translateX(-80px)";

        // Fazer logoBubble subir e desaparecer
        setTimeout(function () {
          logoBubble.style.transition = "opacity 1s ease, transform 1s ease";
          logoBubble.style.opacity = 0;
          logoBubble.style.transform += " translateY(-50px)";

          // Desaparecimento do elemento de loading
          setTimeout(function () {
            loading.style.transition =
              "opacity 1s ease, pointer-events 0.5s ease"; // Adiciona transição para pointer-events
            loading.style.pointerEvents = "none"; // Define pointer-events como none
            loading.style.opacity = 0;
            loading.style.display = "none";
          }, 1000); // Aguarde 1 segundo após a movimentação da logoBubble
        }, 1000); // Aguarde 1 segundo após a movimentação para a esquerda
      }, 1000); // Aguarde 1 segundo após a rotação
    }, 1000); // Aguarde 1 segundo antes de girar
  }, 100);
});

const section = document.querySelector(".section_a");

document.addEventListener("mousemove", (e) => {
  const mouseY = e.clientY / window.innerHeight; // Posição vertical do mouse relativa à altura da janela

  // Defina o deslocamento do background usando a posição do mouse
  section.style.backgroundPositionX = mouseY * 700 + "%";
});

// BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS
// BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS
// BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS
// BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS
// BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("mousemove", moveButton);
});

function moveButton(event) {
  const rect = this.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Ajuste os valores conforme desejado para controlar a intensidade do movimento
  const movementX = -(mouseX - rect.width / 2) / 10;
  const movementY = -(mouseY - rect.height / 2) / 10;

  this.style.transform = `translate(${movementX}px, ${movementY}px)`;
}

const buttons2 = document.querySelectorAll(".button_second");

buttons2.forEach((button2) => {
  button2.addEventListener("mousemove", moveButton2);
});

function moveButton2(event) {
  const rect = this.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Ajuste os valores conforme desejado para controlar a intensidade do movimento
  const movementX = -(mouseX - rect.width / 2) / 10;
  const movementY = -(mouseY - rect.height / 2) / 10;

  this.style.transform = `translate(${movementX}px, ${movementY}px)`;
}

// SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION
// SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION
// SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION
// SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION SECOND SECTION

var secondSection = document.querySelector(".second_section");
var animationStarted = false;

window.addEventListener("scroll", function () {
  var positionFromTop = secondSection.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  // Defina uma margem superior para quando você quer que a transição comece
  var triggerPoint = 0.1 * screenHeight;

  if (positionFromTop < triggerPoint) {
    if (!animationStarted) {
      animateOpacity(1); // Iniciar animação para aumentar a opacidade
      animationStarted = true;
    }
  } else {
    if (animationStarted) {
      animateOpacity(0); // Iniciar animação para diminuir a opacidade
      animationStarted = false;
    }
  }
});

function animateOpacity(targetOpacity) {
  var opacity = parseFloat(secondSection.style.opacity) || 0;
  var startTime = null;
  var duration = 1000;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    var elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      // Duração da animação em milissegundos
      opacity = opacity + (targetOpacity - opacity) * (elapsedTime / duration); // Interpolação linear
      secondSection.style.opacity = opacity;
      requestAnimationFrame(animate);
    } else {
      secondSection.style.opacity = targetOpacity;
      // Após a conclusão da animação de opacidade, inicie a animação de fade nas imagens das cartas
      fadeInCards();
    }
  }

  requestAnimationFrame(animate);
}

function fadeInCards() {
  var cards = document.querySelectorAll(".card");
  cards.forEach(function (card, index) {
    setTimeout(function () {
      card.classList.add("fade-in");
    }, index * 500); // Atraso de 200ms entre cada imagem (ajustado para um intervalo menor)
  });
}

// SECTION B
const animationDelay = 1000; // 1 segundo
const animationDuration = 500; // 0.5 segundo

window.addEventListener("scroll", function () {
  const titleElement = document.querySelector(".about_us_h1");
  const paragraphElement = document.querySelector(".about_us");
  const buttonElement = document.querySelector(".about_us_button");
  const titlePositionFromTop = titleElement.getBoundingClientRect().top;
  const paragraphPositionFromTop = paragraphElement.getBoundingClientRect().top;
  const buttonPositionFromTop = buttonElement.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  const triggerPoint = 0.1 * screenHeight;

  if (titlePositionFromTop - screenHeight + triggerPoint <= 0) {
    setTimeout(function () {
      titleElement.style.transitionDuration = `${animationDuration}ms`;
      animateSlide(titleElement, 0); // Animar título para dentro
      setTimeout(function () {
        paragraphElement.style.transitionDuration = `${animationDuration}ms`;
        animateSlide(paragraphElement, 0); // Animar parágrafo para dentro após a animação do título
        setTimeout(function () {
          buttonElement.style.transitionDuration = `${animationDuration}ms`;
          animateSlide(buttonElement, 0); // Animar botão para dentro após a animação do parágrafo
        }, animationDuration);
      }, animationDuration);
    }, animationDelay);
  } else {
    titleElement.style.transitionDuration = `${animationDuration}ms`;
    animateSlide(titleElement, -100); // Animar título para fora
    paragraphElement.style.transitionDuration = `${animationDuration}ms`;
    animateSlide(paragraphElement, -100); // Animar parágrafo para fora
    buttonElement.style.transitionDuration = `${animationDuration}ms`;
    animateSlide(buttonElement, -100); // Animar botão para fora
  }
});

function animateSlide(element, offsetX) {
  element.style.opacity = offsetX === 0 ? 1 : 0; // Se offsetX é 0, definir a opacidade como 1, caso contrário, definir como 0
  element.style.transform = `translateX(${offsetX}%)`; // Usar offsetX para definir a posição
}

const sectionB = document.querySelector(".section_b");

sectionB.addEventListener("mousemove", function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const offsetX = (mouseX - window.innerWidth / 2) / 30; // Ajuste a sensibilidade do movimento horizontal
  const offsetY = (mouseY - window.innerHeight / 2) / 30; // Ajuste a sensibilidade do movimento vertical

  sectionB.style.backgroundPosition = `${50 + offsetX}% ${50 + offsetY}%`;
});

// SECTION C
const animationDelayC = 1000; // 1 segundo
const animationDurationC = 500; // 0.5 segundo
const fadeInDuration = 500; // Duração do fade-in da div .galery_wrapper
const delayAfterTitleAnimation = 100; // 1 segundo de atraso após a animação do título

window.addEventListener("scroll", function () {
  const titleElementC = document.querySelector(".section_c h1");
  const titlePositionFromTopC = titleElementC.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  const triggerPoint = 0.1 * screenHeight;

  if (titlePositionFromTopC - screenHeight + triggerPoint <= 0) {
    setTimeout(function () {
      titleElementC.style.transitionDuration = `${animationDurationC}ms`;
      animateSlide(titleElementC, 0); // Animar título para dentro
      setTimeout(function () {
        // Seleciona a div .galery_wrapper
        const galeryWrapper = document.querySelector(".galery_wrapper");

        // Define a transição para a div .galery_wrapper
        galeryWrapper.style.transition = `opacity ${fadeInDuration}ms`;
        galeryWrapper.style.opacity = 1;
      }, delayAfterTitleAnimation);
    }, animationDelayC);
  } else {
    titleElementC.style.transitionDuration = `${animationDurationC}ms`;
    animateSlide(titleElementC, -100); // Animar título para fora
  }
});

function animateSlide(element, offsetX) {
  element.style.opacity = offsetX === 0 ? 1 : 0; // Se offsetX é 0, definir a opacidade como 1, caso contrário, definir como 0
  element.style.transform = `translateX(${offsetX}%)`; // Usar offsetX para definir a posição
}

// Inicializa a div .galery_wrapper com opacidade 0
document.addEventListener("DOMContentLoaded", function () {
  const galeryWrapper = document.querySelector(".galery_wrapper");
  galeryWrapper.style.opacity = 0;
});

// SECTION D
const sectionD = document.querySelector(".section_d");

sectionD.addEventListener("mousemove", function (event) {
  const mouseY = event.clientY;

  const offsetY = (mouseY - window.innerWidth / 2) / 30; // Ajuste a sensibilidade do movimento horizontal

  sectionD.style.backgroundPosition = `${100 + offsetY}% ${190 + offsetY}%`;
});
