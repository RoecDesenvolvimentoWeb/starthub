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
