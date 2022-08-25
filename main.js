canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car2Width = 75;
car2Height = 100;
backgroundImage="parkingLot.jpg"

car2image = "car2.png";

car2X = 5;
car2Y = 225;

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	car2ImgTag = new Image(); //definindo uma variável com uma nova imagem
	car2ImgTag.onload = uploadcar2; // ajustando uma função, ao carregar essa variável
	car2ImgTag.src = car2Image;   // carregar a imagem
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar2() {
	ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
}
function up()
{
	if(car2Y >=0)
	{
		car2Y = car2Y - 10;
		console.log("Quando direcional cima for pressionada,  x = " + car2X + " | y = " +car2Y);
		 uploadBackground();
		 uploadcar2();
	}
}
function down()
{
	if(car2Y <=500)
	{
		car2Y =car2Y+ 10;
		console.log("Quando direcional baixo for pressionada,  x = " + car2X + " | y = " +car2Y);
		uploadBackground();
		uploadcar2();
	}
}
function left()
{
	if(car2X >= 0)
	{
		car2X =car2X - 10;
		console.log("Quando direcional esquerda for pressionada,  x = " + car2X + " | y = " +car2Y);
		uploadBackground();
		 uploadcar2();
	}
}
function right()
{
	if(car2X <= 700)
	{
		car2X =car2X + 10;
		console.log("Quando direcional direita for pressionada,  x = " + car2X + " | y = " +car2Y);
		uploadBackground();
		uploadcar2();
   }
}
