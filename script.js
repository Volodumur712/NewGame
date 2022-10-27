/*
1 Зробити переміщення кулі в кінець ігрового поля, після вильоту за межі поля 
повертати її на початок поля, на кшталт як я зробив приклад з ворогом. є

2 Зробити заборону на переміщення гравця за межі ігрового поля вгору та вниз. 
Щоб на кордонах він не смикався і не стрибав. 
Підказка – потрібно спочатку перевіряти позицію гравця, а потім виконувати рух
*/

audioplay = document.querySelector("audio");

// кнопка старт забирає блок старт і показує блок game
// варіант 1
/*
startBaton = document.querySelector("#start button");
blocGame = document.querySelector("#game");
startBaton.onclick = function() {
	blokStart = document.querySelector("#start");
	blokStart.style.display = "none";
	blocGame.style.display = "block";
}
*/

// варіант 2
startBaton = document.querySelector("#start button");
blokStart = document.querySelector("#start");
blocGame = document.querySelector("#game");
// виклик функції старт гри
startBaton.onclick = function() {
	startGame();
}

// вкл-викл картинку та музику
sound = "off"; // "on"

soundButton = document.querySelector("#sound img");
soundButton.onclick = function() {
	if (sound == "on") {
		soundButton.src = "images/mute_sound.png";
		sound = "off";
		audioplay.pause();
	} else {
		soundButton.src = "images/sound_on.png";
		sound = "on";
		audioplay.play();
	}
}
// рух гравця
gamer = document.querySelector("#player");

// упрвління кнопками вверх вниз
document.onkeydown = function moveGamer(event) {
	//console.dir(event);
	// рух вверх
	if(event.keyCode == 87 || event.keyCode == 38) {
		if(gamer.offsetTop > 75) {
			gamer.style.top = gamer.offsetTop - 20 + "px";
		}
	}
	// вниз рух
	if(event.keyCode == 83 || event.keyCode == 40) {
		if(gamer.offsetTop <  440) {
			gamer.style.top = gamer.offsetTop + 20 + "px";
		}	
	}
}

// функція старт гри
function startGame() {
	blokStart.style.display = "none";
	blocGame.style.display = "block";

// енемі перший
	enemy1 = document.querySelector(".enemy.type-1");
	moveEnemy1(enemy1);

// другий
	enemy2 = document.querySelector(".enemy.type-2");
	moveEnemy2(enemy2);

// куля
	bullet1 = document.querySelector(".bullet");
	moveBullet(bullet1);
}

// рух енемі 1
function moveEnemy1(enemy) {
	//console.dir(enemy);
	setInterval(function() {
		enemy.style.left = enemy.offsetLeft - 10 + "px";
		//console.dir(enemy.offsetLeft);
		if(enemy.offsetLeft < -100) {
			enemy.style.left = document.querySelector("body").clientWidth + 150 + "px";
		}
	}, 50);
}

// рух енемі 2
function moveEnemy2(enemy) {
	setInterval(function() {
		enemy.style.left = enemy.offsetLeft - 8 + "px";
		if(enemy.offsetLeft < -100) {
			enemy.style.left = document.querySelector("body").clientWidth + 150 + "px";
		}
	}, 70);
}

// куля рух
function moveBullet(bullet) {
	//console.dir(bullet);
	setInterval(function() {
		bullet.style.left = bullet.offsetLeft + 30 + "px";
		if(bullet.offsetLeft > 1500) {
			bullet.style.left = document.querySelector("body").clientWidth -1099 + "px";
		}
	}, 30);
}

 