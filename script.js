var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
    if (button.textContent === "Clique aqui! ❤") {
      button.textContent = "...";  // Muda o texto enquanto carrega
      
      // Agora, chama a função para substituir o conteúdo da página com o loop de imagens
      startImageLoop();  // Inicia o loop de imagens
    }
  });
  
  // Função que substitui o conteúdo da página atual com as imagens em loop
  function startImageLoop() {
    // Cria um contêiner para o loop de imagens (mantendo o canvas com o fundo de estrelas)
    var imageContainer = document.createElement("div");
    imageContainer.style.position = "absolute";  // Faz com que fique sobre o canvas
    imageContainer.style.top = 0;
    imageContainer.style.left = 0;
    imageContainer.style.width = "100%";
    imageContainer.style.height = "100%";
    imageContainer.style.display = "flex";
    imageContainer.style.justifyContent = "center";
    imageContainer.style.alignItems = "center";
    imageContainer.style.zIndex = 1;  // Garante que as imagens fiquem acima das estrelas
    document.body.appendChild(imageContainer);
  
    // Cria a tag <img> para as imagens
    var loopImage = document.createElement("img");
    loopImage.style.maxWidth = "100%";  // Ajusta o tamanho da imagem
    loopImage.style.maxHeight = "100%";  // Ajusta o tamanho da imagem
    loopImage.style.objectFit = "contain";  // Faz a imagem caber na tela sem distorção
    imageContainer.appendChild(loopImage);
  
    var imgIndex = 0;
  
    // Carrega imediatamente a primeira imagem
    loopImage.src = "assets/image.jpeg";
  
    // Função para atualizar a imagem
    setInterval(function() {
      imgIndex = (imgIndex + 1) % 6; // Alterna entre image.jpeg até image5.jpeg
      // Condicional para garantir que a primeira imagem será 'image.jpeg'
      if (imgIndex === 0) {
        loopImage.src = "assets/image.jpeg";
      } else {
        loopImage.src = "assets/image" + imgIndex + ".jpeg";
      }
    }, 3000); // Troca a imagem a cada 3 segundos
  }
  

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    context.shadowColor = "rgba(255, 105, 180, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 250){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("eu ainda não consigo acreditar como tive tanta sorte", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("eu ainda não consigo acreditar como tive tanta sorte", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }
    
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("entre milhares de pessoas no planeta", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("entre milhares de pessoas no planeta", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }
    
    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("eu consegui te encontrar", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("eu consegui te encontrar", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }
    
    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText('você consegue fazer todos momentos "comuns"', canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText('você consegue fazer todos momentos "comuns"', canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }
    
    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("se tornarem momentos extraordinários", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("se tornarem momentos extraordinários", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }
    
    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 2750){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("e por isso, a cada dia que passa...", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 2750 && frameNumber < 3000){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("e por isso, a cada dia que passa...", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }
    
    if(frameNumber == 3000){
        opacity = 0;
    }
    if(frameNumber >= 3000){
        context.fillStyle = `rgba(255, 105, 180, ${thirdOpacity})`;
        
        // Desenhando o primeiro texto
        context.fillText("eu te amo mais e mais...", canvas.width / 2, canvas.height / 2);
    
        // Desenhando o segundo texto, deslocado para a linha seguinte
        context.fillText("e assim será, pra sempre!", canvas.width / 2, canvas.height / 2 + 30); // 30px abaixo do primeiro texto
        
        thirdOpacity += 0.01;
        button.style.display = "block";
    }
    
    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);